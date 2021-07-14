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

test(`Testing testSolver.properties validity for: 2-5 parent`, () => {   
  
  const props = {
    ageGroup: "2-5",
    fillingPerson: "parent", 
    formType: "form70", 
    questionsNumber: 70, 
  };

  const testSolver = new TestSolver(formValues, props)

  expect(
    testSolver.properties
  ).toEqual(
    props
  )

  expect(
    testSolver.properties
  ).not.toBe(
    props
  )
})

test(`Testing testSolver.properties validity for: 6-11 parent`, () => {   
  const props = {
    ageGroup: "6-11",
    fillingPerson: "parent", 
    formType: "form71", 
    questionsNumber: 71, 
  };

  const testSolver = new TestSolver(formValues, props)

  expect(
    testSolver.properties
  ).toEqual(
    props
  )

  expect(
    testSolver.properties
  ).not.toBe(
    props
  )
})

test(`Testing testSolver.properties validity for: 12-18 parent`, () => {   
  const props = {
    ageGroup: "12-18",
    fillingPerson: "parent", 
    formType: "form71", 
    questionsNumber: 71, 
  };

  const testSolver = new TestSolver(formValues, props)

  expect(
    testSolver.properties
  ).toEqual(
    props
  )

  expect(
    testSolver.properties
  ).not.toBe(
    props
  )
})

test(`Testing testSolver.properties validity for: 12-18 parent`, () => {   
  const props = {
    ageGroup: "12-18",
    fillingPerson: "parent", 
    formType: "form71", 
    questionsNumber: 71, 
  };

  const testSolver = new TestSolver(formValues, props)

  expect(
    testSolver.properties
  ).toEqual(
    props
  )

  expect(
    testSolver.properties
  ).not.toBe(
    props
  )
})

test(`Testing testSolver.properties validity for: 2-5 teacher`, () => {   
  const props = {
    ageGroup: "2-5",
    fillingPerson: "teacher", 
    formType: "form70", 
    questionsNumber: 70, 
  };

  const testSolver = new TestSolver(formValues, props)

  expect(
    testSolver.properties
  ).toEqual(
    props
  )

  expect(
    testSolver.properties
  ).not.toBe(
    props
  )
})
test(`Testing testSolver.properties validity for: 6-11 teacher`, () => {   
  const props = {
    ageGroup: "6-11",
    fillingPerson: "teacher", 
    formType: "form71", 
    questionsNumber: 71, 
  };

  const testSolver = new TestSolver(formValues, props)

  expect(
    testSolver.properties
  ).toEqual(
    props
  )

  expect(
    testSolver.properties
  ).not.toBe(
    props
  )
})

test(`Testing testSolver.properties validity for: 12-18 teacher`, () => {   
  const props = {
    ageGroup: "12-18",
    fillingPerson: "teacher", 
    formType: "form71", 
    questionsNumber: 71, 
  };

  const testSolver = new TestSolver(formValues, props)

  expect(
    testSolver.properties
  ).toEqual(
    props
  )

  expect(
    testSolver.properties
  ).not.toBe(
    props
  )
})


