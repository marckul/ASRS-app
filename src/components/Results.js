import {html, render} from "lit-html"
import TestSolver from "../TestSolver"
import * as Plots from "./Plots"



// results-table

const ResultsTableMockup = () => {
  const template = html`
    <table class="result-table table">
      <thead>
        <tr>
          <th scope="col">Typ</th> <th scope="col">Skala</th> <th scope="col">Wynik Surowy</th> <th scope="col">Wynik Ustandaryzowany</th> <th scope="col">Wynik Klasyfikacji</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td rowspan="2" class="scale-type">Skale ASRS</td>
          <th scope="row">RSK</th> <td>74</td> <td>66</td> <td>60</td>
        </tr>
        
        <tr>          
          <th scope="row">NZ</th> <td>85</td> <td>16</td> <td>98</td>
        </tr>
        <tr>
          <td rowspan="2" class="scale-type">Skale Kliniczne</td>
          <th scope="row">WO</th> <td>55</td> <td>90</td> <td>16</td>
        </tr>
        <tr>
          <th scope="row">DSM</th> <td>74</td> <td>70</td> <td>92</td>
        </tr>
        <tr>
          <td rowspan="9" class="scale-type">Skale Terapeutyczne</td>
          <th scope="row">RR</th> <td>62</td> <td>50</td> <td>62</td>
        </tr>
        <tr>
          <th scope="row">RD</th>
          <td>63</td>
          <td>21</td>
          <td>27</td>
        </tr>
        <tr>
          <th scope="row">WSE</th>
          <td>63</td>
          <td>15</td>
          <td>90</td>
        </tr>

        <tr>
          <th scope="row">NJ</th>
          <td>86</td>
          <td>18</td>
          <td>22</td>
        </tr>

        <tr>
          <th scope="row">ST</th>
          <td>53</td>
          <td>32</td>
          <td>22</td>
        </tr>
        <tr>
          <th scope="row">SZ</th>
          <td>53</td>
          <td>32</td>
          <td>22</td>
        </tr>
      </tbody>
      <!-- <tfoot>
        <tr>
          <th scope="col">Typ</th> <th scope="col">Skala</th> <th scope="col">Wynik Surowy</th> <th scope="col">Wynik Ustandaryzowany</th> <th scope="col">Wynik Klasyfikacji</th>
        </tr>
      </tfoot> -->
    </table>
  `
  return(template)
}




/**
 * 
 * @param {*} typeName 
 * @param { TestSolver } testSolver 
 * @param {*} typeScalesNames 
 */
const RowsGroup = (typeName, testSolver, typeScalesNames) => {

  const scalesRaw = testSolver.allScalesRaw
  const standardizedResults = testSolver.allStandardizedResults
  const allClassificationResults = testSolver.allClassificationResults
  
  const template = [];
  const scaleName = typeScalesNames[0];

  template.push(html`
    <tr>
      <td rowspan="${typeScalesNames.length}" class="scale-type">${typeName}</td>
      <th scope="row">${scaleName}</th> 
      <td>${scalesRaw[scaleName]}</td> 
      <td>${standardizedResults[scaleName]}</td> 
      <td>${allClassificationResults[scaleName]}</td>
    </tr>
  `)

  for (let i = 1; i < typeScalesNames.length; i++) { 
    const scaleName = typeScalesNames[i];
    template.push(html`
      <tr>
        
        <th scope="row">${scaleName}</th> 
        <td>${scalesRaw[scaleName]}</td> 
        <td>${standardizedResults[scaleName]}</td> 
        <td>${allClassificationResults[scaleName]}</td>
      </tr>
    `)
    
  }
  return template
}


const ResultsTestProps = {
  form70: {
    scalesTypes: {
      asrsScales: ["RSK", "NZ"],
      clinicalScales: ["WO", "DSM"],
      terapeuticScales: ["RR", "RD", "WSE", "NJ", "ST", "SZ", "WS", "US"]
    },
    allScales: ["RSK", "NZ", "WO", "DSM", "RR", "RD", "WSE", "NJ", "ST", "SZ", "WS", "US"],
  },
  form71: {
    scalesTypes: {
      asrsScales: ["RSK", "NZ", "SR"],
      clinicalScales: ["WO", "DSM"],
      terapeuticScales: ["RR", "RD", "WSE", "NJ", "ST", "SZ", "WS", "UW"],
    },
    allScales: ["RSK", "NZ", "SR", "WO", "DSM", "RR", "RD", "WSE", "NJ", "ST", "SZ", "WS", "UW"],
  },
  fillingPerson: {
    parent: "Rodzic",
    teacher: "Opiekun"
  }
}

/**
 * @param { TestSolver } testSolver 
 */
const ResultsTable = (testSolver) => {
  
  // let scalesTypes = {
  //   asrsScales: [],
  //   clinicalScales: [],
  //   terapeuticScales: [],
  // }  

  // const testSolver = new TestSolver(formValues, properties);
  const properties = testSolver.properties
  const scalesTypes = ResultsTestProps[properties.formType].scalesTypes
  
  // if (properties.formType === "form70") {
  //   scalesTypes.asrsScales = ["RSK", "NZ"]
  //   scalesTypes.clinicalScales = ["WO", "DSM"]
  //   scalesTypes.terapeuticScales = ["RR", "RD", "WSE", "NJ", "ST", "SZ", "WS", "US"]
  // } 
  // else if (properties.formType === "form71") {
  //   scalesTypes.asrsScales = ["RSK", "NZ", "SR"]
  //   scalesTypes.clinicalScales = ["WO", "DSM"]
  //   scalesTypes.terapeuticScales = ["RR", "RD", "WSE", "NJ", "ST", "SZ", "WS", "UW"]
  // } 
  // else {
  //   throw Error("formType should be form70 or form71")
  // }
  const fillingPerson = {
    parent: "Rodzic",
    teacher: "Opiekun"
  }

  const template = html`
    <p class="h5 mt-5 mb-3">Wariant: <small class="label">&emsp; ${testSolver.properties.ageGroup} lat, &nbsp; ${fillingPerson[testSolver.properties.fillingPerson]}</small></p>
    <table class="result-table table">
      <thead>
        <tr>
          <th scope="col">Typ</th> <th scope="col">Skala</th> <th scope="col">Wynik Surowy</th> <th scope="col">Wynik Ustandaryzowany</th> <th scope="col">Wynik Klasyfikacji</th>
        </tr>
      </thead>
      <tbody>
        ${RowsGroup("Skale ASRS", testSolver, scalesTypes.asrsScales)}
        ${RowsGroup("Skale Kliniczne", testSolver, scalesTypes.clinicalScales)}
        ${RowsGroup("Skale Terapeutyczne", testSolver, scalesTypes.terapeuticScales)}        
      </tbody>
    </table>
  `
  return(template)
}


/**
 * @param { TestSolver } testSolver 
 */
const DisplayResults = (testSolver) => {
  render(ResultsTable(testSolver), document.getElementById("results-table"))
  
  Plots.RenderPlot(
    testSolver, 
    ResultsTestProps, 
  );
  
}

const DeleteResults = (clearType) => {
  let template = null;
  if (clearType === "formCleared") {
    template = html`
      <p class="fst-italic fs-5"><b>Formularz został wyczyszczony.</b> Kiedy ponownie wypełnisz formularz, wyniki pojawią się tutaj</p>
    `
  } 
  else {
    template = html`
      <p class="fst-italic fs-5">Kiedy wypełnisz formularz, wyniki pojawią się tutaj</p>
    `
  }

  document.getElementById("asrs-plots--standardized").innerHTML = ""
  
  render(template, document.getElementById("results-table"))
}



export { ResultsTable, DisplayResults, ResultsTableMockup, DeleteResults as DeleteResultsTable, ResultsTestProps}