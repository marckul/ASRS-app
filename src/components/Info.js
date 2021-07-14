import { html } from 'lit-html'


const Info = () => {
  const template = html`
      <!-- Modal -->
      <div class="modal fade" id="appInfoModal" tabindex="-1" aria-labelledby="appInfoModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-xl">
        <div class="modal-content">
          <div class="ms-auto p-3">
            <!-- <h5 class="modal-title" id="appInfoModalLabel">Info</h5> -->  
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <div class="container-fluid">
              <h1 class="modal-title display-1" id="appInfoModalLabel">Info</h1>  
              <h2 class="display-5">Skróty klawszowe</h2>
              <ul>
                <li> klawisz <span class="keyshortcut uparrow"></span> lub <span class="keyshortcut downarrow"></span> zmienia pytanie dla którego wpisywane z klawiatury jest aktywne</li>
                <li> klawisze 
                  <span class="keyshortcut">0</span>
                  <span class="keyshortcut">1</span>
                  <span class="keyshortcut">2</span>
                  <span class="keyshortcut">3</span>
                  <span class="keyshortcut">4</span>
                  pozwalają na zaznaczenie odpowiedniej wartości na formularzu dla aktywnego pytania </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
  return template;
}


export { Info }