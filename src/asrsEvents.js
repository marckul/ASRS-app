
// import TestSolver from './TestSolver'

// window.ASRS = {}

const getRandomValue = (lower = 0, upper = 4) => {
  return Math.floor(Math.random()*(upper - lower + 1)) + lower;    
}





class Form {
  static ClickRouter(event) {
    // https://www.designcise.com/web/tutorial/how-to-get-a-parent-form-element-from-a-child-input-element-using-javascript
    
    if (event.target.form.name === "asrs-form") {
      this.Update(event)
    } 
    else if (event.target.form.name === "asrs-properties") {
      this.SetProps(event)      
    }

    if (this.#properties.filledQuestions) {
      this.Interprete()
    }

    /* STEPS:
      2. check if form is fullfilled
    */ 

  }
  static SetFormValues(values = [], random = false, number = 71) {
    if (random === true) {
      for (let i = 0; i < number; i++) {
        values.push(getRandomValue())          
      }
    }   
    
    const formID = this.#properties.formType
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
    this.#properties.filledQuestions = values.length

  }
  
  static ClearForm(formID) {
    const questionNum =  this.#formsAttributes[formID].questionNumber
    for (let i = 0; i < questionNum; i++) {
      for (let j = 0; j < 5; j++) {
        const radioID = `${formID}-${i}-${j}`;
        document.getElementById(radioID).checked = false;
      }
    }
    this.#properties.filledQuestions = 0;
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
      form: ["form70"],
      questionNumber: 70,
    },
    "6-11": {
      form: ["form71"],
      questionNumber: 71,
    },
    "12-18": {
      form: ["form71"],
      questionNumber: 71,
    },
  };
  
  /* Ustawienie Ustawień */ 
  static #properties = {
    ageGroup: "2-5",
    fillingPerson: "parent",
    formType: "form70",
    filledQuestions: 0
  };
  static get properties() {
    return this.#properties
  }
  static SetProps({currentTarget}) {
    // !TODO
    if (currentTarget.name === "props-age-group" &&  
        currentTarget.defaultValue !== this.#properties.ageGroup) {
      
      const currentAgeGroup = this.#properties.ageGroup;
      this.#properties.ageGroup = currentTarget.defaultValue; 

      /* OKRESLIC CZY TEST WYMAGA ZMIANY CZY NIE */      
      const form71 = this.#formsAttributes.form71.ageGroups;
      const changeForm = !(form71.includes(currentAgeGroup) && form71.includes(currentTarget.defaultValue))

      if (changeForm) {
        let currentFormType = "";
        let newFormType = "";
            
        if (currentAgeGroup === "2-5") {
          currentFormType = "form70";
          newFormType = "form71";
        } 
        else {
          currentFormType = "form71";
          newFormType = "form70";
        }

        const currentForm = document.getElementById(currentFormType);
        const newForm = document.getElementById(newFormType);
        // debugger;
        // this.ClearForm(newFormType)
        currentForm.classList.add("d-none");
        newForm.classList.remove("d-none");

        this.#properties.formType = newFormType;
      }
    } 
    else if (currentTarget.name === "props-filling-person") {
      this.#properties.fillingPerson = currentTarget.defaultValue;      
      // d-none
      console.log("Hello props! Properties:\n",  this.#properties);
    }


    this.ClearForm(this.#properties.formType)
  }


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
      this.#properties.filledQuestions++;      
    }

    this.#formValues[groupIndex] = parseInt(value);
    console.log("Form: ", this.#formValues);
  }  
  static Interprete() {

  }
}

// window.ASRS.Form = Form;



/*
window.ASRS.Form.SetFormValues([], true)
*/ 







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

const appTests = () => {
  Form.SetFormValues([], true);
}


export { addEvents, appTests }