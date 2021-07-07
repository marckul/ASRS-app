
import TestSolver from './TestSolver'
import * as Results from './components/Results'

// window.ASRS = {}

const getRandomValue = (lower = 0, upper = 4) => {
  return Math.floor(Math.random()*(upper - lower + 1)) + lower;    
}


class Form {
  static ClickRouter(event) {
    // https://www.designcise.com/web/tutorial/how-to-get-a-parent-form-element-from-a-child-input-element-using-javascript
    
    if (event.target.form.name === "asrs-form") {
      this.Update(event)
      console.log("Form: ", this.#formValues);
      console.log("Filled Questions: ", this.#currentProps.filledQuestions);
    } 
    else if (event.target.form.name === "asrs-properties") {
      this.SetProps(event)      
      this.ClearForm(this.#currentProps.formType)
      console.log("Hello props! Properties:\n",  this.#currentProps);
    }

    if (this.#currentProps.filledQuestions >= this.#currentProps.questionsNumber) {
      this.Interprete()
    }

    /* STEPS:
      2. check if form is fullfilled
    */ 

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
    
    const formID = this.#currentProps.formType
    const questionNum =  this.#formsAttributes[formID].questionNumber
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
          }
        }
      }        
    }
    this.#currentProps.filledQuestions = values.length

  }
  /** Method clear
   * 
   * @param {string} formID - form name: "form70" or "form71"
   */
  static ClearForm(formID) {
    const questionNum =  this.#formsAttributes[formID].questionNumber
    for (let i = 0; i < questionNum; i++) {
      for (let j = 0; j < 5; j++) {
        const radioID = `${formID}-${i}-${j}`;
        document.getElementById(radioID).checked = false;
      }
    }
    this.#currentProps.filledQuestions = 0;
    this.#formValues = new Array(71);
  }
  static #formsAttributes = {
    "form70": {
      questionNumber: 70,
      ageGroups: ["2-5"],
    },
    "form71": {
      questionNumber: 71,
      ageGroups: ["6-11", "12-18"],
    }
  };
  static #ageVarinats = {
    "2-5": {
      form: "form70",
      questionNumber: 70,
    },
    "6-11": {
      form: "form71",
      questionNumber: 71,
    },
    "12-18": {
      form: "form71",
      questionNumber: 71,
    },
  };
  
  /* Ustawienie Ustawień */ 
  static #currentProps = {
    ageGroup: "2-5",
    fillingPerson: "parent",
    formType: "form70",
    questionsNumber: 70,
    filledQuestions: 0
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
        const newQuestsNumber = this.#ageVarinats[newPropValue].questionNumber;
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
  
    // const words = groupName.split('-')
    const  group = document.getElementById(groupName);
    const  groupIndex = parseInt(group.getAttribute("radio-group-index"));
  
    const notCheckedBefore = [undefined, null].includes(this.#formValues[groupIndex]);
    if (notCheckedBefore) {
      this.#currentProps.filledQuestions++;      
    }
    this.#formValues[groupIndex] = parseInt(value);
  }  
  static Interprete() {
    // TODO connect with table
    console.log("I'm interpreting test now..");
    const testSolver = new TestSolver(this.#formValues, this.properties)

    // console.log(testSolver.scalesRaw);
    console.log(testSolver.standarizedResult);
    Results.CreateResultsTable()
  }
}



const addEvents = () => {
  
  const forms = document.querySelectorAll("form");

  // const clickFunction = 
  
  forms.forEach( (form) => {
    const inputsAll = form.querySelectorAll("input");
    inputsAll.forEach( input => {
      input.addEventListener("click", event => {
        Form.ClickRouter(event)
      })

    })
  });
}

const appTests = (values = []) => {
  let random = false;
  if (values.length == 0) {
    random = true;
  }
  Form.ArtificialSetValues(values, random);
}

export { addEvents, appTests }