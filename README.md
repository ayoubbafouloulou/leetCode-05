
# Roman Numeral to Integer Converter
This is a JavaScript script that converts a Roman numeral string to its corresponding integer value.

The script defines a function romanToInt that takes a string representing a Roman numeral and returns its corresponding integer value. The function uses an object that maps each Roman numeral to its corresponding integer value, and iterates through the string from right to left, adding or subtracting the current value based on whether it is greater than or less than the previous value.

The script can be run in any JavaScript environment, such as a web browser console or a Node.js command prompt.

# Usage
To use the romanToInt function, simply include the script in your HTML file or Node.js application and call the function with a Roman numeral string as its argument:

```
const romanNumeral = 'MCMXCIV';
const integer = romanToInt(romanNumeral);

console.log(integer); // 1994

```
