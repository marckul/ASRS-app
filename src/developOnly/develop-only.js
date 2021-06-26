// import './DataPreparation/DataPreparation'
import TestSolver from '../TestSolver'


const testSolver = new TestSolver(
  [2, 2, 1, 2, 4, 4, 3, 4, 0, 2, 0, 2, 2, 2, 2, 3, 1, 4, 2, 1, 4, 3, 3, 0, 4, 1, 3, 1, 4, 0, 1, 2, 0, 4, 4, 1, 0, 0, 2, 3, 1, 3, 4, 2, 2, 3, 0, 3, 1, 0, 1, 1, 4, 4, 0, 0, 3, 3, 3, 3, 0, 1, 3, 2, 0, 4, 3, 3, 3, 3, null],
  {
    ageGroup: "2-5",
    fillingPerson: "parent",
    formType: "form70",
    questionsNumber: 70,
    filledQuestions: 70
  }
);


console.log(JSON.stringify(testSolver.scalesRaw));


