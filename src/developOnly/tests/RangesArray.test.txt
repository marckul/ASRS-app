import * as RangesArray from '../DataPreparation/RangesArray'



/* ===============
  Shift
================== */ 
const testArray_1 = ["1", "2:10", "3", "7"]
const testArray_2 = ["2", "4:6", "9:12", "14:15", "17", "19:22", "27", "29:30", "39:44", "48:49", "51:52", "54:55", "57", "62", "65:66", "71"]


test(`Shift all numbers in ranges string array. Testing array: ${testArray_1}`, () => {
  expect(
    RangesArray.Shift(testArray_1)
  ).toEqual(
    ["-1", "0:8", "1", "5"]
  )

  expect(
    RangesArray.Shift(testArray_1)
  ).not.toBe(
    testArray_1
  )
})

test(`Shift all numbers in array of ranges strings. Testing array: ${testArray_2}`, () => {
  expect(
    RangesArray.Shift(testArray_2)
  ).toEqual(
    ["0", "2:4", "7:10", "12:13", "15", "17:20", "25", "27:28", "37:42", "46:47", "49:50", "52:53", "55", "60", "63:64", "69"],
  )

  expect(
    RangesArray.Shift(testArray_2)
  ).not.toBe(testArray_2)
})



/* ===============
  ParseInt 
================== */ 

test(`Parse array of ranges strings to integers`, () => {
  expect(
    RangesArray.ParseInt(["1", "2:10", "3", "7"])
  ).toEqual(
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 3, 7]
  )
})


test(`Parse array of ranges strings to integers`, () => {
  
  expect(
    RangesArray.ParseInt(["2:4", "1:1", "4:5", "3"])
  ).toEqual(
    [2, 3, 4, 1, 4, 5, 3]    
  )
})

test(`Parse array of ranges strings to integers`, () => {
  
  expect(
    RangesArray.ParseInt(["-2:1", "1:1", "4:5", "3", "6:8"])
  ).toEqual(
    [-2, -1, 0, 1, 1, 4, 5, 3, 6, 7, 8]    
  )
})

test(`ParseInt should throws error if first number is larger than second`, () => {
  expect( () => {
    RangesArray.ParseInt(["2:4", "2", "5:2", "3"])
  }).toThrow(
    Error("first number in rangeString can't be larger than second")
  )
})

// test(`ParseInt should throws error if first number is larger than second`, () => {
//   expect( () => {
//     RangesArray.RangeParse("5:2")
//   }).toThrow("first number in rangeString can't be larger than second")
// })

test(`ParseInt should throws error if there is  more than 2 numbers in range eg "3:5:10"`, () => {
  expect( () => {
    RangesArray.ParseInt(["2:4", "3:5:10", "2", "3"])
  }).toThrow(
    Error("rangeString should contain 1 or 2 values")
  )
})

test(`ParseInt should throws error if there is  more than 2 numbers in range eg "7:2:-2"`, () => {
  expect( () => {
    RangesArray.ParseInt(["2:4", "3", "2", "3", "7:2:-2"])
  }).toThrow(
    Error("rangeString should contain 1 or 2 values")
  )
})


/* ===============
  Stringify
================== */ 
test(`Stringify string[] with adding number of items before array. Testing  array: ${testArray_1}`, () => {
  expect(
    RangesArray.Stringify(testArray_1)
  ).toEqual('(4) ["1", "2:10", "3", "7"]')
})

test(`Stringify string[] without adding number of items before array. Testing  array: ${testArray_1}`, () => {
  expect(
    RangesArray.Stringify(testArray_1, false)
  ).toEqual('["1", "2:10", "3", "7"]')
})

var testArray_3 = [24, 3, 4, 12, 2, 3, 7, 3, 1, 12, 6]
test(`Stringify number[] with adding number of items before array. Testing  array: ${testArray_3}`, () => {
  expect(
    RangesArray.Stringify(testArray_3)
  ).toEqual('(11) [24, 3, 4, 12, 2, 3, 7, 3, 1, 12, 6]')
})

test(`Stringify should throw error.`, () => {
  expect( () => {
    RangesArray.Stringify([null, 2, 3, 4])
  }).toThrow(
    Error("Stringify not support other metod than number[] or string[]")
  )
})

