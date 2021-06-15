console.log(`It's connected`);
import {html, render} from 'lit-html'

import './styles/start/start.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import * as bootstrap from 'bootstrap';

import './styles/main/main.css'


import asrsEvents from './asrsEvents';
import Layout from './components/Layout';




const app = () => {
  // .innerHTML = ;
  // document.getElementById("header").innerHTML = Navbar().getHTML().toString();
  render(Layout(), document.querySelector("#lit-html-root"));
}

// Init App
app();



console.log(`EOF`);

