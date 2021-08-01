import {html} from 'lit-html'
import {ResultsTable, ResultsTableMockup} from './Results'
import {Info} from './Info'
import {AlertSuccess, AlertFail} from './Icons'
// import {Plot1} from './Plots'


const allQuestions70 = [
 "Uśmiechało się adekwatnie...",
 "Okazywało, że drażnią je...",
 "Rozumiało jak ktoś inny...",
 "Bawiło się z...",
 "Patrzyło na osoby...",
 "Zadawało pytania...",
 "Poproszone wskazywało...",
 "Upierało się, by robić coś...",
 "Chciało, by wszystko...",
 "Silnie reagowało...",
 "Układało przedmioty...",
 "Zbyt silnie reagowało...",
 "Patrzyło na innych...",
 "Rozumiało punkt widzenia...",
 "Miało trudności podczas...",
 "Uczestniczyło we wspólnej...",
 "Wydawało się zagubione...",
 "Bawiło się robiąc...",
 "Przejmowało się...",
 "Reagowało zdenerwowaniem...",
 "Odpowiadało, gdy zostało zagadnięte...",
 "Używało języka zbyt dziecinnego...",
 "Unikało patrzenia...",
 "Wolało bawić się samo...",
 "Słuchało, gdy się do niego ...",
 "Mówiło zbyt dużo...",
 "Zbytnio się koncentrowało...",
 "Zaczynało rozmowę z ...",
 "Podtrzymywało rozmowę...",
 "Bawiło się obok...",
 "Zachowywało się niegrzecznie...",
 "Nie udawało mu się skończyć...",
 "Miało problemy w relacjach...",
 "Miało trudności z czekaniem...",
 "Bawiło się zabawkami...",
 "Okazywało niewiele...",
 "Uczyło się wykonywania...",
 "Zauważało sygnały...",
 "Fascynowało się elementami...",
 "Odpowiadało, gdy odzywały się...",
 "Zbyt wiele mówiło ...",
 "Mówiło w dziwaczny sposób...",
 "Unikało patrzenia...",
 "Miało trudności podczas rozmowy...",
 "Stawiało opór, kiedy...",
 "Zbyt silnie reagowało...",
 "Zbyt długo koncentrowało się...",
 "Nalegało, by przez cały czas...",
 "Szukało towarzystwa...",
 "Okazywało zainteresowanie...",
 "Miało trudności w kontaktach...",
 "Rozumiało humor...",
 "Powtarzało pewne słowa...",
 "Dzieliło się radością...",
 "Miało trudność z koncentracją...",
 "Domagało się wykonywania...",
 "Wykonywało zrozumiałe dla siebie ...",
 "Przerywało...",
 "Myliło zaimki...",
 "Obsesyjnie skupiało się...",
 "Miało dobre kontakty...",
 "Wierciło się...",
 "Rozpraszało się...",
 "Trzepotało rękami...",
 "Kręciło przedmiotami...",
 "Wąchało, smakowało...",
 "Nie potrafiło wyrazić ...",
 "W zdenerwowaniu...",
 "Zbyt silnie reagowało...",
 "Powtarzało lub naśladowało...",
]

const allQuestions71 = [
  "Wydawał się zagubiony...",
  "Okazywał, że drażnią go...",
  "Szukał towarzystwa...",
  "Okazywał niewiele...",
  "Wykonywał zrozumiałe...",
  "Kłócił się...",
  "Miał trudności z czekaniem...",
  "Uczestniczył we wspólnej...",
  "Patrzył na osoby...",
  "Angażował się w zadania...",
  "Unikał patrzenia...",
  "Bawił się zabawkami...",
  "Silnie reagował...",
  "Miał trudności podczas...",
  "Rozumiał punkt widzenia...",
  "Uczył się wykonywania...",
  "Używał języka zbyt...",
  "Zachowywał się...",
  "Miał trudności...",
  "Rozumiał punkt widzenia...",
  "Powtarzał pewne...",
  "Obsesyjnie skupiał się...",
  "Podtrzymywał rozmowę...",
  "Upierał się...",
  "Zbyt silnie reagował...",
  "Powtarzał lub naśladował...",
  "Wąchał, smakował...",
  "Rozumiał, jak ...",
  "Zbyt silnie reagował...",
  "Rozpraszał się...",
  "Bawił się z...",
  "Zauważał sygnały...",
  "Odpowiadał, gdy ...",
  "Unikał patrzenia...",
  "Miał trudności...",
  "Robił w zadaniach...",
  "Zbyt wiele mówił...",
  "Stawiał opór...",
  "Przejmował się...",
  "Zbytnio się koncentrował...",
  "Nie rozumiał...",
  "Dzielił się radością...",
  "Okazywał zainteresowanie...",
  "Nie kończył...",
  "Rozumiał humor...",
  "Trzepotał rękami...",
  "Słuchał, kiedy...",
  "Zbyt długo koncentrował...",
  "Chciał, by...",
  "Mówił zbyt dużo...",
  "Domagał się ...",
  "Miał trudności z...",
  "Fascynował się...",
  "Układał przedmioty...",
  "Uśmiechał się...",
  "Zaczynał rozmowę...",
  "Nie udawało mu...",
  "Zadawał pytania...",
  "Miał trudności...",
  "Przerywał...",
  "Patrzył na innych...",
  "Zbyt silnie reagował ...",
  "Reagował zdenerwowaniem...",
  "Wolał bawić...",
  "Nalegał, by...",
  "Miał problemy w relacjach...",
  "Kręcił przedmiotami...",
  "Mylił zaimki...",
  "Miał dobre kontakty...",
  "Odpowiadał, gdy...",
  "Wiercił się...",
]


// onclick="window.ASRS.Form.ClickRouter(event)"

const CompletionIcons = () => {
  return html`
    <span class="completion-icon">
      ${AlertSuccess}
      ${AlertFail}
    </span>
  `
}



const RadioGroup = (name = "name", number = 0, question = "Pytanie") => {
  return(html`
    <li class="asrs-form-li ${name} uncompleted">
      <div class="row asrs-form-row">

        <p class="asrs-question col">
          ${CompletionIcons()}
          ${question}
        </p>
        <div class="asrs-radio-group col" id="${name}" radio-group-index="${number}" >
          <div class="my-radio-button">
            <input class="" type="radio" name="${name}" id="${name}-0" value="0" >
            <label class="" for="${name}-0" >0</label>
          </div>      
          <div class="my-radio-button">
            <input class="" type="radio" name="${name}" id="${name}-1" value="1" >
            <label class="" for="${name}-1">1</label>
          </div>
          <div class="my-radio-button">
            <input class="" type="radio" name="${name}" id="${name}-2" value="2" >
            <label class="" for="${name}-2">2</label>
          </div>
          <div class="my-radio-button">
            <input class="" type="radio" name="${name}" id="${name}-3" value="3" >
            <label class="" for="${name}-3">3</label>
          </div>
          <div class="my-radio-button">
            <input class="" type="radio" name="${name}" id="${name}-4" value="4" >
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
  AsrsForm70.push(RadioGroup(`form70-${index}`, index, allQuestions70[index]))         
}

for (let index = 0; index < 71; index++) {
  AsrsForm71.push(RadioGroup(`form71-${index}`, index, allQuestions71[index]))         
}

const MainContent = () => {
  const template = html`
<div class="main-wrapper">
  <section id="test" >
    <div class="asrs-form-container container shadow border  rounded-3 p-5 mt-5">
      <h1>Formularz</h1>   
      <p>Jak często w ciągu ostatnich czterech tygodni….</p>
      <form action="" class="form70 asrs-form" name="asrs-form" >
        <ol class="asrs-form-list" id="form70">
          ${AsrsForm70}
        </ol>
      </form> 
      <form action="" class="form71 asrs-form" name="asrs-form" >
        <ol class="asrs-form-list d-none" id="form71">
          ${AsrsForm71}
        </ol>
      </form>
    </div>
  </section>
  <section id="wyniki" >
    
    <div  class="results-container container shadow border  rounded-3 p-0">
      <div class="results-table-container p-5">
        <h1>Wyniki</h1>    
        <div id="results-table" class="test-results table-responsive">
          <p class="fst-italic fs-5">Kiedy wypełnisz formularz, wyniki pojawią się tutaj</p>
        </div>
      </div>
      <!-- <div id="results-table-mockup" class="test-results">
        ${ResultsTableMockup()}
      </div> -->

      <div class="test-results">
        <div id="asrs-plots--raw"></div>
        <div id="asrs-plots--standardized"></div>
        <img id="jpg-export"></img>

        <div id="asrs-plots--plot2"></div>
        <div id="asrs-plots--plot-mockup"></div>
      </div>

      
    </div>

    

  </section>
  <section id="app-info2" >
    ${Info()}
  </section>
</div>
  `

  return template
}

export default MainContent

