// Imports your SCSS stylesheet
import './styles/index.css';

(() => {
// 1) Takes an array of numbers and returns the sum of all elements using a for loop
const sumOfArray = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  //if the input array is empty or not an array, throw an error
  if (arr.length === 0 || !Array.isArray(arr)) {
    throw new Error('Invalid input: Please provide a non-empty array of numbers.');
  }

  return sum;
}
//=================================================================================================================

// 2) Reverses the input string and returns the reversed result using split, reverse, and join methods
const reverseString = (str) => {

  //if the input is not a string, throw an error
  if (typeof str !== 'string' || str === null || str === undefined) {
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

  return Math.max(...arr);
}
//=================================================================================================================

// 4) Counts the number of vowels in a given string and returns the count using filter, split, and includes methods
const countVowels = (str) => {

  //if the input is not a string, throw an error
  if (typeof str !== 'string' || str === null || str === undefined) {
    throw new Error('Invalid input: Please provide a valid string.');
  }

  const vowels = 'aeiouAEIOU';
 return str.split('').filter(char => vowels.includes(char)).length; 
}

})();