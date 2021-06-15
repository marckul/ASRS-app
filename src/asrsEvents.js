
window.ASRS = {}

window.ASRS.getRandomValue = (lower = 0, upper = 4) => {
  return Math.floor(Math.random()*(upper - lower + 1)) + lower;    
}

class Form {
  static SetFormValues(values = [], random = false, number = 71) {
    if (random === true) {
      for (let i = 0; i < number; i++) {
        values.push(window.ASRS.getRandomValue())          
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
    },
    "form71": {
      questionNumber: 71,
    }
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
  static SetProps(event) {
    // !TODO
    if (event.currentTarget.name === "props-age-group" &&  
        event.currentTarget.defaultValue !== this.#properties.ageGroup) {
      
      const currentAgeGroup = this.#properties.ageGroup;
      this.#properties.ageGroup = event.currentTarget.defaultValue; 

      /* OKRESLIC CZY TEST WYMAGA ZMIANY CZY NIE */      
      const form71 = ["6-11", "12-18"];
      const changeForm = !(form71.includes(currentAgeGroup) && form71.includes(event.currentTarget.defaultValue))

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
    else if (event.currentTarget.name === "props-filling-person") {
      this.#properties.fillingPerson = event.currentTarget.defaultValue;      
      // d-none
      console.log("Hello props! Properties:\n",  this.#properties);
    }


    this.ClearForm(this.#properties.formType)
  }


  static #formValues = new Array(71);
  static Update(event){
    const value = event.currentTarget.defaultValue;
    const groupName = event.currentTarget.name;
  
    // const words = groupName.split('-')
    const  group = document.getElementById(groupName);
    const  groupIndex = parseInt(group.getAttribute("radio-group-index"));
  
    const notCheckedBefore = [undefined, null].includes(this.#formValues[groupIndex]);
    if (notCheckedBefore) {
      this.#properties.filledQuestions++;      
    }
    this.#formValues[groupIndex] = parseInt(value);
    // event.currentTarget.defaultValue
    console.log("Form: ", this.#formValues);
  }  
}

window.ASRS.Form = Form;



/*
window.ASRS.Form.SetFormValues([], true)
*/ 


