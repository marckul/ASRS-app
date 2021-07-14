import {html} from 'lit-html'

import { HelpSVG, BarChartSVG, EditSVG } from '../components/Icons'




const Navbar = () => {
  const template = html`
    <nav id="main-navbar" class="navbar navbar-expand-md navbar-dark bg-dark shadow border-bottom ">
      <div class="container-fluid">
        <!-- <a class="navbar-brand" href="#">Navbar</a> -->
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="justify-content-end collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav navbar-nav-scroll ">
            <li class="nav-item">
              <a class="nav-link" aria-current="page" href="#test">${EditSVG}Test</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#wyniki">${BarChartSVG}Wyniki</a>
            </li>
            <li class="nav-item SetActive" data-bs-toggle="modal" data-bs-target="#appInfoModal" >
              <a class="nav-link" href="#">${HelpSVG}Info</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  `

  return template
}

export default Navbar

