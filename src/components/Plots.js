import { html, render } from 'lit-html'
import TestSolver from "../TestSolver"
import { ResultsTestProps } from "./Results"

const Plotly = require('../../node_modules/plotly.js-dist/plotly');


const Plot1 = () => {
  return html`
    <div id="asrs-plots--plot1"></div>
    <div id="asrs-plots--plot2"></div>
  `

}

/**
 * @param { TestSolver } testSolver 
 * @param { object } plotProps - plot properties
 * @param { string } plotProps.plotContainerID
 * @param { string } plotProps.title
 */

/**
 * 
 * @param { TestSolver } testSolver 
 * @param { ResultsTestProps } resultsTestProps
 */
const RenderPlot = (testSolver, resultsTestProps) => {  
    const plotContainerID = "asrs-plots--standardized";
    const allScalesResults = testSolver.allStandardizedResults;
    const scalesNames = resultsTestProps[testSolver.properties.formType].allScales;

    const fillingPerson = resultsTestProps.fillingPerson[testSolver.properties.fillingPerson]
    const testVariant = `${testSolver.properties.ageGroup} ${fillingPerson}`;
    const plotTitle = `Wyniki Ustandaryzowane ${testVariant}`.toLocaleUpperCase()

    const dataY1 = [];
    for (let i = 0; i < scalesNames.length; i++) {
      const scaleName = scalesNames[i];
      if (Object.hasOwnProperty.call(allScalesResults, scaleName)) {
        dataY1.push(allScalesResults[scaleName]);
      }
    }
    
    const colorReversed = dataY1.map( value => {
      return 81 - value;
    })
    
    const DATA = [{
      x: scalesNames,  y: dataY1,
      type: 'bar',
      name: testVariant,
      marker: {
        color: colorReversed,
        colorscale: 'YlGnBu',
        opacity: .7,
        line: {
          color: "rgb(0,0,0)",
          opacity: 1,
          width: 1
        }
      },
    }];
    
    const layout = {
      title: plotTitle,
      barmode: 'stack',
      yaxis: {
        range: ['0', '85'],
        type: 'number'
      },
    };
    
    const currentDate = new Date();
    const dateStr =  `${currentDate.getFullYear()}-${currentDate.getMonth()}-${currentDate.getDay()}`
    let config = {
      responsive: true,
      editable: true,
      toImageButtonOptions: {
        format: 'png', // one of png, svg, jpeg, webp
        filename: `${testVariant} ${dateStr}`,
        scale: 1.5 // Multiply title/legend/axis/canvas sizes by this factor
      }
    }

    

    Plotly.newPlot(plotContainerID, DATA, layout, config);
}


const BarplotsRenderMockup = (dataX, dataY) => {

  // tak też można ustawić kolor
  let trace0 = {
    x: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan'],
    y: [20, 14, 25, 16, 18, 22, 19, 15, 12, 16, 14, 17, 19],
    type: 'bar',
    name: 'Primary Product',
    marker: {
      color: ['rgb(50,255,255)', 'rgb(255,255,50)', 'rgb(50,255,255)', 
              'rgb(50,255,255)', 'rgb(50,255,255)', 'rgb(50,255,255)', 
              'rgb(50,255,255)', 'rgb(50,255,255)', 'rgb(50,255,255)', 
              'rgb(50,255,255)', 'rgb(50,255,255)', 'rgb(50,255,255)', 
              'rgb(50,255,255)'],
      opacity: .5
    }
  };

  const dataY1 = [20, 14, 25, 16, 18, 22, 19, 15, 12, 16, 14, 17, 5];

  let trace1 = {
    x: ['krzesła', 'stoły', 'łyżki', 'koty', 'psoty', 'kalosze', 'gringi', 'musztarda', 'foo', 'fighters', 'łyżeczki', 'kanapki', 'rosoły'],
    y: dataY1,
    type: 'bar',
    name: 'Primary Product',
    marker: {
      color: dataY1,
      colorscale: 'YlGnBu',
      opacity: .7,
      line: {
        color: "rgb(0,0,0)",
        opacity: 1,
        width: 1
      }
    }
    // reversescale: true
  };
  
  let trace2 = {
    x: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan'],
    y: [20, 14, 25, 16, 18, 22, 19, 15, 12, 16, 14, 17, 19],
    type: 'bar',
    name: 'Primary Product',
    marker: {
      color: [20, 14, 25, 16, 18, 22, 19, 15, 12, 16, 14, 17, 19],
      colorscale: 'Viridis',
      opacity: .75
    }
  };

  // var trace2 = {
  //   x: ['giraffes', 'orangutans', 'monkeys'],
  //   y: [12, 18, 29],
  //   name: 'LA Zoo',
  //   type: 'bar'
  // };

  let layout = {
    title: "Tutaj Będzie Tytuł",
    barmode: 'stack',
    yaxis: {
      range: ['0', '30'],
      type: 'number'
    },
  };
  let data1 = [trace1];

  const currentDate = new Date()
  const dateStr =  `${currentDate.getFullYear()}-${currentDate.getMonth()}-${currentDate.getDay()}`
  
  let config = {
    responsive: true,
    editable: true,
    toImageButtonOptions: {
      format: 'png', // one of png, svg, jpeg, webp
      filename: `Nazwa Wykresu ${dateStr}`,
      scale: 1.5 // Multiply title/legend/axis/canvas sizes by this factor
    }
  }

  Plotly.newPlot('asrs-plots--plot-mockup', data1, layout, config);

  // let data2 = [trace2];
  // Plotly.newPlot('asrs-plots--plot2', data2, layout, config);
  

}


export {Plot1, BarplotsRenderMockup, RenderPlot}