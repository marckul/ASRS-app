import { Form } from './FormModel'

class FormKeyboard {
  static Init() {
    for (const formName in Form.formsAttributes) {
      if (Object.hasOwnProperty.call(Form.formsAttributes, formName)) {
        const radioGroup = document.getElementById(`${formName}-0`)
        radioGroup.classList.add("radio-group-active");
      }
    }

    // Add event listener on keydown
    document.addEventListener('keydown', (event) => {
      this.KeydownRouter(event)
    }, false)
  }
  /** Function routes keyborads events and make decision what action after keydown event should be done
   * @param {event} event - keydown keyboard event
   */
  static KeydownRouter(event) {
    let keyName = event.key;
    let code = event.code;
    this.preventQuestionChange = false

    if (["0", "1", "2", "3", "4"].includes(keyName)) {
      // Alert the key name and key code on keydown
      console.log(`CHOSEN KEY: Key pressed ${keyName} \n Key code value: ${code}`);      
      this.CheckRadio(keyName)
      
    } 
    else if (["ArrowUp", "ArrowDown"].includes(keyName)) { // event.ctrlKey && 
      this.ArrowKey(keyName);
    }
    else if (["ArrowLeft", "ArrowRight"].includes(keyName)) {
      this.preventQuestionChange = true
      this.HorizontalArrowKey(keyName);
    } 
    else if (["Enter"].includes(keyName)) {
      this.ArrowKey("ArrowDown");
    }
    else {
      console.log(`\nKey pressed ${keyName} \n Key code value: ${code}`);
    }

  }

  /** If set to true prevents question chenge 
   * @type { boolean } 
   */
  static #preventQuestionChange = false;
  static get preventQuestionChange() {
    return this.#preventQuestionChange;
  }
  static set preventQuestionChange(value) {
    this.#preventQuestionChange = value;
  }
    
  /** store X position (-1 to 4) on current active radio group
   * @type { positionX }
   */
  static #positionX = -1;
  static get positionX() {
    return this.#positionX
  }
  static set positionX(value) {
    this.#positionX = value; 
    if (this.positionX < -1){
      this.#positionX = -1;  
    }
    else if (this.positionX > 4){ // bylo -1
      this.#positionX = 4;  
    }
  }
  
  /**
   * @type { questionIndex }
   */
  static #focusedQuestion = 0;
  static get focusedQuestion() {
    return this.#focusedQuestion;
  }
  static set focusedQuestion(value) {
    if (this.preventQuestionChange) {
      return;      
    }

    const focusedQuestionPrev = this.focusedQuestion;
    console.log("focusedQuestion value in ", value);

    this.#focusedQuestion = value;
    if (this.focusedQuestion < 0){
      this.#focusedQuestion = 0;  
    }
    else if (this.focusedQuestion > Form.properties.questionsNumber) { // bylo -1
      this.#focusedQuestion = Form.properties.questionsNumber;  
    }

    console.log("After update: ", this.focusedQuestion);
    this.AllFocusRadioGroups(focusedQuestionPrev);
    this.positionX = -1;

  }
  /** Method removes Radio Group Focus Class Name from previous focused question and set it to current focused question
   * @param { questionIndex } focusedQuestionPrev - (integer) index of previous active question  
   * 
   * **TODO:** In fact previous question can be taken by getElementById(radioGroupFocusClassName)  */
  static AllFocusRadioGroups(focusedQuestionPrev) {
    for (const formName in Form.formsAttributes) {
      FormKeyboard.FocusRadioGroup(focusedQuestionPrev, formName);
    }
  }
  
  static FocusRadioGroup(focusedQuestionPrev, formName) {
    console.log(this.focusedQuestion);

    const formID = formName;//Form.properties.formType;
    const focusedQuestion = this.focusedQuestion;

    const radioGroupPrevID = `${formID}-${focusedQuestionPrev}`;
    const radioGroupID = `${formID}-${focusedQuestion}`;

    console.log("radioGroupID", radioGroupID);


    const radioGroupPrev = document.getElementById(radioGroupPrevID);
    if (radioGroupPrev !== null) {
      radioGroupPrev.classList.remove("radio-group-active");
    }

    const radioGroup = document.getElementById(radioGroupID);
    if (radioGroup !== null) {
      radioGroup.classList.add("radio-group-active");
      radioGroup.focus();
    }
  }

  /** @param { string } keyName   */
  static ArrowKey(keyName) {
    console.log(`ArrowKey: ctrlKey + ${keyName}`);
    
    if (keyName === "ArrowUp") {
      this.focusedQuestion--
    }
    else if (keyName === "ArrowDown") {
      this.focusedQuestion++

    }    
  }
  
  /** @param { string } keyName   */
  static HorizontalArrowKey(keyName) {
    const radioGroupActive = document.getElementsByClassName("radio-group-active")
    const inputs = radioGroupActive[0].getElementsByTagName("input")
    for (let i = 0; i < inputs.length; i++) {
      if (inputs[i].checked) {
        this.positionX = inputs[i].value
        break;
      }
    }

    // RADIO GROUP POSITION X UPDATE
    if (keyName === "ArrowLeft") {
      this.positionX--
    } 
    else if (keyName === "ArrowRight") {
      this.positionX++
    }

    const artificalKeyName = this.positionX.toString();
    console.log(artificalKeyName);
    this.CheckRadio(artificalKeyName)        
  }

  /** Performs a click on the question value given from the keyboard
   * @param { stringQuestionValue } keyboardValue - an integer string
   */
  static CheckRadio(keyboardValue) {
    const formID = Form.properties.formType;
    const focusedQuestion = this.focusedQuestion

    keyboardValue = parseInt(keyboardValue)
    if (keyboardValue >= 0) {
      const radioID = `${formID}-${focusedQuestion}-${keyboardValue}`;
      const radio = document.getElementById(radioID)
      if (radio !== null) {
        radio.click()  
        radio.focus()        
      }
    } 
  }
} 

export { FormKeyboard }