/*
  PRZYGOTOWANIE DANYCH
  TYLKO NA CELE DEVELOPMENTU
*/ 

import { scalesRaw } from './TestSolverRaw'
import * as Ranges from './RangesArray'
import * as AllScales from './AllScales'


const consoleLogAll = function(...args) {
  if (Array.isArray(args)) {
    args.forEach( (item) => {
      console.log(item);  
    })    
  } 
  else if (typeof args === "object") {
    for (const key in args) {
      console.log(args[key]);  
    }
  }
}





window.ASRS_DATA_PREPARATION3 = function(ageVariant = "form70") {
  console.log(`
    --------------------------------------------------------
        ASRS DATA PREPARATION FOR VARIANT ${ageVariant}
    -------------------------------------------------------- 
  `)

  Object.freeze(scalesRaw);

  const allScales = {...scalesRaw[ageVariant]}
  const allScalesShifted = AllScales.Repeat(allScales, Ranges.Shift)
  const allScalesNumbres = AllScales.Repeat(allScalesShifted, Ranges.ParseInt)


  AllScales.logPropsNicely(allScales);
  // AllScales.Repeat(allScales, console.log)

  const strAllScales = AllScales.Stringify(allScales)
  const strAllScalesShifted = AllScales.Stringify(allScalesShifted)
  const strAllScalesNumbers = AllScales.Stringify(allScalesNumbres, false)


  consoleLogAll(
    "\n  RAW", strAllScales, 
    "\n  SHIFTED", strAllScalesShifted, 
    "\n  NUMBERS", strAllScalesNumbers
  );

  console.log(`
    --------------------------------------------------------
                        END
    -------------------------------------------------------- 
  `)
}

window.ASRS_DATA_PREPARATION3("form70")
window.ASRS_DATA_PREPARATION3("form71")
