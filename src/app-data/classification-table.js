

/** Contains all Classification Tables 
 * 
 */
const ALL_CLASSIFICATION_TABLES0 = {
  "2-5": {
    parent:  {
      Ten: [80, 69, 64, 59, 39],
      classification: ["Bardzo wysoki", "Wysoki", "Podwyższony", "Przeciętny", "Niski"]
    },
    teacher: {
      Ten: [80, 69, 64, 59, 39],
      classification: ["Bardzo wysoki", "Wysoki", "Podwyższony", "Przeciętny", "Niski"]
    }
  },
  "6-11": {
    parent:  {
      Ten: [81, 69, 64, 59, 39],
      classification: ["Bardzo wysoki", "Wysoki", "Podwyższony", "Przeciętny", "Niski"]
    },
    teacher: {
      Ten: [81, 69, 64, 59, 39],
      classification: ["Bardzo wysoki", "Wysoki", "Podwyższony", "Przeciętny", "Niski"]
    }
  },
  "12-18": {
    parent:  {
      Ten: [81, 69, 64, 59, 39],
      classification: ["Bardzo wysoki", "Wysoki", "Podwyższony", "Przeciętny", "Niski"]
    },
    teacher: {
      Ten: [81, 69, 64, 59, 39],
      classification: ["Bardzo wysoki", "Wysoki", "Podwyższony", "Przeciętny", "Niski"]
    }
  }
}

/** Contains Classification Table that let to classify patient based on Ten value (standardized value)
 *  VALUES ARE SAME FOR ALL TEST VARIANTS (Very high ("Bardzo wysoki") result is more than maximum for high result ("Wysoki"))
 * 
 */
const CLASSIFICATION_TABLE = {
  Ten: [81, 69, 64, 59, 39], // sic!
  classification: ["Bardzo wysoki", "Wysoki", "Podwyższony", "Przeciętny", "Niski"]
}

export default CLASSIFICATION_TABLE