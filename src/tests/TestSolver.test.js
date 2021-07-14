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

test("Test results validity for Zestaw1 2-5 parent", () => {
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


test("Test results validity for Zestaw1 6-11 parent", () => {
  const props = {
    ageGroup: "6-11",
    fillingPerson: "parent", 
    formType: "form71", 
    questionsNumber: 71, 
  };

  const testSolver = new TestSolver(formValues, props)
  
  const expectedValues = {
    allScalesRaw: {
      RSK:	43, 
      NZ:	54, 
      SR:	40, 
      DSM:	70, 
      RR:	15, 
      RD:	15, 
      WSE:	32, 
      NJ:	18, 
      ST:	11, 
      SZ:	15, 
      WS:	17, 
      UW:	25, 	
      WO:	215, 
    },
    allStandardizedResults: {
      RSK:	77, 
      NZ:	72, 
      SR:	66, 
      DSM:	74, 
      RR:	67, 
      RD:	71, 
      WSE:	79, 
      NJ:	79, 
      ST:	62, 
      SZ:	59, 
      WS:	78, 
      UW:	64, 
      WO:	79, 
    },
    allClassificationResults: {
      RSK:	"Bardzo wysoki", 
      NZ:	"Bardzo wysoki", 
      SR:	"Wysoki", 
      DSM:	"Bardzo wysoki", 
      RR:	"Wysoki", 
      RD:	"Bardzo wysoki", 
      WSE:	"Bardzo wysoki", 
      NJ:	"Bardzo wysoki", 
      ST:	"Podwyższony", 
      SZ:	"Przeciętny", 
      WS:	"Bardzo wysoki", 
      UW:	"Podwyższony", 
      WO:	"Bardzo wysoki",       
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


test("Test results validity for Zestaw1 12-18 parent", () => {
  const props = {
    ageGroup: "12-18",
    fillingPerson: "parent", 
    formType: "form71", 
    questionsNumber: 71, 
  };

  const testSolver = new TestSolver(formValues, props)
  
  const expectedValues = {
    allScalesRaw: {
      RSK:	43, 
      NZ:	54, 
      SR:	40, 
      DSM:	70, 
      RR:	15, 
      RD:	15, 
      WSE:	32, 
      NJ:	18, 
      ST:	11, 
      SZ:	15, 
      WS:	17, 
      UW:	25, 
      WO:	210,      
    },
    allStandardizedResults: {
      RSK:	69, 
      NZ:	72, 
      SR:	69, 
      DSM:	72, 
      RR:	65, 
      RD:	72, 
      WSE:	73, 
      NJ:	77, 
      ST:	66, 
      SZ:	60, 
      WS:	75, 
      UW:	67, 
      WO:	74,     
    },
    allClassificationResults: {
      RSK:	"Wysoki", 
      NZ:	"Bardzo wysoki", 
      SR:	"Wysoki", 
      DSM:	"Bardzo wysoki", 
      RR:	"Wysoki", 
      RD:	"Bardzo wysoki", 
      WSE:	"Bardzo wysoki", 
      NJ:	"Bardzo wysoki", 
      ST:	"Wysoki", 
      SZ:	"Podwyższony", 
      WS:	"Bardzo wysoki", 
      UW:	"Wysoki", 
      WO:	"Bardzo wysoki",      
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


//========================


test("Test results validity for Zestaw1   2-5 teacher", () => {
  const props = {
    ageGroup: "2-5",
    fillingPerson: "teacher", 
    formType: "form70", 
    questionsNumber: 70, 
  };

  const testSolver = new TestSolver(formValues, props)
  
  const expectedValues = {
    allScalesRaw: {
      RSK:	70, 
      NZ:	49, 
      DSM:	69, 
      RR:	14, 
      RD:	7, 
      WSE:	24, 
      NJ:	10, 
      ST:	14, 
      SZ:	16, 
      WS:	16, 
      US:	24, 
      WO:	127,       
    },
    allStandardizedResults: {
      RSK:	61, 
      NZ:	66, 
      DSM:	64, 
      RR:	58, 
      RD:	55, 
      WSE:	63, 
      NJ:	60, 
      ST:	68, 
      SZ:	59, 
      WS:	76, 
      US:	64, 
      WO:	66, 
    },
    allClassificationResults: {
      RSK:	"Podwyższony", 
      NZ:	"Wysoki", 
      DSM:	"Podwyższony", 
      RR:	"Przeciętny", 
      RD:	"Przeciętny", 
      WSE:	"Podwyższony", 
      NJ:	"Podwyższony", 
      ST:	"Wysoki", 
      SZ:	"Przeciętny", 
      WS:	"Bardzo wysoki", 
      US:	"Podwyższony", 
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



test("Test results validity for Zestaw1 6-11 teacher", () => {
  const props = {
    ageGroup: "6-11",
    fillingPerson: "teacher", 
    formType: "form71", 
    questionsNumber: 71, 
  };

  const testSolver = new TestSolver(formValues, props)
  
  const expectedValues = {
    allScalesRaw: {
      RSK:	43, 
      NZ:	54, 
      SR:	40, 
      DSM:	70, 
      RR:	15, 
      RD:	15, 
      WSE:	32, 
      NJ:	18, 
      ST:	11, 
      SZ:	15, 
      WS:	17, 
      UW:	25, 
      WO:	212, 
    },
    allStandardizedResults: {
      RSK:	70, 
      NZ:	75, 
      SR:	67, 
      DSM:	71, 
      RR:	63, 
      RD:	71, 
      WSE:	71, 
      NJ:	78, 
      ST:	69, 
      SZ:	64, 
      WS:	77, 
      UW:	64, 
      WO:	75, 
    },
    allClassificationResults: {
      RSK:	"Bardzo wysoki", 
      NZ:	"Bardzo wysoki", 
      SR:	"Wysoki", 
      DSM:	"Bardzo wysoki", 
      RR:	"Podwyższony", 
      RD:	"Bardzo wysoki", 
      WSE:	"Bardzo wysoki", 
      NJ:	"Bardzo wysoki", 
      ST:	"Wysoki", 
      SZ:	"Podwyższony", 
      WS:	"Bardzo wysoki", 
      UW:	"Podwyższony", 
      WO:	"Bardzo wysoki",       
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



test("Test results validity for Zestaw1 12-18 teacher", () => {
  const props = {
    ageGroup: "12-18",
    fillingPerson: "teacher", 
    formType: "form71", 
    questionsNumber: 71, 
  };

  const testSolver = new TestSolver(formValues, props)
  
  const expectedValues = {
    allScalesRaw: {
      RSK:	43, 
      NZ:	54, 
      SR:	40, 
      DSM:	70, 
      RR:	15, 
      RD:	15, 
      WSE:	32, 
      NJ:	18, 
      ST:	11, 
      SZ:	15, 
      WS:	17, 
      UW:	25, 
      WO:	200,       
    },
    allStandardizedResults: {
      RSK:	64, 
      NZ:	69, 
      SR:	67, 
      DSM:	69, 
      RR:	61, 
      RD:	71, 
      WSE:	68, 
      NJ:	72, 
      ST:	68, 
      SZ:	64, 
      WS:	73, 
      UW:	62, 
      WO:	72,       
    },
    allClassificationResults: {
      RSK:	"Podwyższony", 
      NZ:	"Wysoki", 
      SR:	"Wysoki", 
      DSM:	"Wysoki", 
      RR:	"Podwyższony", 
      RD:	"Bardzo wysoki", 
      WSE:	"Wysoki", 
      NJ:	"Bardzo wysoki", 
      ST:	"Wysoki", 
      SZ:	"Podwyższony", 
      WS:	"Bardzo wysoki", 
      UW:	"Podwyższony", 
      WO:	"Bardzo wysoki",       
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

/*

test("Test results validity for Zestaw1 ? ?", () => {
  const props = {
    ageGroup: "?",
    fillingPerson: "?", 
    formType: "form ?", 
    questionsNumber: ?, 
  };

  const testSolver = new TestSolver(formValues, props)
  
  const expectedValues = {
    allScalesRaw: {
      
    },
    allStandardizedResults: {
      
    },
    allClassificationResults: {
      
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


*/