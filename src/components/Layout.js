import {html} from 'lit-html'
import Navbar from './Navbar';
import TestProps from './TestProps';
import MainContent from './MainContent';

// import { LogoSVG, HappySVG, HelpSVG, BarChartSVG, EditSVG, GroupAltSVG } from '../components/Icons'
import { LogoSVG } from '../components/Icons'


// debugger;
const Layout = () => {
  
  const template = html`
    <header id="header" class="sticky-top" >${Navbar()}</header>
    <div class="container-fluid">
      <div class="row">
        <div class="sidebar col-md-3 px-0 shadow-lg border-end border-2">
          <div id="asrs-logo" class="border-bottom border-2">
            ${LogoSVG}
          </div>
          ${TestProps()}              
        </div>
        <div class="col-md-9 ms-md-auto main-content" id="main-content">
          ${MainContent()}
          
        </div>
      </div>
    </div>
  `

  return template
}

export default Layout

