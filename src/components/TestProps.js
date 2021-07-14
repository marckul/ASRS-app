import { html } from 'lit-html'

import { HappySVG, GroupAltSVG } from '../components/Icons'

// const AccordionNumber = 0;

const AccordionItem = {
  number: 0,
  id: "accordion",
  render(headerContent, bodyContent) {
    const id = `${this.id}${this.number}`;
    const panelId = `${id}-panel`;
    const headerId = `${id}-header`;

    const isCollapsed = "collapsed"
    const ariaExpanded = false;
    const show = ""; // or "show"
    

    // const template = html`
    //   <div class="accordion-item rounded-0 border-0">
    //     <h2 id="${headerId}" class="accordion-header" >
    //       <button class="accordion-button rounded-0 collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#${panelId}" aria-expanded="false" aria-controls="${panelId}">
    //         Accordion Item #2
    //       </button>
    //     </h2>
    //     <div id="${panelId}" class="accordion-collapse collapse" aria-labelledby="${headerId}">
    //       <div class="accordion-body">
    //         <strong>Here should be content</strong> 
    //       </div>
    //     </div>
    //   </div>
    // `

    const template = html`
      <div class="accordion-item rounded-0 border-0 border-end-0">
        
        <button class="accordion-button rounded-0 border-bottom border-1 ${isCollapsed}" type="button" data-bs-toggle="collapse" data-bs-target="#${panelId}" aria-expanded="${ariaExpanded}" aria-controls="${panelId}">
            <h4 id="${headerId}" class="accordion-header" >${headerContent}</h4>
        </button>
        <div id="${panelId}" class="accordion-collapse collapse ${show}" aria-labelledby="${headerId}">
          <div class="accordion-body border-top-0 border-bottom border-1">
            ${bodyContent}
          </div>
        </div>
      </div>
    `
    this.number ++;
  
    return(template)
  }
}

// const AccordionItem = () => {
//   const id = "panelsStayOpen-collapseTwo";

//   const template = html`
//     <div class="accordion-item rounded-0 border-0">
//       <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
//         <button class="accordion-button rounded-0 collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
//           Accordion Item #2
//         </button>
//       </h2>
//       <div id="" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
//         <div class="accordion-body">
//           <strong>Here should be content</strong> 
//         </div>
//       </div>
//     </div>
//   `

//   return()
// }

const TestProps = () => {
  const name1 = "props-age-group";
  const name2 = "props-filling-person";

  const template = html`
    <div id="test-properties">
      <h2 class="title border-bottom py-5 my-0">Ustawienia Testu</h2>
      <form  name="asrs-properties" >
        <div class="accordion">
          ${AccordionItem.render(
            html`${HappySVG} Grupa Wiekowa`, 
            html`
              <div class="d-flex flex-column" id="${name1}" asrs-prop-name="${name1}" >
                <div class="my-radio-button">
                  <input type="radio" name="${name1}" id="${name1}-2-5" value="2-5" checked>
                  <label for="${name1}-2-5" >2-5 lat</label>
                </div>                  
                <div class="my-radio-button">
                  <input type="radio" name="${name1}" id="${name1}-6-11" value="6-11" >
                  <label for="${name1}-6-11" >6-11 lat</label>
                </div>                  
                <div class="my-radio-button">
                  <input type="radio" name="${name1}" id="${name1}-12-18" value="12-18" >
                  <label for="${name1}-12-18" >12-18 lat</label>
                </div>                  
              </div>
            `
          )}
          ${AccordionItem.render(
            html`${GroupAltSVG} Wypełniający`, 
            html`
              <div class="d-flex flex-column" id="${name2}"  asrs-prop-name="${name2}" >
                <div class="my-radio-button">
                  <input type="radio" name="${name2}" id="${name2}-parent" value="parent" checked>
                  <label for="${name2}-parent" >Rodzic</label>
                </div>                  
                <div class="my-radio-button">
                  <input type="radio" name="${name2}" id="${name2}-teacher" value="teacher" >
                  <label for="${name2}-teacher" >Opiekun</label>
                </div>                                 
              </div>
            `
          )}
        </div>
        
      </form>
      <!-- <button class="btn btn-outline-primary ms-auto my-3 me-3 d-block">Wyczyść Formularz</button> -->
      <form name="asrs-form-clear">
        <div><button class="btn btn-outline-primary ms-auto my-3 me-3 d-block">Wyczyść Formularz</button></div>
      </form>
    </div>
    
  `
  return template;
}

export default TestProps