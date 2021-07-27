import { Form } from './FormModel'
import { FormKeyboard } from './FormKeyboard'

import { PropsSVG, ArrowLeft } from './components/Icons'
import {BarplotsRenderMockup} from './components/Plots'


const SetActive = (event) => {
  event.preventDefault()
  console.log("SetActive");
  // debugger;
}

/** 
 * 
 * @typedef { number } integer - whole number
 * @typedef { integer } questionIndex - -1 up to 71
 * 
 * @typedef { -1 | 0 | 1 | 2 | 3 | 4 } positionX 
 * @typedef { "0" | "1" | "2" | "3" | "4" } stringQuestionValue
 * 
 * @typedef { 0 | 1 | 2 | 3 | 4 } questionValue
 */


/** Initialize Form Events */
const FormInit = () => {
  
  const forms = document.querySelectorAll("form");
  forms.forEach( (form) => {
    // debugger;
    
    if (form.name === "asrs-form") {
      form.focus()
      // console.log(" im in asrs-form");      
    }
    const inputsAll = form.querySelectorAll("input");
    inputsAll.forEach( input => {
      input.addEventListener("click", event => {
        Form.ClickRouter(event)
      })
    })

    const buttonsAll = form.querySelectorAll("button");
    buttonsAll.forEach( button => {
      button.addEventListener("click", event => {
        Form.ClickRouter(event)
      })
    })
  });

  const buttons = document.querySelectorAll("button");
  buttons.forEach( (button) => {
    button.addEventListener("click", event => {
      Form.ClickRouter(event)
    })
  });
}



class CollapseSidebar {
  /**
   * @param { string } $collapeBtn - HTML selector
   * @param { string } $showBtn - HTML selector
   */
  constructor( $collapeBtn, $showBtn ) { 
    this.#$showBtn = $showBtn
    this.#$collapeBtn = $collapeBtn
  }

  /** @type {string} */
  #$collapeBtn = '';
  get $collapeBtn() {
    return this.#$collapeBtn
  }

  /** @type {string} */
  #$showBtn = '';
  get $showBtn() {
    return this.#$showBtn
  }

  #innerContentOff = `
    ${PropsSVG.getHTML()}
  `;
  get innerContentOff() {
    return this.#innerContentOff;
  }
  // #innerContentOn = `
  //   <div class="me-1">Zwiń</div>
  //   ${ArrowLeft.getHTML()}
  // `

  /** 
   * @param {Event} event 
   */
  Collapse(event) {
    event.preventDefault()

    const propsSidebar = document.getElementById("props-sidebar");
    if ( !propsSidebar.classList.contains("collapsed") ) {
      propsSidebar.classList.add("collapsed")    
    } 
    document.querySelector(this.$showBtn).classList.remove("show")
  }

  /**
   * @param {Event} event 
   */
  Show(event) {
    event.preventDefault()

    console.log("Show Sidebar");
    const propsSidebar = document.getElementById("props-sidebar");

    if ( propsSidebar.classList.contains("collapsed") ) {
      propsSidebar.classList.remove("collapsed")    
    } 
    document.querySelector(this.$showBtn).classList.add("show")    
  }
}



const CollaseSidebarInit = () => {
  const collapseButton = document.querySelector("#asrs-logo > .sidebar-collapse-button")
  const collapseSidebar = new CollapseSidebar(
    "#asrs-logo > .sidebar-collapse-button",
    "#props-sidebar > button.sidebar-show-button"
  );
  collapseButton.addEventListener("click", event => {
    collapseSidebar.Collapse(event);
  })

  const showButton = document.querySelector("#props-sidebar > button.sidebar-show-button")
  showButton.addEventListener("click", event => {
    collapseSidebar.Show(event);
  })
}


const addEvents = () => {
  // KEYBOARD SUPPORT
  FormKeyboard.Init();

  FormInit();
  CollaseSidebarInit();
  
  // PLOTS RENDERING
  // BarplotsRenderMockup();
}


/** App UI tests. TO REMOVE
 * @param {*} values 
 */
const appTests = (values = []) => {
  let random = false;
  if (values.length == 0) {
    random = true;
  }
  Form.ArtificialSetValues(values, random);
}


export { addEvents, appTests, FormKeyboard }