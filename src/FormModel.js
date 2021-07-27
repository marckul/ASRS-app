
import TestSolver from './TestSolver'
import { FormKeyboard } from './FormKeyboard'

import * as Results from './components/Results'

const getRandomValue = (lower = 0, upper = 4) => {
  return Math.floor(Math.random()*(upper - lower + 1)) + lower;    
}

/**
 * @typedef { "form70" | "form71" } formName
 * @typedef { 70 | 71 } numberOfQuestions
 */
class Form {
  static ClickRouter(event) {
    if (event.target.type === "submit") {
      event.preventDefault();          
    }
    
    const propsChangeingClearForm = false
    // https://www.designcise.com/web/tutorial/how-to-get-a-parent-form-element-from-a-child-input-element-using-javascript

    if (event.target.form) {
      if (event.target.form.name === "asrs-form") {
        this.Update(event)
        console.log("Form: ", this.#formValues);
        console.log("Filled Questions: ", this.#currentProps.filledQuestions);
      } 
      else if (event.target.form.name === "asrs-properties" && propsChangeingClearForm) {
        this.SetProps(event)     
        this.ClearForm(this.#currentProps.formType);
        console.log("Hello props! Properties:\n",  this.#currentProps);
      }
      else if (event.target.form.name === "asrs-properties" && !propsChangeingClearForm) {
        this.SetProps(event)   
        Results.DeleteResultsTable(""); 
        this.ArtificialSetValues(this.#formValues)
        console.log("Hello props2! Properties:\n",  this.#currentProps);
      }
      else if (event.target.form.name === "asrs-form-clear") {
        this.ClearForm("clearAllForms");
        console.log("ClearForm\n");
      }
    }  

    if (this.#currentProps.filledQuestions >= this.#currentProps.questionsNumber) {
      this.#formValues
      this.Interprete()
    }

  }
  /** Only for testing purpose
   * 
   * @param {integer array} values 
   * @param {boolean} random 
   * @param {integer} number 
   */
  static ArtificialSetValues(values = [], random = false, number = 71) {
    if (random === true) {
      for (let i = 0; i < number; i++) {
        values.push(getRandomValue())          
      }
    }   
    
    let filledQuestions = 0;
    const formID = this.#currentProps.formType
    // const questionNum =  this.#formsAttributes[formID].questionsNumber
    const questionNum =  this.formsAttributes[formID].questionsNumber
    // const num = Math.min(questionNum, values.length)
    let k = 0;

    for (let i = 0; i < questionNum; i++) {
      if (i >= values.length) {
        for (let j = 0; j < 5; j++) {
          const radioID = `${formID}-${i}-${j}`;
          document.getElementById(radioID).checked = false;   
        }
      }
      else {
        for (let j = 0; j < 5; j++) {
          if (j === values[i]) {
            this.#formValues[i] = values[i];

            const radioID = `${formID}-${i}-${j}`;
            document.getElementById(radioID).checked = true;     
            filledQuestions++     
          }
        }
      }        
    }
    this.#currentProps.filledQuestions = filledQuestions;
  }
  /** Method clear
   * 
   * @param {string} formID - form name: "form70" or "form71"
   */
  static ClearForm(formID) {
    if (formID === "clearAllForms") {
      this.ClearForm("form70");
      this.ClearForm("form71");
      return;      
    }

    // const questionNum =  this.#formsAttributes[formID].questionsNumber
    const questionNum =  this.formsAttributes[formID].questionsNumber
    for (let i = 0; i < questionNum; i++) {
      for (let j = 0; j < 5; j++) {
        const radioID = `${formID}-${i}-${j}`;
        document.getElementById(radioID).checked = false;
      }
    }

    this.#currentProps.filledQuestions = 0;
    this.#currentProps.lastClickedQuest = -1;
    this.#formValues = new Array(71);   

    if (this.#approachNumber > 0) {
      Results.DeleteResultsTable("formCleared");      
    }
    FormKeyboard.focusedQuestion = 0;
    this.ClearCompletedClass()
  }
  static #formsAttributes = {
    "form70": {
      questionsNumber: 70,
      ageGroups: ["2-5"],
    },
    "form71": {
      questionsNumber: 71,
      ageGroups: ["6-11", "12-18"],
    }
  };
  static get formsAttributes() {
    return this.#formsAttributes;
  }
  static #ageVarinats = {
    "2-5": {
      form: "form70",
      questionsNumber: 70,
    },
    "6-11": {
      form: "form71",
      questionsNumber: 71,
    },
    "12-18": {
      form: "form71",
      questionsNumber: 71,
    },
  };
  
  /* Ustawienie Ustawień */ 
  static #currentProps = {
    ageGroup: "2-5",
    fillingPerson: "parent",
    formType: "form70",
    questionsNumber: 70,
    filledQuestions: 0,
    lastClickedQuest: -1, // sic!
  };


  
  static get properties() {
    return this.#currentProps
  }
  static SetProps({currentTarget}) {
    // !TODO

    const propName = currentTarget.name;
    const newPropValue = currentTarget.defaultValue;

    if (propName === "props-age-group" && newPropValue !== this.#currentProps.ageGroup) {
      const previousAgeGroup = this.#currentProps.ageGroup;
      this.#currentProps.ageGroup = newPropValue; 

      // okreslic czy widok testu wymaga zmiany czy nie       
      const currentFormType = this.#ageVarinats[previousAgeGroup].form;
      const newFormType = this.#ageVarinats[newPropValue].form;
      const changeFormView = currentFormType !== newFormType;

      if (changeFormView) {
        const newQuestsNumber = this.#ageVarinats[newPropValue].questionsNumber;
        const currentForm = document.getElementById(currentFormType);
        const newForm = document.getElementById(newFormType);

        // changes visibility 
        currentForm.classList.add("d-none");
        newForm.classList.remove("d-none");

        this.#currentProps.formType = newFormType;
        this.#currentProps.questionsNumber = newQuestsNumber;
      }
    } 
    else if (propName === "props-filling-person") {
      this.#currentProps.fillingPerson = newPropValue;      
    }
  } // SetProps


  static #formValues = new Array(71);
  static Update({currentTarget}) {
    /* TODO
      + add checking if all form questions are filled
    */ 
    const value = currentTarget.defaultValue;
    const groupName = currentTarget.name;
    // debugger
  
    // const words = groupName.split('-')
    const  group = document.getElementById(groupName);
    const  groupIndex = parseInt(group.getAttribute("radio-group-index"));
  
    const notCheckedBefore = [undefined, null].includes(this.#formValues[groupIndex]);
    if (notCheckedBefore) {
      this.#currentProps.filledQuestions++;      
    }
    this.#formValues[groupIndex] = parseInt(value);
    this.#currentProps.lastClickedQuest = groupIndex;
    FormKeyboard.focusedQuestion = groupIndex + 1;

    this.AddCompletedClass(groupIndex);
  }  
    /**
   * 
   * @param { string } groupName 
   */
  static AddCompletedClass(groupIndex) {
    const allForms = this.formsAttributes

    for (const formName in allForms) {
      
      if (Object.hasOwnProperty.call(allForms, formName)) {
        
        this.SingleAddCompletedClass(
          formName, 
          groupIndex, 
          allForms[formName].questionsNumber
        )
      }
    }
  }

  /** Manages the emphasis of complete questions by adding .completed html
   * class to DOM and add .last-question-clicked html class to form root after
   * clicking on the last question
   * @param { string } groupName - radio group name  
   * @param { string } groupIndex - radio group index 
   * @param { formName } formName 
   * @param { numberOfQuestions } totalQuestionsNumber 
   */
  static SingleAddCompletedClass(formName, groupIndex, totalQuestionsNumber) {
    if (groupIndex < totalQuestionsNumber) {
      const selector = `.asrs-form-li.${formName}-${groupIndex}`;
      const clickedQuestion = document.querySelector(selector)

      if (clickedQuestion !== null) {
        clickedQuestion.classList.remove("uncompleted")
        clickedQuestion.classList.add("completed")        
      }
    }
    

    if (groupIndex + 1 >= totalQuestionsNumber && this.#currentProps.filledQuestions < totalQuestionsNumber ) {
      console.log(`formType: ${formName} last-question-clicked !`);
      document.querySelector(`form.${formName}`).classList.add("last-question-clicked");
      document.querySelector("#results-table > p").textContent = "Nie wypełniono wszystkich pytań, sprawdź arkusz"
    }
  }

  static ClearCompletedClass() {
    const allCompletedQuests = document.querySelectorAll(".completed")
    const allLastQuestionClickedForms = document.querySelectorAll("form.last-question-clicked")

    allCompletedQuests.forEach( (completedQuest) => {
      completedQuest.classList.remove("completed")
    })
    allLastQuestionClickedForms.forEach( (form) => {
      form.classList.remove("last-question-clicked")
    })

    document.querySelector("#results-table > p").textContent = "Kiedy wypełnisz formularz, wyniki pojawią się tutaj"
    
  }

  /**
   * 
   * @param { string } groupName 
   */
  static AddCompletedClass_OLD(groupName, groupIndex) {
    const allForms = ["form70", "form71"]

    for (let i = 0; i < allForms.length; i++) {
      const selector = `.asrs-form-li.${allForms[i]}-${groupIndex}`;

      const clickedQuestion = document.querySelector(selector)

      if (clickedQuestion !== null) {
        clickedQuestion.classList.remove("uncompleted")
        clickedQuestion.classList.add("completed")        
      }
    }

    // console.log(groupIndex);
    // if (groupIndex + 1 === this.properties.questionsNumber) {
    //   console.log(`formType: ${this.properties.formType} last-question-clicked !`);
    //   document.querySelector(`form.${this.properties.formType}`).classList.add("last-question-clicked")
    // }

    console.log(groupIndex);
    if (groupIndex >= 69 ) {
      const formsAttributes = this.formsAttributes

      for (const formName in formsAttributes) {

        if (Object.hasOwnProperty.call(formsAttributes, formName)) {
          const questionsNumber = formsAttributes[formName].questionsNumber;

          if (groupIndex + 1 >= questionsNumber) {
            console.log(`formType: ${formName} last-question-clicked !`);
            document.querySelector(`form.${formName}`).classList.add("last-question-clicked");
          }
          
        }
      }
    }
  }

  

  static #approachNumber = 0;
  static Interprete() {
    // TODO connect with table
    console.log("I'm interpreting test now..");
    
    // const testSolver = new TestSolver(this.#formValues, this.properties)
    const testSolver = new TestSolver(this.#formValues, this.properties);
    
    Results.DisplayResults(testSolver)
    this.#approachNumber++ 
  }
}

export { Form }