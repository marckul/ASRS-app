import ALL_STANDARDIZATION_TABLES from './app-data/all-standardization-tables'
import CLASSIFICATION_TABLE from './app-data/classification-table'
import {ALL_SCALES_INDEXES, REVERSE} from './app-data/test-solver-data'

// allStandardizationTables

/* TODO 06.07.2021
  OBLICZANIE WO 
  OBLICZANIE KLASYFIKACJI
  WPISYWANIE DO TABELI 
*/ 


/**
 * @typedef { number[] } numericArray
 * @typedef { { key1: numericArray, [...] , keyN: numericArray } } allScalesArrays
 * @typedef { { scaleName1: number, scaleNameN: number } } allScalesValues
 * 
 * @typedef { string } scaleName1
 * @typedef { string } scaleNameN
 * 
 * @typedef { "Bardzo wysoki" | "Wysoki" | "Podwyższony" | "Przeciętny" | "Niski" } levelValue
 */


/**
 * @alias testSolver
 */
class TestSolver {
  /** TestSolver returns new testSolver instance with solved test results. 
   * Results contains: Raw Results (allScalesRaw), Standardized Results and Classification Results
   * 
   * @param {number[]} formValues - form values given by a form of a integer number array
   * @param {object} formProperties - form properties object (property of Form class)
   */
  constructor(formValues, { ageGroup, fillingPerson, formType, questionsNumber }) {
    /* 
      args;
      + questions values
      + ageGroup
      + fillingPerson

      TODO: 
      1. SET
       + #properties
       + 
    */ 
    this.#formValues = formValues
    this.#properties = { ageGroup, fillingPerson, formType, questionsNumber }

    this.SetStandardizationTable(ALL_STANDARDIZATION_TABLES);
    this.SetClassificationTable(CLASSIFICATION_TABLE);


    this.AllSolveRaw();
    this.AllStandardizeRawResults();
    this.ComputeWO_Scale();
    this.AllResultsClassify();
    
  }
  
  /** Object contains integer values of scales result value  for each scale.
   * @type { { scaleName1: number, [...], scaleNameN: number } }
  */
  #allScalesRaw = { }
  /** Returns allScalesRaw object contains integer values of scales result value  */
  get allScalesRaw() {
    return this.#allScalesRaw
  }

  SolveRaw(scaleIndexes) {
    Object.freeze(scaleIndexes);
    const max = 4; // maximum points in question scale
    const reverseQuestion = this.#reverse[this.#properties.formType]

    let scaleSum = 0;
    for (let i = 0; i < scaleIndexes.length; i++) {
      const quesNumber = scaleIndexes[i];
      const value = this.#formValues[quesNumber]
      const reversed = reverseQuestion[quesNumber] // 1 or 0
      const sign = 1 - 2*reversed // 

      scaleSum += max*reversed + sign*value;      
    }
    return scaleSum
  }
  /**
   * 
   */
  AllSolveRaw() {
    const formType = this.#properties.formType;
    const allScalesIndexes = this.#allScalesIndexes[formType]

    Object.freeze(allScalesIndexes);

    for (const key in allScalesIndexes) {
      const scaleIndexes = allScalesIndexes[key]
      const scaleResult = this.SolveRaw(scaleIndexes)
      this.#allScalesRaw[key] = scaleResult;     
    }
    // Object.freeze(this.#allScalesRaw); // sic!
  }

  /** Standarisation Table object contains standardization scales table in form of arrays
   * where all scales values in scales property maps to values in Ten property (ten is standardized )
   * 
   * @property scales - an object containing standardization arrays for all scales for 
   * selected Test variant. All arrays have to be the same length as the array contained
   * by a Ten property
   * 
   * @property Ten - contains array 
   */
  #standardizationTable = {
    scales: {
      prop: []
    },
    Ten: []
  }
  SetStandardizationTable(ALL_STANDARDIZATION_TABLES) {
    const ageGroup = this.#properties.ageGroup;
    const fillingPerson = this.#properties.fillingPerson;

    this.#standardizationTable = ALL_STANDARDIZATION_TABLES[ageGroup][fillingPerson]
  }
  get standardizationTable() {
    return this.#standardizationTable;
  }
  
  #classificationTable = {
    Ten: [],
    classification: [],
  }
  SetClassificationTable(CLASSIFICATION_TABLE) {
    this.#classificationTable = CLASSIFICATION_TABLE;
  }
  get classificationTable() {
    return this.#classificationTable;
  }

  /** Object contains integer values of scales result standardized value for each scale.
   * @type { { scaleName1: number, [...], scaleNameN: number } }
   */
  #allStandardizedResults = { }
  get allStandardizedResults() {
    return this.#allStandardizedResults;
  }

  /** StandardizationTableMapper method maps source value (originValue) to new value that corresponds to originValue by given mappedValuesArray
   * 
   * @param { integer } originValue - value to map to new value from mappedValuesArray
   * @param { integer[] } originMappingArray - values which from originValue 
   * comes from. 
   * Array should contains only maximum value from mapping ranges. Array **can** contains nulls
   *  
   * @param { array } mappedValuesArray - values that originValue is mapping to
   * Array should contains only maximum value from mapping ranges. Array **cannot** contains nulls
   * 
   * @returns mappedValue - value after mapping 
   */
  StandardizationTableMapper(originValue, originMappingArray, mappedValuesArray) {
    let index = 0; // sic!
    for (let i = 0; i < originMappingArray.length; i++) {
      const resultMapper = originMappingArray[i];
      if (!resultMapper) {
        continue;
      }

      if (originValue > resultMapper) {
        break;
      } 
      else {
        index = i;    
      }      
    }
    return mappedValuesArray[index];    
  }
  /** Method to standardize **single** scale result
   * 
   * @param {string} scaleName 
   * @param {*} singleRawResult 
   */
  StandardizeRawResult(scaleName, singleRawResult) {
    // const ageGroup = this.#properties.ageGroup
    // const fillingPerson = this.#properties.fillingPerson

    const standardScale = this.standardizationTable.scales[scaleName] // scaleName
    const tensScale = this.standardizationTable.Ten 
    const singleStandResult = this.StandardizationTableMapper(singleRawResult, standardScale, tensScale);

    return singleStandResult
  }
  AllStandardizeRawResults() {
    /* TODO
      + calculating WO 
    */ 

    
    for (const key in this.#allScalesRaw) {
      if (Object.hasOwnProperty.call(this.#allScalesRaw, key)) {
        this.#allStandardizedResults[key] = this.StandardizeRawResult(key, this.#allScalesRaw[key]);
      }
    }

    
  }
  ComputeWO_Scale() {
        
    if (Object.keys(this.#allStandardizedResults).length === 0) {     
      throw Error("ComputeWO_Scale() method should be run after test standarisation")
    }
    
    const formType = this.#properties.formType
    let scalesWO = undefined;
    if (formType === "form70") {
      scalesWO = ["RSK", "NZ"]      
    } else {
      scalesWO = ["RSK", "NZ", "SR"]
    }

    let WO = 0;
    // console.log("\nComputeWO_Scale");
    // console.log(this.#standardizedResults);
    for (let i = 0; i < scalesWO.length; i++) {
      // console.log(scalesWO[i], this.#allStandardizedResults[scalesWO[i]]);
      WO += this.#allStandardizedResults[scalesWO[i]]
    }

    this.#allScalesRaw["WO"] = WO;   
    Object.freeze(this.#allScalesRaw);

    this.#allStandardizedResults["WO"] = this.StandardizeRawResult("WO", WO);
    Object.freeze(this.#allStandardizedResults);
  };

  /** Object contains integer values of classification (level value) for each scale.
   * @type { { scaleName1: levelValue, [...], scaleNameN: levelValue } }
   */
  #allClassificationResults = {};
  get allClassificationResults() {
    return this.#allClassificationResults;
  }
  /** Classifies standardized results for all scales  */
  AllResultsClassify() {
    const allStandardizedResults = this.allStandardizedResults;
    const allClassificationResults = [];
    
    // Object.freeze(allStandardizedResults) sic!

    for (const scaleName in allStandardizedResults) {
      if (Object.hasOwnProperty.call(allStandardizedResults, scaleName)) {
        const standardizedResult = allStandardizedResults[scaleName];
        const classification = this.StandardizationTableMapper(standardizedResult, this.classificationTable.Ten, this.classificationTable.classification)
        
        this.#allClassificationResults[scaleName] = classification;
      }      
    }
  }
  #formValues;
  /** 
   * 
  */
  #properties = {
    ageGroup: undefined,
    fillingPerson: undefined,
    formType: undefined,
    questionsNumber: undefined,
  };
  get properties() {
    return this.#properties;
  }
  /** The object contains 2 arrays of integers, each for one form variant. 
   * Each table contains 1 for inverted questions, and 0 for non-inverted 
   * questions */
  #reverse = REVERSE;

  /** The object contains array for each key. Each array contains indexes 
   * indicating which questions are taking to compute each scale result value */
  #allScalesIndexes = ALL_SCALES_INDEXES;
}


export default TestSolver
