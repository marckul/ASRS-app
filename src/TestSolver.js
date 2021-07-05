

const formSettings = {
  form70
}

class TestSolver {
  constructor() {
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
    
  }



  #properties = {
    ageGroup: undefined,
    fillingPerson: undefined,
    formType: undefined,
    questionNumber: undefined,
  };



  #template = {
    Age_2_5: {   

    },
    Age_6_11:{ 

    },
    Age_12_18:{ 

    }
  };



  #reverse = { 
    // GRUPA 6-11 i 12-18 ma taki sam układ skal i odwracalność różni się tylko interpretacja wyników pomiędzy tymi grupami wiekowymi
    form70: [1, 0, 1, 1, 1, 0, 1, 0, 0, 0, 0, 0, 1, 1, 0, 1, 0, 1, 1, 0, 
             1, 0, 0, 0, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 1, 
             0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 0, 1, 0, 0, 1, 0, 0, 0, 
             1, 0, 0, 0, 0, 0, 0, 0, 0, 0],

    form71: [0, 0, 1, 0, 1, 0, 0, 1, 1, 1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 
             0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 0, 
             0, 1, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 
             1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0]
  };
  


  #scales = { // 
    form70: { 
      RSK:     ["0", "2", "3", "4", "6", "12:18", "20:21", "23:24", "27:29", "31:32", "34:35", "36:37", "39", "42:43", "53:54", "48:51", "56", "60:62", "66"],
      NZ:     ["1", "7:11", "19", "25:26", "38", "40:41", "44:47", "52", "55", "59", "63:64", "68:69"],
      DSM:     ["0", "2:4", "7:10", "12:13", "15", "17:20", "25", "27:28", "37:42", "46:47", "49:50", "52:53", "55", "60", "63:64", "69"],
      RR:    ["3", "14", "23", "29", "39", "48", "50", "51", "60"],
      RD:    ["20", "22", "30", "32", "43"],
      WSE:     ["0", "2", "4", "12", "13", "15", "18", "35", "37", "42", "49", "53"],
      NJ:    ["5", "21", "41", "58", "52", "69"],
      ST:    ["10", "38", "46", "63", "64", "67"],
      SZ:    ["7:9", "19", "26", "47", "55", "59"],
      WS:    ["1", "11", "44:45", "65", "68"],
      US:    ["16", "24", "31", "33", "36", "54", "56:57", "61:62"]
    },

    form71: { 
      RSK:     ["2", "3", "7", "8", "11", "22", "27", "30", "31", "32", "38", "41", "42", "44", "54", "55", "60", "68", "69"],
      NZ:     ["1", "12", "16", "19", "20", "21", "23:26", "28", "37", "39", "45", "47:50", "53", "61", "62", "64", "66", "67"],
      SR:     ["0", "4:6", "15", "17", "29", "33:35", "43", "51", "56:57", "59", "65", "70"],
      DSM:     ["7:8", "10", "12", "14", "18:20", "22:23", "25", "27", "30:32", "36", "38", "41:42", "45", "47:50", "60", "62", "64", "66", "68:69"],
      RR:    ["2", "13", "18", "30", "44", "49", "63", "68:69"],
      RD:    ["17", "32:33", "36", "58", "65"],
      WSE:     ["3", "7:8", "10", "14", "27", "31", "38", "40:42", "54", "60"],
      NJ:    ["16", "19:20", "25", "57", "67"],
      ST:    ["45", "47", "52:53", "66"],
      SZ:    ["12", "21", "23", "39", "48", "50", "62", "64"],
      WS:    ["1", "24", "26", "28", "37", "61"],
      UW:     ["0", "4", "9", "15", "29", "33:34", "43", "46", "51", "56"],
    }
  };
  get scales() {
    return this.#scales
  };
}

//  ["RSK", "NZ", "DSM", "RR", "RD", "WSE", "NJ", "ST", "SZ", "WS", "US"]

export default TestSolver
