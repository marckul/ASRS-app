/** Function shifts an array of ranges given by string for a given shift (constant). 
 * 
 * @param {string[]} rangesArray - string array, contains integers or integer ranges , eg. "1", "5" or "3:10"
 * @param {number} shift - constant added to all numbers in array (default -2)
 * 
 * @returns {string[]} rangesArray - return  ranges array but shifted. Function don't makes copy of array
 */
const Shift = function (rangesArray, shift = -2) {
  const rangesShifted = new Array(rangesArray.length);
  for (let j = 0; j < rangesArray.length; j++) {
    let index = rangesArray[j];

    if (isNaN(index)) {
      const nums = index.split(":").map((num) => parseInt(num) - 2);
      rangesShifted[j] = nums.join(":");
    } else {
      rangesShifted[j] = (parseInt(index) + shift).toString();
    }
  }
  return rangesShifted;
};

/** Parses an array of string ranges to an integer
 *
 * @param {string[]} scalesString
 */
const ParseInt = function(scalesString) {
  const intArray = [];

  scalesString.forEach((rangeString) => {
    const numbers = RangeParse(rangeString);
    intArray.push(...numbers);
  });

  return intArray;
};

/** Parse range given by a string to integers range array.
 * @param {string} rangeString - string range with integers separated by double dots ":"
 * @returns array with parsed integers from a given range
 */
const RangeParse = function (rangeString) {
  let numbers = [];

  const range = rangeString.split(":");
  if (range.length <= 2) {
    const rangeInt = range.map((numStr) => parseInt(numStr));
    const end = rangeInt.length - 1;

    if (rangeInt[0] > rangeInt[end]) {
      throw new Error("first number in rangeString can't be larger than second")
    }

    for (let j = rangeInt[0]; j <= rangeInt[end]; j++) {
      const value = j;
      numbers.push(value);
    }
  } 
  else {
    throw Error("rangeString should contain 1 or 2 values");
  }
  return numbers;
};




/** Stringify
 * 
 * @param { string[] } array 
 */
const Stringify = function(array, dipslayPrefix = true) {
  
  let prefix = "";
  if (dipslayPrefix) {
    prefix = `(${array.length}) `;
  } 
  
  if (typeof array[0] === "string") {
    const string = `${prefix}["${array.join(`", "`)}"]`
    return string
  } 
  else if (typeof array[0] === "number") {
    const string = `${prefix}[${array.join(`, `)}]`
    return string
  } 
  else {
    throw Error("Stringify not support other metod than number[] or string[]")
  }
}



export { Shift, ParseInt, Stringify, RangeParse };
