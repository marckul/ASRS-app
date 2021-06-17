/*
  PRZYGOTOWANIE DANYCH
  TYLKO NA CELE DEVELOPMENTU
*/ 

import TestSolverRaw from './TestSolverRaw'

const testSolverRaw = new TestSolverRaw()


// // https://stackoverflow.com/questions/208016/how-to-list-the-properties-of-a-javascript-object
// function CloneObj(obj) {
//   if (null == obj || "object" != typeof obj) return obj;
//   var copy = obj.constructor();
//   for (var attr in obj) {
//       if (obj.hasOwnProperty(attr)) copy[attr] = obj[attr];
//   }
//   return copy;
// }

/** ShiftScales
 * Przesunięcie indeksów Skal o -2 */ 
const ShiftScales = (ageVariant) => {

  const scales = {...testSolverRaw.scales[ageVariant]};
  const keys = Object.keys(scales)

  // console.log("\nSCALES NAMES\n", keys);
  // console.log("SCALES BEFORE SHIFT \n", testSolverRaw.scales[ageVariant]);

  // Klonowanie skal
  for (let i = 0; i < keys.length; i++) {
    scales[keys[i]]  = [...testSolverRaw.scales[ageVariant][keys[i]]]
  } 

  for (let i = 0; i < keys.length; i++) {
    const scale = scales[keys[i]];
    // console.log(scale);
    for (let j = 0; j < scale.length; j++) {
      let index = scale[j];
      if (!isNaN(index)) {
        scale[j] = (parseInt(index) - 2).toString();
      } else {
        // let index = ""
        const nums = index.split(":").map( num => parseInt(num) - 2)
        scale[j] = nums.join(":");
      }  
    }
    scales[keys[i]] = scale;
  } 
  return scales
}

const foldNicely = (prefix, array = ["1", "2"]) => {
  const arrayLength = array.length.toString();
  let addSpace = "  ";

  for (let i = 0; i < arrayLength.length; i++) {
    addSpace += " ";    
  }
  
  const arrayStr = array.map( str => `"${str}"`).join(', ')
  return `${prefix}${addSpace}[${arrayStr}]`;

}

const DisplayInOrder = (object, displayNice = false, title = "\nSCALES AFTER SHIFT DISPLAYED IN ORDER") => {
  console.log(title);

  if (displayNice) {
    let string = "";

    for (const key in object) {
      if (Object.hasOwnProperty.call(object, key)) {
        const array = object[key];
        const line = foldNicely(`${key}: `, array);
        string += `${line},\n`;
      }
    }
    console.log(string);
  } 
  else {
    for (const key in object) {
      if (Object.hasOwnProperty.call(object, key)) {
        const array = object[key];
        console.log(`${key}: `, array);
      }
    }
  }
  
}


// FUNCTION CALL
window.ASRS_DATA_PREPARATION = function(ageVariant = "form70") {
  
  console.log(
    " ======================================================== ",
    `\n   ASRS DATA PREPARATION FOR VARIANT ${ageVariant}\n`, 
    "======================================================== \n"
  );
  // const ageVariant = "form70";
  const scalesShifted = ShiftScales(ageVariant);

  console.log(`\n\nScales ${ageVariant} BEFORE shift\n`, testSolverRaw.scales[ageVariant]);
  // console.log(`\n\nScales ${ageVariant} AFTER shift\n`, scalesShifted);

  DisplayInOrder(testSolverRaw.scales[ageVariant], false, `\n\nScales ${ageVariant} BEFORE shift displayed in order\n`)
  // DisplayInOrder(scalesShifted, false)
  DisplayInOrder(testSolverRaw.scales[ageVariant], true, `\n\nScales ${ageVariant} BEFORE shift displayed NICELY in order\n`)

  DisplayInOrder(scalesShifted, true, `\n\nScales ${ageVariant} AFTER shift displayed in order (!SHOULD BE LIKE ABOVE MINUS 2)\n`)

  console.log(
    " ======================================================== ",
    `\n   \t\t\t\t\t\tEND\n`, 
    "======================================================== \n\n\n\n"
  );
}


window.ASRS_DATA_PREPARATION("form70");
window.ASRS_DATA_PREPARATION("form71");


