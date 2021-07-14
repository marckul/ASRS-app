import { html, render } from 'lit-html'
const Plotly = require('../../node_modules/plotly.js-dist/plotly');


const Plot1 = () => {
  return html`
    <div id="asrs-plots--plot1"></div>
    <div id="asrs-plots--plot2"></div>
  `

}

const PlotsRender = () => {

  var trace1 = {
    x: ['giraffes', 'orangutans', 'monkeys'],
    y: [20, 14, 23],
    name: 'SF Zoo',
    type: 'bar'
  };

  var trace2 = {
    x: ['giraffes', 'orangutans', 'monkeys'],
    y: [12, 18, 29],
    name: 'LA Zoo',
    type: 'bar'
  };

  var data = [trace1];
  var layout = {barmode: 'stack'};

  const plotsContainer = document.getElementsByClassName('plot1')
  var config = {responsive: true}

  Plotly.newPlot('asrs-plots--plot1', data, layout, config);
  Plotly.newPlot('asrs-plots--plot2', data, layout, config);
  

}


const PlotsRenderMockup = () => {

  var trace1 = {
    x: ['giraffes', 'orangutans', 'monkeys'],
    y: [20, 14, 23],
    name: 'SF Zoo',
    type: 'bar'
  };

  var trace2 = {
    x: ['giraffes', 'orangutans', 'monkeys'],
    y: [12, 18, 29],
    name: 'LA Zoo',
    type: 'bar'
  };

  var data = [trace1];
  var layout = {barmode: 'stack'};

  const plotsContainer = document.getElementsByClassName('plot1')
  var config = {responsive: true}

  Plotly.newPlot('asrs-plots--plot1', data, layout, config);
  Plotly.newPlot('asrs-plots--plot2', data, layout, config);
  

}


export {Plot1, PlotsRenderMockup, PlotsRender}