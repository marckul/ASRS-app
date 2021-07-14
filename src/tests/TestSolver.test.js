import TestSolver from '../TestSolver'


const formValues = [
  2, 4, 2, 2, 3, 1, 2, 1, 4, 0, 
  4, 0, 3, 3, 0, 4, 4, 2, 0, 2, 
  1, 1, 2, 1, 3, 3, 4, 3, 2, 0, 
  1, 3, 0, 4, 3, 3, 0, 0, 0, 3, 
  1, 0, 0, 1, 2, 3, 3, 0, 2, 1, 
  3, 2, 4, 1, 3, 3, 4, 4, 1, 2, 
  1, 4, 1, 2, 1, 4, 3, 4, 3, 3, 1
];

test("Checking length of values array for TestSolver class testing", () => {
  expect(formValues.length).toBe(71)
})

test("Test results validity for 2-5 parent", () => {
  const props = {
    ageGroup: "2-5",
    fillingPerson: "parent", 
    formType: "form70", 
    questionsNumber: 70, 
  };

  const testSolver = new TestSolver(formValues, props)
  
  const expectedValues = {
    allScalesRaw: {
      RSK: 70,	NZ: 49,	DSM: 69,	RR: 14,	RD: 7,	WSE: 24,	NJ: 10,	ST: 14,	SZ: 16,	WS: 16,	US: 24,	WO: 129,
    },
    allStandardizedResults: {
      RSK: 66, NZ:	63, DSM:	66, RR:	61, RD:	53, WSE:	69, NJ:	57, ST:	63, SZ:	55, WS:	75, US:	67, WO:	69,
    },
    allClassificationResults: {
      RSK:	"Wysoki",
      NZ:	"Podwyższony",
      DSM:	"Wysoki",
      RR:	"Podwyższony",
      RD:	"Przeciętny",
      WSE:	"Wysoki",
      NJ:	"Przeciętny",
      ST:	"Podwyższony",
      SZ:	"Przeciętny",
      WS:	"Bardzo wysoki",
      US:	"Wysoki",
      WO:	"Wysoki",
    }
  }
  
  expect(
    testSolver.allScalesRaw
  ).toEqual(
    expectedValues.allScalesRaw
  )

  expect(
    testSolver.allStandardizedResults
  ).toEqual(
    expectedValues.allStandardizedResults
  )

  expect(
    testSolver.allClassificationResults
  ).toEqual(
    expectedValues.allClassificationResults
  )

})


