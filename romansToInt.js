function romanToInt(s) {
    // Define an object that maps Roman numerals to their corresponding integer values
    const romanNumerals = {
      'I': 1,
      'V': 5,
      'X': 10,
      'L': 50,
      'C': 100,
      'D': 500,
      'M': 1000
    };
    
    // Initialize the result variable to 0 and the previous value variable to 0
    let result = 0;
    let prevValue = 0;
    
    // Iterate through the string s from right to left
    for (let i = s.length - 1; i >= 0; i--) {
      // Get the integer value of the current Roman numeral
      const currentValue = romanNumerals[s[i]];
      
      // If the current value is greater than or equal to the previous value, add it to the result
      if (currentValue >= prevValue) {
        result += currentValue;
      } 
      // If the current value is less than the previous value, subtract it from the result
      else {
        result -= currentValue;
      }
      
      // Update the previous value variable to the current value
      prevValue = currentValue;
    }
    
    // Return the final result
    return result;
  }

  console.log(romanToInt('IVXLCDM'));
  










