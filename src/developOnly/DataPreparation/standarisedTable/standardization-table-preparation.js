import * as AllScales from "../AllScales"
import StandardizationTableRaw from './standardization-table-raw-data'

// StandardizationTableRaw
// StandarisedTableRaw



/**
 * 
 * @param {string} rangesString -  string that contains ranges or numbers separated with separator 
 * @param {*} sep - separator
 * 
 * @returns { string[] }
 */
const ParseRanges = function(rangesString, sep = "\t") {
  return rangesString.split(sep)
}

/**
 * 
 * @param { object } allScales 
 * @returns { object }
 */
const AllParseRanges = allScales => {
  const allSalesRanges = {}

  for (const key in allScales) {
    allSalesRanges[key] = ParseRanges(allScales[key])
  }

  return allSalesRanges
}

/**
 * 
 * @param {string[]} scale 
 * @returns {string[]} scaleWithNulls 
 */
const ToNull = (scale, stringToNull = "null") => {
  const scaleWithNulls = Array(scale.length);

  for (let i = 0; i < scale.length; i++) {
    let rangeStr = scale[i];
    if (rangeStr === stringToNull) {
      rangeStr = null
    }
    scaleWithNulls[i] = rangeStr
  }
  return scaleWithNulls
}

/**
 * 
 * @param {object} allScales 
 * @returns {object}
 * 
 */
const AllToNull = allScales => {
  const allScalesWithNulls = {}

  for (const key in allScales) {
    allScalesWithNulls[key] = ToNull(allScales[key])
  }
  return allScalesWithNulls
}

/** Function checks if array of ranges is sorted (decreasing) and point ranges are continous 
 * 
 * @param {string[]} scale - can contains nulls
 * @param {} scaleDescription 
 */
const CheckValidity = (scale, scaleDescription, scaleRequiredLength = 62) => {
  const separator = "-"
  let rangePrev = "start";
  let errorString = "";
  let wasError = false;


  if (scaleRequiredLength !== scale.length) {
    throw Error(`${scaleDescription} required length is ${scaleRequiredLength} but was ${scale.length}`)    
  }
  for (let i = 0; i < scale.length; i++) {
    const range = scale[i];
    const isRange = range && range !== "null"

    if (isRange && rangePrev === "start") {
      rangePrev = range
    } 
    else if (isRange) {

      let rangePrevNum = rangePrev.split(separator)
      let rangeNum = range.split(separator)

      for (let j = 0; j < rangePrevNum.length; j++) {
        rangePrevNum[j] = parseInt(rangePrevNum[j]);
      }

      for (let j = 0; j < rangeNum.length; j++) {
        rangeNum[j] = parseInt(rangeNum[j]);
      }
      
      const prevMin = Math.min(...rangePrevNum)
      const nowMax = Math.max(...rangeNum)

      if ((prevMin - 1) !== nowMax) {
        wasError = true
        // console.log(rangePrev, range, scale[i], i);
        errorString += `\n${scaleDescription} is not valid for ${rangePrev}, ${range}`
      }
      rangePrev = range
    }
  }

  
  if (wasError) {
    throw Error(errorString)    
  } else {
    console.log(`${scaleDescription} has valid format`);
  }

  

}

/** Function checks if array of ranges is sorted
 * 
 * @param {*} allScales 
 * @param {*} variantDescription 
 */
const AllCheckValidity = (allScales, variantDescription, requiredLength) => {
  console.log(`CHECKING VALIDITY FOR VARIANT: ${variantDescription} ...`);
  for (const key in allScales) {
    CheckValidity(allScales[key], `Scale ${key}`, requiredLength)
  }
}


/** Function checks if array of ranges is sorted (decreasing) and point ranges are continous 
 * 
 * @param {string[]} scale - can contains nulls
 *
 */
const GetScaleMax = (scale, sep = "-") => {
  const scaleRangesTops = scale.map( (range) => {

    let maxNumber = null;
    if (range && range !== "null") {
      const numbersStr = range.split(sep)      
      const numbers = numbersStr.map( number => parseInt(number) )
      maxNumber = Math.max(...numbers)
    } 
    return maxNumber;
  })
  return scaleRangesTops;
}
const AllGetScaleMax = (allScales) => {
  return AllScales.Repeat(allScales, GetScaleMax);  
}


const StringifyLevel0 = function(allScales, lineEnd = "\n") {
  let stringified = ""

  for (const key in allScales) {
    const scaleStr = allScales[key]
    stringified += `${key}: ${scaleStr}${lineEnd}`
  }
  
  return stringified
}



const StandardizationTablePrep0 = function(allScales, {ageGroup, fillingPerson, requiredLength}) {
  
  const allScales1 = AllParseRanges(allScales)
  const allScales2 = AllToNull(allScales1)
  const allScales4 = AllGetScaleMax(allScales2)
  
  console.log("0) ORIGINAL STRINGS", allScales); // YES
  console.log("1) PARSED TO ARRAY\n", allScales1); // YES
  console.log(`2) "NULLS" PARSED TO NULLS\n`, allScales2); // YES
  console.log("4) GETTING ONLY MAX OF EACH RANGE\n", allScales4);
  console.log("3) CHECKING VALIDITY\n"); // YES
  AllCheckValidity(allScales2, `"${ageGroup}, ${fillingPerson}"`, requiredLength)

  console.log("5) STRINGIFIED ");
  const allScalesStr = AllScales.Repeat(allScales4, JSON.stringify)
  AllScales.logPropsNicely(allScalesStr);

  console.log(`%c
    ------------------------------------------
     6) STRINGIFIED ALL SCALES    ${ageGroup.toUpperCase()}, ${fillingPerson.toUpperCase()}
    ------------------------------------------
  `, "font-weight: bold;");
  const allScalesWholeStr = StringifyLevel0(allScalesStr, ",\n")
  console.log(allScalesWholeStr);

}


const StandardizationTablePreparation = function(allStandarizationTables, {ageGroup, fillingPerson}) {
  console.log(`\n\n\n%c
    _______________________________________

      STANDARDIZATION TABLE PREPARATION 

      FOR ALL SCALES IN VARIANT:
      ${ageGroup.toUpperCase()}, ${fillingPerson.toUpperCase()}
    _______________________________________`, 
    "font-size: 15px; font-weight: bold;"
  );

  console.log(`
    ---------------------------------------
      RAW SCALES VALUES
    ---------------------------------------
  `);

  const allScales = allStandarizationTables[ageGroup][fillingPerson]
  const allScalesProps = {
    ageGroup: ageGroup,
    fillingPerson: fillingPerson,
    requiredLength: allScales.scalesRequiredLength
  }
  
  StandardizationTablePrep0(allScales.scales, allScalesProps)

  console.log(`
    ---------------------------------------
      TENS
    ---------------------------------------
  `);
  const standarizationScales = {
    Ten: allScales.Ten
  }
  StandardizationTablePrep0(standarizationScales, allScalesProps)

}



// const ageGroup = "2-5";
// const fillingPerson = "parent";
for (const ageGroup in StandardizationTableRaw) {
  for (const fillingPerson in StandardizationTableRaw[ageGroup]) {
    console.log(`${ageGroup} ${fillingPerson}`)

    const allScalesVariant = {
      ageGroup: ageGroup,
      fillingPerson: fillingPerson,
    }
    StandardizationTablePreparation(StandardizationTableRaw, allScalesVariant)
  }
}



