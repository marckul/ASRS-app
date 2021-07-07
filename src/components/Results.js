import {html, render} from "lit-html"


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


const ResultsTable = () => {
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
    </table>
  `
  return(template)
}


const CreateResultsTable = () => {
  
  render(ResultsTable(), document.getElementById("results-table"))
  
}

export { ResultsTable, CreateResultsTable, ResultsTableMockup}