// Imports your SCSS stylesheet
//import './styles/index.css';

// 1) Takes an array of numbers and returns the sum of all elements using a for loop
const sumOfArray = (arr) => {
  
  //if the input is not an array or is empty, throw an error
  if (!Array.isArray(arr) || arr.length === 0) {
    throw new Error('Invalid input: Please provide a non-empty array of numbers.');
  }

  // check if all elements are numbers
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] !== 'number' || isNaN(arr[i])) {
      throw new Error('Invalid input: Please provide a non-empty array of numbers.');
    }
  }

  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
//=================================================================================================================

// 2) Reverses the input string and returns the reversed result using split, reverse, and join methods
const reverseString = (str) => {

  //if the input is not a string, throw an error
  if (typeof str !== 'string') {
    throw new Error('Invalid input: Please provide a valid string.');
  }

  return str.split('').reverse().join('');
}
//=================================================================================================================

//3) Takes an array of numbers and returns the largest number using Math.max method
const findMax = (arr) => {

  //if the input is not an array or is empty, throw an error
  if (!Array.isArray(arr) || arr.length === 0) {
    throw new Error('Invalid input: Please provide a non-empty array of numbers.');
  }

  // check if all elements are numbers
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] !== 'number' || isNaN(arr[i])) {
      throw new Error('Invalid input: Please provide a non-empty array of numbers.');
    }
  }

  return Math.max(...arr);
}
//=================================================================================================================

// 4) Counts the number of vowels in a given string and returns the count using filter, split, and includes methods
const countVowels = (str) => {

  //if the input is not a string, throw an error
  if (typeof str !== 'string') {
    throw new Error('Invalid input: Please provide a valid string.');
  }

  const vowels = 'aeiouAEIOU';
  return str.split('').filter(char => vowels.includes(char)).length; 
}
//=================================================================================================================

//5) Removes duplicate values from an array and returns a new array with unique values using Set
const purgeDuplicates = (arr) => {
  
  //if the input is not an array, throw an error
  if (!Array.isArray(arr)) {
    throw new Error('Invalid input: Please provide a valid array.');
  }
  return [...new Set(arr)];
}

module.exports = { sumOfArray, reverseString, findMax, countVowels, purgeDuplicates };


// (() => {
//   // Test cases for the functions
//   console.log(sumOfArray([1, 2, 3, 4, 5])); // Output: 15
//   console.log(reverseString("Hello")); // Output: "olleH"
//   console.log(findMax([10, 20, 30, 40, 50])); // Output: 50
//   console.log(countVowels("Hello World")); // Output: 3
//   console.log(purgeDuplicates([1, 2, 2, 3, 4, 4, 5])); // Output: [1, 2, 3, 4, 5]
// })();