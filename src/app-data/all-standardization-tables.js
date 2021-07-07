

/** **ALL_STANDARDIZATION_TABLES** constant object contains all Standardization 
 * Tables informations. 
 * 
 * All single value in scales property is the **MAXIMUM** in the raw test result 
 * value range.The range maps to the normalized value (also called Ten value). 
 * Ten value of Ten corresponding to the range is stored in Ten property
 * 
 * @param "2-5"   - contains all standarisation information for "2-5" age group
 * @param "6-11"  - contains all standarisation information for "6-11" age group
 * @param "12-18" - contains all standarisation information for "12-18" age group
 * 
 * All **ageGroup** properties have same structure that contains testCompletingPerson:
 * @param ageGroup.parent contains the single Standardization Table for parent  
 * @param ageGroup.teacher contains the single Standardization Table for teacher  
 * 
 * **Parent** property and **teacher** properties (testCompletingPerson) have same structure that all 
 * contains the single Standardization Table in form of properties:
 * @param ageGroup.testCompletingPerson.scales  contains single scales as properties in each one scale in form of array
 * @param ageGroup.testCompletingPerson.Ten     contains array of tens values
 * 
 */
const ALL_STANDARDIZATION_TABLES = {
  "2-5": {
    /** Contains the single Standardization Table for a parent */
    parent:  {
      scales: {
        RSK: [156,null,102,null,91,90,89,88,86,85,82,80,79,76,73,69,66,63,61,59,57,55,53,51,49,47,46,44,43,41,40,39,37,36,35,33,31,29,28,27,26,23,22,21,20,19,17,16,15,14,13,null,12,10,8,7,null,null,4,null,null],
        NZ: [92,null,69,null,68,67,null,61,60,58,57,56,54,null,53,52,51,50,48,47,45,44,43,41,null,40,39,38,36,35,33,32,31,30,28,27,26,24,23,22,20,19,18,17,null,null,null,null,null,null,null,null,null,16,null,null,null,null,null,null,null],
        WO: [160,null,null,null,143,142,137,136,134,133,132,130,128,null,127,126,125,123,121,118,116,115,114,112,111,109,108,106,104,103,101,99,97,96,94,92,90,88,86,84,82,81,79,77,75,71,67,65,63,62,61,60,59,56,55,null,54,null,53,null,49],
        DSM: [140,null,90,null,null,83,82,79,78,77,76,null,71,70,69,67,65,62,60,59,58,57,55,54,53,52,51,50,48,47,45,44,43,41,40,38,37,36,34,33,32,31,29,27,26,24,22,21,19,17,16,null,15,9,null,8,null,null,7,null,null],
        RR: [36,null,null,null,29,28,27,23,22,null,21,20,19,18,null,17,16,15,null,14,13,null,12,null,11,null,10,null,9,null,null,8,null,7,null,6,null,null,5,null,4,null,3,null,null,null,2,null,null,null,null,null,1,null,null,null,0,null,null,null,null],
        RD: [20,null,null,null,null,14,null,null,null,13,null,null,12,null,null,11,null,10,null,null,9,null,null,8,null,null,null,7,null,null,6,null,null,5,null,null,null,4,null,null,null,3,null,null,null,2,null,null,null,null,1,null,null,null,null,0,null,null,null,null,null],
        WSE: [48,null,42,null,null,32,31,29,26,25,null,24,23,22,21,20,null,19,18,17,null,16,15,null,14,null,13,null,12,null,11,null,null,10,9,null,8,null,7,null,6,null,5,null,4,null,null,3,null,null,2,null,null,1,null,null,null,null,0,null,null],
        NJ: [24,null,22,null,19,null,18,null,null,17,null,16,null,15,null,14,13,null,null,12,null,11,null,10,null,9,null,null,8,null,null,7,null,6,null,5,null,4,null,null,3,null,null,2,null,null,1,null,null,null,null,0,null,null,null,null,null,null,null,null,null],
        ST: [24,null,null,null,null,19,null,null,18,null,17,null,16,null,null,15,null,14,null,13,null,12,null,null,11,null,null,10,null,null,9,null,null,8,null,7,null,null,6,null,5,null,4,null,null,3,null,null,null,2,null,null,null,null,null,1,null,null,null,null,0],
        SZ: [null,null,32,null,null,26,null,25,null,null,null,24,23,null,22,null,21,20,null,19,null,18,null,17,null,16,null,15,null,14,null,13,null,12,null,11,10,null,9,null,8,null,7,null,6,null,null,5,4,null,3,null,2,null,null,1,null,null,null,null,0],
        WS: [24,null,null,null,17,16,null,null,14,null,13,null,null,12,null,11,null,10,null,null,9,null,8,null,null,7,null,6,null,null,5,null,null,4,null,null,3,null,null,2,null,null,null,1,null,null,null,null,null,0,null,null,null,null,null,null,null,null,null,null,null],
        US: [40,null,30,null,29,null,28,null,27,null,26,null,25,24,null,23,null,22,null,21,null,20,19,18,null,17,null,16,null,15,null,14,null,13,12,null,11,null,10,null,9,8,null,7,null,null,6,null,5,null,null,null,4,null,null,null,3,null,2,null,1],
      },
      Ten: [80,79,78,77,76,75,74,73,72,71,70,69,68,67,66,65,64,63,62,61,60,59,58,57,56,55,54,53,52,51,50,49,48,47,46,45,44,43,42,41,40,39,38,37,36,35,34,33,32,31,30,29,28,27,26,25,24,23,22,21,20],
    },
    /** Contains the single Standardization Table for a teacher */
    teacher: {
      scales: {
        RSK: [136,null,133,null,129,128,126,125,116,113,105,104,101,97,92,84,81,76,72,70,66,64,58,55,53,51,50,48,47,44,42,40,38,36,34,32,30,28,27,26,24,23,21,20,18,17,16,14,13,12,11,9,8,7,6,5,4,3,null,null,null],
        NZ: [92,null,null,null,62,61,null,58,57,56,55,53,52,50,49,48,46,44,42,41,39,38,35,33,32,30,28,26,25,23,20,19,18,17,15,14,12,11,10,9,8,7,6,5,4,null,3,null,2,null,1,null,null,null,null,0,null,null,null,null,null],
        WO: [160,null,159,null,151,150,140,139,138,137,135,133,129,null,127,126,123,121,119,null,118,116,114,113,111,109,108,106,104,102,100,98,96,95,93,90,89,88,87,85,84,83,82,79,77,73,71,null,70,69,67,66,65,64,63,62,61,null,60,null,56],
        DSM: [140,null,112,null,111,110,101,92,91,90,88,81,77,74,73,71,69,66,63,61,59,58,55,53,51,49,47,44,42,41,39,36,34,32,31,29,28,27,25,23,22,21,20,18,17,15,14,13,12,null,10,9,8,null,null,7,6,null,null,null,5],
        RR: [35,null,34,null,33,null,null,32,null,31,30,29,27,25,23,22,21,18,17,null,16,15,14,13,12,11,null,10,null,9,null,8,7,null,6,null,5,null,null,4,null,null,3,null,null,2,null,null,1,null,null,null,null,0,null,null,null,null,null,null,null],
        RD: [19,null,null,null,null,18,null,17,16,null,15,14,13,null,12,null,11,10,null,9,null,null,8,null,null,7,null,null,6,null,5,null,null,4,null,null,3,null,null,2,null,null,null,1,null,null,null,null,0,null,null,null,null,null,null,null,null,null,null,null,null],
        WSE: [48,null,null,null,40,39,null,38,37,36,35,34,32,30,28,26,25,24,23,22,21,20,19,18,17,null,16,15,null,14,13,12,null,11,10,null,9,8,null,7,null,6,null,null,5,null,4,null,3,null,2,null,null,1,null,null,null,null,0,null,null],
        NJ: [null,null,null,null,null,24,null,null,19,18,17,16,15,14,null,13,12,null,11,null,10,9,null,8,7,null,6,null,5,null,4,null,null,3,null,null,2,null,null,null,1,null,null,null,null,null,0,null,null,null,null,null,null,null,null,null,null,null,null,null,null],
        ST: [24,null,null,null,17,16,null,null,null,15,null,null,14,null,null,13,null,12,null,11,null,10,null,9,null,8,null,7,null,6,null,5,null,null,4,null,3,null,null,2,null,null,1,null,null,null,null,0,null,null,null,null,null,null,null,null,null,null,null,null,null],
        SZ: [32,null,28,null,null,26,null,null,25,23,22,null,null,21,null,20,null,19,18,null,17,16,15,null,14,13,12,null,11,10,9,null,8,7,6,null,5,null,4,3,null,2,null,null,1,null,null,null,null,0,null,null,null,null,null,null,null,null,null,null,null],
        WS: [24,null,null,null,16,15,null,14,null,null,13,null,12,11,10,null,9,8,null,7,null,6,null,5,null,4,null,null,3,null,null,2,null,null,null,1,null,null,null,null,null,null,0,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],
        US: [null,null,null,null,40,35,null,34,32,31,30,null,28,27,26,25,24,23,22,null,20,19,18,null,17,16,null,15,null,14,13,null,12,null,11,10,null,9,8,null,7,6,null,5,null,4,null,3,2,null,null,1,null,null,null,null,0,null,null,null,null],
      },
      Ten: [80,79,78,77,76,75,74,73,72,71,70,69,68,67,66,65,64,63,62,61,60,59,58,57,56,55,54,53,52,51,50,49,48,47,46,45,44,43,42,41,40,39,38,37,36,35,34,33,32,31,30,29,28,27,26,25,24,23,22,21,20]
    }
  },
  "6-11": {
    /** Contains the single Standardization Table for a parent */
    parent:  {
      scales: {
        RSK: [76,null,50,44,43,41,40,39,null,38,null,37,36,34,32,31,30,null,28,27,26,25,24,23,22,21,20,19,18,17,16,15,14,13,12,11,null,10,9,8,null,7,6,null,5,null,4,null,3,null,2,null,null,1,null,null,null,0,null,null,null,null],
        NZ: [96,null,61,60,59,57,56,55,null,54,52,50,49,48,46,44,43,41,40,38,36,35,34,32,31,30,29,27,26,25,23,22,21,19,18,17,16,15,14,13,12,11,10,9,8,null,7,6,null,5,null,4,null,3,null,2,null,1,null,null,0,null],
        SR: [68,null,57,55,null,54,null,null,53,52,51,48,45,43,41,40,39,38,37,35,34,33,31,29,28,27,26,25,23,22,21,20,19,18,17,16,15,14,13,12,11,null,10,9,8,7,6,null,5,null,4,3,null,2,1,null,null,null,0,null,null,null],
        WO: [243,null,221,207,null,null,206,205,200,199,198,197,196,193,192,190,187,185,183,180,178,175,172,170,168,165,162,161,158,155,152,150,148,146,144,141,139,136,135,133,130,128,124,121,120,117,114,112,111,110,108,104,100,98,92,90,84,81,80,79,78,73],
        DSM: [136,null,null,77,76,74,73,72,68,null,67,66,62,61,59,58,56,55,53,51,50,49,47,46,44,42,41,40,38,37,36,34,33,31,30,29,27,26,25,23,22,20,19,18,17,16,14,null,12,11,null,10,9,8,7,6,5,3,2,null,0,null],
        RR: [36,null,26,null,null,22,null,21,null,19,18,17,null,16,15,14,null,13,null,12,11,null,null,10,null,9,null,8,null,7,null,null,6,null,5,null,4,null,null,3,null,null,null,2,null,null,null,1,null,null,null,null,null,0,null,null,null,null,null,null,null,null],
        RD: [null,null,null,null,24,null,null,null,16,null,15,14,null,13,null,12,null,11,null,null,10,null,null,9,null,null,8,null,7,null,null,6,null,null,5,null,null,null,4,null,null,3,null,null,2,null,null,null,null,1,null,null,null,null,0,null,null,null,null,null,null,null],
        WSE: [52,null,33,29,null,28,null,27,26,25,null,24,null,23,null,22,null,21,20,null,19,18,null,17,16,15,null,14,13,null,12,11,null,10,null,9,null,8,7,null,6,null,5,null,4,null,null,3,null,2,null,null,1,null,null,null,0,null,null,null,null,null],
        NJ: [null,null,24,17,null,null,16,15,null,14,13,null,12,11,null,10,null,9,null,8,null,null,7,null,6,null,5,null,null,4,null,null,3,null,null,2,null,null,null,1,null,null,null,null,null,0,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],
        ST: [20,null,18,null,17,null,null,16,null,15,null,null,14,null,13,null,null,12,null,11,null,null,10,null,null,9,null,8,null,null,7,null,null,6,null,null,5,null,4,null,null,3,null,2,null,null,1,null,null,null,null,0,null,null,null,null,null,null,null,null,null,null],
        SZ: [32,null,null,29,28,null,27,26,25,null,24,23,22,null,21,20,19,18,null,17,16,null,15,null,14,null,13,12,null,11,null,10,null,9,null,8,null,7,null,6,null,5,null,null,4,null,3,null,null,2,null,null,1,null,null,null,0,null,null,null,null,null],
        WS: [24,null,null,17,16,null,14,null,13,null,12,null,11,null,10,null,null,9,null,8,null,7,null,6,null,5,null,null,4,null,null,null,3,null,null,2,null,null,null,1,null,null,null,null,null,null,0,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],
        UW: [38,null,37,36,null,35,34,33,null,32,31,30,29,28,null,27,26,25,24,23,22,21,20,19,null,18,17,16,null,15,14,13,12,null,11,10,null,9,null,8,7,null,6,null,5,null,4,3,null,null,2,null,null,1,null,null,null,0,null,null,null,null],
      },
      Ten: [81,80,79,78,77,76,75,74,73,72,71,70,69,68,67,66,65,64,63,62,61,60,59,58,57,56,55,54,53,52,51,50,49,48,47,46,45,44,43,42,41,40,39,38,37,36,35,34,33,32,31,30,29,28,27,26,25,24,23,22,21,20],
    },
    /** Contains the single Standardization Table for a teacher */
    teacher: {
      scales: {
        RSK: [76,null,63,null,59,null,58,57,52,49,45,44,42,41,39,38,36,35,34,32,31,30,29,27,26,24,23,22,21,19,18,16,15,14,13,12,11,10,9,null,8,7,6,null,5,4,null,3,null,2,null,1,null,null,null,0,null,null,null,null,null,null],
        NZ: [96,null,78,null,59,null,58,53,52,51,44,null,43,41,39,37,35,33,31,29,27,25,24,22,20,18,17,16,14,13,12,11,10,null,8,7,6,5,null,4,null,3,null,2,null,1,null,null,null,null,0,null,null,null,null,null,null,null,null,null,null,null],
        SR: [68,null,null,56,null,55,54,53,50,null,49,47,45,43,41,39,37,35,34,33,31,30,27,26,24,22,21,19,17,16,15,14,null,12,11,10,8,7,6,5,null,4,3,null,2,1,null,null,null,0,null,null,null,null,null,null,null,null,null,null,null,null],
        WO: [243,null,217,214,null,213,212,209,206,205,204,202,200,197,194,191,190,187,185,183,180,177,174,171,167,165,163,160,158,155,153,150,148,144,142,139,137,135,132,130,128,126,123,121,119,117,115,113,111,109,107,106,105,104,103,102,101,100,99,null,89,88],
        DSM: [96,null,null,95,94,90,89,83,78,76,74,69,67,65,64,61,59,56,54,53,50,47,44,42,40,38,36,34,32,30,27,26,24,23,21,20,19,17,16,15,14,12,11,10,9,8,7,6,null,5,4,null,3,null,null,2,null,1,null,null,0,null],
        RR: [null,null,36,null,null,31,30,27,26,24,23,22,21,20,19,18,null,17,16,14,null,13,12,null,11,10,null,9,8,null,7,null,6,null,5,null,4,null,3,null,2,null,null,null,1,null,null,null,null,null,null,0,null,null,null,null,null,null,null,null,null,null],
        RD: [24,null,19,null,null,null,17,null,null,16,15,14,13,null,null,12,11,null,10,null,9,8,null,7,null,6,null,null,5,null,4,null,3,null,null,2,null,null,null,1,null,null,null,null,null,null,0,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],
        WSE: [null,null,52,null,null,40,39,38,34,33,32,31,30,28,27,null,26,25,null,24,23,22,21,20,19,17,16,15,null,14,13,12,null,11,10,9,8,null,7,null,6,null,5,null,4,null,3,null,2,null,1,null,null,null,0,null,null,null,null,null,null,null],
        NJ: [24,null,23,18,null,17,null,16,15,14,null,13,12,11,9,null,8,null,7,null,6,null,5,null,4,null,3,null,null,2,null,null,null,1,null,null,null,null,null,null,null,0,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],
        ST: [null,null,20,null,19,null,14,13,null,null,12,null,11,null,10,null,null,9,null,8,null,7,null,6,null,5,null,null,4,null,null,null,3,null,null,2,null,null,1,null,null,null,null,null,null,0,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],
        SZ: [32,null,31,null,25,null,null,24,null,22,null,21,20,19,18,17,16,15,14,null,13,12,11,10,null,9,8,null,7,6,null,5,null,4,null,null,3,null,2,null,null,1,null,null,null,null,null,0,null,null,null,null,null,null,null,null,null,null,null,null,null,null],
        WS: [null,null,null,null,24,null,null,14,null,13,12,11,10,null,9,8,null,7,6,null,5,null,4,null,3,null,null,2,null,null,1,null,null,null,null,null,null,null,0,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],
        UW: [44,null,43,null,39,null,38,null,34,null,null,33,32,null,null,28,null,27,null,23,null,22,18,null,17,null,16,12,null,null,11,null,10,null,6,null,null,5,4,null,null,null,null,0,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],
      },
      Ten: [81,80,79,78,77,76,75,74,73,72,71,70,69,68,67,66,65,64,63,62,61,60,59,58,57,56,55,54,53,52,51,50,49,48,47,46,45,44,43,42,41,40,39,38,37,36,35,34,33,32,31,30,29,28,27,26,25,24,23,22,21,20],
    }
  },
  "12-18": {
    /** Contains the single Standardization Table for a parent */
    parent:  {
      scales: {
        RSK: [76,null,65,55,54,48,null,null,47,46,45,44,43,40,38,37,36,35,33,32,31,30,29,28,27,25,24,23,22,21,20,19,18,17,16,15,14,null,13,12,11,10,null,9,null,8,7,null,null,6,null,5,null,4,null,null,3,2,null,null,1,0],
        NZ: [96,null,73,62,null,61,60,59,57,56,53,52,47,45,43,41,39,38,37,35,34,32,31,29,28,27,25,24,23,22,21,19,18,17,16,15,null,13,12,10,9,null,8,7,null,6,5,null,4,null,3,null,2,null,1,null,null,0,null,null,null,null],
        SR: [68,null,52,null,null,50,49,44,43,42,41,null,40,38,35,34,33,32,31,30,29,27,26,25,23,22,21,20,19,18,17,16,null,15,14,13,12,11,10,9,8,7,null,6,5,null,4,null,3,null,null,2,null,1,null,null,0,null,null,null,null,null],
        WO: [243,null,223,null,218,217,216,213,208,206,205,202,196,191,188,186,184,183,181,179,176,174,172,169,167,165,163,160,158,156,153,150,149,146,143,141,139,137,135,133,130,127,125,122,121,118,116,113,110,108,105,104,101,99,null,98,97,94,93,86,85,84],
        DSM: [136,null,101,86,null,85,81,80,78,72,68,65,64,62,60,58,57,56,53,52,50,48,46,45,43,42,41,39,38,36,35,34,32,31,30,28,27,25,24,23,22,21,19,18,17,16,14,13,null,12,11,null,9,8,null,7,5,4,null,2,1,0],
        RR: [36,null,null,25,null,24,23,22,21,20,19,18,null,17,null,16,15,null,14,13,null,12,null,11,null,10,null,9,null,8,null,7,null,null,6,null,5,null,null,4,null,null,3,null,null,null,2,null,null,null,1,null,null,null,null,0,null,null,null,null,null,null],
        RD: [null,null,24,null,null,19,18,16,null,15,null,14,13,null,12,null,11,10,null,null,9,null,null,8,null,null,7,null,null,6,null,5,null,null,4,null,null,3,null,null,null,2,null,null,null,1,null,null,null,null,null,0,null,null,null,null,null,null,null,null,null,null],
        WSE: [52,null,37,36,null,35,34,33,32,31,30,29,28,27,26,25,24,23,null,22,21,20,null,19,18,17,null,16,15,null,14,null,13,12,null,11,10,null,9,null,8,7,null,6,null,5,null,null,4,null,null,3,null,2,null,1,null,null,0,null,null,null],
        NJ: [24,null,null,null,18,null,17,16,14,13,12,11,10,9,null,8,null,7,null,null,6,null,5,null,null,4,null,null,3,null,null,2,null,null,null,1,null,null,null,null,null,null,0,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],
        ST: [null,null,15,null,null,null,14,null,null,13,null,12,null,null,null,11,null,10,null,null,9,null,null,8,null,null,null,7,null,6,null,5,null,null,4,null,3,null,null,2,null,null,null,null,1,null,null,null,null,null,0,null,null,null,null,null,null,null,null,null,null,null],
        SZ: [32,null,29,null,26,null,25,null,24,23,22,null,21,20,19,null,18,17,16,null,null,15,14,null,13,null,12,null,11,null,10,null,null,9,8,null,7,null,6,null,5,null,null,4,null,3,null,2,null,null,null,1,null,null,null,null,0,null,null,null,null,null],
        WS: [24,null,20,null,18,null,17,null,16,15,14,13,12,11,null,10,null,9,null,8,null,7,null,null,6,null,5,null,null,4,null,3,null,null,2,null,null,1,null,null,null,null,null,null,0,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],
        UW: [null,null,44,33,32,31,30,null,29,28,27,null,26,null,25,24,null,23,22,21,20,19,18,17,null,16,15,14,null,13,null,12,11,null,10,9,null,8,null,7,6,null,5,null,4,null,3,null,2,null,null,1,null,null,null,null,0,null,null,null,null,null],
      },
      Ten: [81,80,79,78,77,76,75,74,73,72,71,70,69,68,67,66,65,64,63,62,61,60,59,58,57,56,55,54,53,52,51,50,49,48,47,46,45,44,43,42,41,40,39,38,37,36,35,34,33,32,31,30,29,28,27,26,25,24,23,22,21,20],
    },
    /** Contains the single Standardization Table for a teacher */
    teacher: {
      scales: {
        RSK: [76,null,null,null,58,null,57,null,56,55,53,52,null,50,49,46,45,44,42,41,39,37,35,34,32,30,29,27,25,23,22,21,19,18,16,15,14,13,12,11,10,9,8,7,6,5,null,4,3,null,2,null,null,1,null,null,null,null,null,0,null,null],
        NZ: [96,null,81,null,78,77,70,69,68,67,63,56,55,52,46,44,38,35,32,29,26,23,21,19,17,15,13,11,10,9,8,null,6,5,4,null,3,null,2,null,1,null,null,null,null,0,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],
        SR: [68,null,null,52,null,51,48,46,null,45,44,43,42,41,40,39,37,36,35,33,32,30,28,26,24,23,21,20,19,17,16,14,13,12,null,10,8,6,5,null,4,2,null,1,null,null,null,null,0,null,null,null,null,null,null,null,null,null,null,null,null,null],
        WO: [243,null,219,210,null,209,206,203,201,200,197,196,195,194,191,189,187,186,184,182,178,176,173,170,167,165,162,158,156,154,152,150,148,146,143,141,139,137,134,132,130,128,125,123,121,120,118,116,114,112,110,108,107,106,104,102,101,100,null,null,99,91],
        DSM: [136,null,99,98,97,89,88,80,78,76,75,74,73,69,68,65,63,59,57,54,52,50,47,44,41,39,37,34,33,30,28,27,25,23,22,21,19,17,16,14,13,12,11,10,9,8,7,6,5,null,4,null,3,null,2,null,1,null,null,0,null,null],
        RR: [null,null,36,null,null,null,null,25,null,null,24,null,23,null,21,19,18,null,17,16,15,14,null,13,12,11,10,9,null,8,null,7,6,null,5,null,4,null,null,3,null,2,null,null,1,null,null,null,null,0,null,null,null,null,null,null,null,null,null,null,null,null],
        RD: [24,null,19,17,null,null,16,null,null,null,15,null,14,null,null,13,12,null,11,10,9,null,8,7,null,6,null,5,null,4,null,null,3,null,null,2,null,null,1,null,null,null,null,null,0,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],
        WSE: [null,null,52,null,40,38,37,36,null,35,null,34,33,32,31,30,null,29,28,27,26,25,24,23,21,20,19,18,17,16,15,14,13,12,11,null,10,9,8,7,null,6,5,null,null,4,3,null,null,2,null,null,null,1,null,null,null,null,0,null,null,null],
        NJ: [24,null,23,22,null,21,null,20,null,18,17,16,15,14,13,11,10,8,6,5,null,4,null,3,null,2,null,null,null,1,null,null,null,null,null,null,null,null,0,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],
        ST: [null,null,20,null,null,17,null,15,null,14,null,13,12,11,10,9,null,8,7,null,6,null,null,5,4,null,null,3,null,2,null,null,null,1,null,null,null,null,null,null,null,0,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],
        SZ: [32,null,null,null,26,null,25,null,24,null,23,21,20,19,18,16,null,15,14,13,12,11,null,10,9,8,7,6,null,5,null,4,3,null,null,2,null,null,null,1,null,null,null,null,0,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],
        WS: [24,null,23,22,null,21,19,18,17,null,16,15,null,13,12,9,8,null,7,null,5,4,null,3,null,2,null,1,null,null,null,null,null,null,null,null,0,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],
        UW: [null,null,44,null,43,39,38,null,null,34,null,33,32,null,29,null,null,28,null,27,24,23,null,22,21,null,17,null,16,null,12,null,11,null,10,6,null,5,4,null,null,null,null,0,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],
      },
      Ten: [81,80,79,78,77,76,75,74,73,72,71,70,69,68,67,66,65,64,63,62,61,60,59,58,57,56,55,54,53,52,51,50,49,48,47,46,45,44,43,42,41,40,39,38,37,36,35,34,33,32,31,30,29,28,27,26,25,24,23,22,21,20],
    }
  }
}



export default ALL_STANDARDIZATION_TABLES