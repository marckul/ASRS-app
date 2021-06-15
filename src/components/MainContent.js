import {html} from 'lit-html'


const RadioGroup = (name = "name", number = 0, question = "Pytanie") => {
  return(html`
    <li>
      <div class="row asrs-form-row">
        <p class="asrs-question col">${question}</p>
        <div class="asrs-radio-group col" id="${name}" radio-group-index="${number}" >
          <div class="my-radio-button">
            <input class="" type="radio" name="${name}" id="${name}-0" value="0" onclick="window.ASRS.Form.Update(event)">
            <label class="" for="${name}-0" >0</label>
          </div>      
          <div class="my-radio-button">
            <input class="" type="radio" name="${name}" id="${name}-1" value="1" onclick="window.ASRS.Form.Update(event)">
            <label class="" for="${name}-1">1</label>
          </div>
          <div class="my-radio-button">
            <input class="" type="radio" name="${name}" id="${name}-2" value="2" onclick="window.ASRS.Form.Update(event)">
            <label class="" for="${name}-2">2</label>
          </div>
          <div class="my-radio-button">
            <input class="" type="radio" name="${name}" id="${name}-3" value="3" onclick="window.ASRS.Form.Update(event)">
            <label class="" for="${name}-3">3</label>
          </div>
          <div class="my-radio-button">
            <input class="" type="radio" name="${name}" id="${name}-4" value="4" onclick="window.ASRS.Form.Update(event)">
            <label class="" for="${name}-4">4</label>
          </div>
        </div>
      </div>
    </li>
    
  `)
}

const AsrsForm70 = [];
const AsrsForm71 = [];

const question70 = "70 Pytań"
const question71 = "71 Pytań"

const FormName = "asrs-form";

for (let index = 0; index < 70; index++) {
  AsrsForm70.push(RadioGroup(`form70-${index}`, index, question70))         
}

for (let index = 0; index < 71; index++) {
  AsrsForm71.push(RadioGroup(`form71-${index}`, index, question71))         
}

const MainContent = () => {
  const template = html`
  <section id="test" >
    <div class="asrs-form-container container shadow border  rounded-3 p-5 mt-5">
      <h1>Formularz</h1>    
      <ol class="asrs-form-list" id="form70">
        ${AsrsForm70}
      </ol>
      <ol class="asrs-form-list d-none" id="form71">
        ${AsrsForm71}
      </ol>
    </div>
  </section>
  <section id="wyniki" >
    <div  class="results-container my-5 container shadow border  rounded-3 p-5">
      <h1>Wyniki</h1>    
      <div class="results">
        <p class="fst-italic fs-5">Kiedy wypełnisz formularz, wyniki pojawią się tutaj</p>
      </div>
    </div>
  </section>
  <section id="app-info" >
    <div  class="results-container my-5 container shadow border  rounded-3 p-5">
      <h1>Info</h1>    
      <div class="app-info">
        <p class="fst-italic fs-5">Tutaj wpisz informacje na temat aplikacji</p>
      </div>
    </div>
  </section>

  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus ullam quisquam cumque alias odit tempore mollitia accusamus illo suscipit sapiente recusandae molestias modi officiis nam magni cum voluptatem voluptatibus, molestiae consequatur labore corporis! Vero perferendis quibusdam consequatur rem porro asperiores unde, eius ad recusandae cumque iusto inventore quos iure illum molestias dolore maxime, placeat maiores sed aspernatur pariatur reiciendis aliquam quam facilis? Ex sit minima ab et similique eaque. Aut aliquid quaerat laudantium ipsam exercitationem perferendis nam, odit sequi! Commodi dolor amet ullam minima ipsum, iusto quos corrupti dolore eum laborum, voluptas in nostrum cupiditate! Esse odit qui facere fugiat dolorem accusantium dolore blanditiis veritatis laudantium, deserunt quibusdam numquam iusto consequuntur iste doloremque enim eum dignissimos atque dolor? Distinctio, aspernatur sint asperiores voluptate natus atque quaerat, ratione quos nemo accusamus non delectus consequatur fugiat repudiandae. Delectus eum saepe fugit incidunt libero ea asperiores. Provident, eaque pariatur dicta corporis voluptate eveniet accusamus! Maiores tempore reprehenderit magni, nisi porro a necessitatibus veritatis reiciendis iste quis quas quam laboriosam dolore accusantium voluptate, asperiores quod assumenda possimus sit veniam itaque nulla ipsam fugiat. Eaque eum dignissimos aliquid, reiciendis fugiat beatae in? Rerum, repudiandae ducimus dolores id quam provident consequatur fuga non earum vitae dolorum dolorem vel possimus harum officiis est exercitationem suscipit cupiditate delectus doloribus maiores. Excepturi, libero! Alias repudiandae laborum tempore repellat vero fugiat possimus, ipsa neque, suscipit voluptatibus, eos voluptatum quasi ducimus nobis ut! Doloribus aut labore quaerat, dolor velit hic numquam architecto harum incidunt dolores est voluptates. Minima, cupiditate veniam? Impedit nobis eius minima ullam, explicabo error animi. Magni voluptatibus voluptas quidem dolorum adipisci eum optio aperiam eos magnam ipsa doloremque nemo nostrum dolore enim minima possimus debitis hic a quaerat voluptates placeat blanditiis, est inventore. Quasi aspernatur labore accusantium cumque asperiores. Accusamus totam esse impedit unde, voluptatum, omnis cumque libero et soluta molestiae officiis rerum voluptatibus quia facilis ipsam nobis alias deleniti quis quos velit quidem expedita. Doloremque eos id, adipisci libero mollitia voluptate! Quibusdam quam numquam provident! Fuga velit possimus ipsa ducimus ratione temporibus, consectetur, doloribus quidem maxime numquam eaque accusantium illum voluptas tenetur, beatae dicta nesciunt iusto! Recusandae aperiam optio quod deserunt praesentium odit at laborum! Voluptates obcaecati at maxime impedit amet natus sapiente qui odio enim. Magnam quam modi porro facere. Recusandae, accusantium? Dignissimos in repudiandae eligendi rerum voluptatem repellendus dolorum tempora libero illum iure, ex hic commodi iusto, odit, sed dolorem magni porro quisquam voluptates quam. Doloribus sapiente cum aut assumenda rem officia adipisci voluptatem, exercitationem culpa officiis nam, enim error odit incidunt qui tempora non eligendi nihil blanditiis laborum omnis quae mollitia iure at. Officia, eveniet nulla delectus facilis architecto accusantium, tempora omnis culpa sapiente tempore nihil nisi cumque iusto consequuntur aut exercitationem! Ad excepturi maxime veniam molestias ut quis porro tenetur mollitia tempora, necessitatibus consectetur sapiente facilis officia animi architecto incidunt obcaecati doloribus repellat aliquid, quasi hic voluptates assumenda. Quas dolorem et, aliquam aperiam beatae corporis ex? Tempora, quas ullam, rerum facilis doloribus commodi odit, labore eius temporibus enim ut voluptas officia neque recusandae.</p>

  `

  return template
}

export default MainContent

