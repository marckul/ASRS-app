import * as Ranges from './RangesArray'


/**
 * 
 * @param { object } allScales 
 * @param { function } processFunction 
 */
const Repeat = function(allScales, ProcessFunction, ...args) {
  const allScalesOut = {}

  for (const key in allScales) {
    const scale = allScales[key];
    scale = ProcessFunction(scale, ...args)    
    allScalesOut[key] = scale
  }

  return allScalesOut;
}

/**
 * 
 * @param { object } allScales 
 * @returns {string[]}
 */
const Stringify = function(allScales, dipslayLength = true) {
  let stringified = ""

  for (const key in allScales) {
    const scaleStr = Ranges.Stringify(allScales[key], dipslayLength)
    stringified += `${key}: ${scaleStr} \n`
  }
  
  return stringified
}


const Shift = function(allScales) {
  return Repeat(allScales, Ranges.Shift)
}

const ParseInt = function(allScales) {
  return Repeat(allScales, Ranges.ParseInt)
}


const logPropsNicely = function(allScales) {
  for (const key in allScales) {
    console.log(`${key}:`, allScales[key]);
  }
}


export {Repeat, Stringify, Shift, ParseInt, logPropsNicely}