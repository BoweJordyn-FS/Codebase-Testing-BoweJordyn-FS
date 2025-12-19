const {sumOfArray, reverseString, findMax, countVowels, purgeDuplicates} = require('./index');

// SumOfArray Test Cases
describe('sumOfArray', () => {
    test('returns the sum of positive integers', () => {
        expect(sumOfArray([1, 2, 3, 4])).toBe(10);
    });
    test('returns the sum of larger positive numbers', () => {
        expect(sumOfArray([10, 20, 30])).toBe(60);
    });
    test('returns the sum of negative numbers', () => {
        expect(sumOfArray([-1, -2, -3, -4])).toBe(-10);
    });
    test('handles decimal numbers', () => {
        expect(sumOfArray([1.5, 2.5, 3.5])).toBe(7.5);
    });
    test('handles mixed positive and negative numbers', () => {
        expect(sumOfArray([1, -5, 4, -9])).toBe(-9);
    });
    test('handles single element array', () => {
        expect(sumOfArray([5])).toBe(5);
    });    });

    //ERROR HANDLING
    test('throws error for empty array', () => {
        expect(() => sumOfArray([])).toThrow(Error);
    });
    test('throws error for NaN input', () => {
        expect(() => sumOfArray(NaN)).toThrow(Error);
    });
    test('throws error for null input', () => {
        expect(() => sumOfArray(null)).toThrow(Error);
    });
    test('throws error for undefined input', () => {
        expect(() => sumOfArray(undefined)).toThrow(Error);
    });
    test('throws error for object input', () => {
        expect(() => sumOfArray({})).toThrow(Error);
    });
    test('throws error for array with string numbers', () => {
        expect(() => sumOfArray([1, 2, '3', 4])).toThrow(Error);
    });
    test('throws error for array with non-numeric strings', () => {
        expect(() => sumOfArray(['one', 2, 3, 4])).toThrow(Error);
       });


//=================================================================================================================


// ReverseString Test Cases
describe('reverseString', () => {
    test('returns the reversed string', () => {
        expect(reverseString('hello')).toBe('olleh');
    });
    test('return the reversed string with numbers', () => {
        expect(reverseString('12345')).toBe('54321');
    });
    test('returns the reversed string with special characters', () => {
        expect(reverseString('!@#$%')).toBe('%$#@!');
    });
    test('returns the reversed string with spaces', () => {
        expect(reverseString('hello world')).toBe('dlrow olleh');
    });
    test('returnd the reversed string with a single character', () => {
        expect(reverseString('a')).toBe('a');
    });

    //ERROR HANDLING
    test('throws error for null input', () => {
        expect(() => reverseString(null)).toThrow(Error);
    });
    test('throws error for undefined input', () => {
        expect(() => reverseString(undefined)).toThrow(Error);
    });
    test('throws error for number input', () => {
        expect(() => reverseString(12345)).toThrow(Error);
    });
    test('throws error for array input', () => {
        expect(() => reverseString([1, 2, 3, 4])).toThrow(Error);
    });
    test('throws error for object input', () => {
        expect(() => reverseString({})).toThrow(Error);
    });

});
//=================================================================================================================

// FindMax Test Cases
describe('findMax', () => {
    test('returns the maximum value in an array of numbers', () => {
        expect(findMax([1, 2, 3, 4, 5])).toBe(5);
    });
    test('returns the maximum value in an array of negative numbers', () => {
        expect(findMax([-1, -2, -3, -4, -5])).toBe(-1);
    });
    test('returns the maximum value in an array with mixed positive and negative numbers', () => {
        expect(findMax([1, -2, 3, -4, 5])).toBe(5);
    });
    test('returns the maximum value in an array with decimal numbers', () => {
        expect(findMax([1.5, 2.5, 3.5, 4.5, 5.5])).toBe(5.5);
    });

    //ERROR HANDLING
    test('throws error for empty array', () => {
        expect(() => findMax([])).toThrow(Error);
    });
    test('throws error for NaN input', () => {
        expect(() => findMax(NaN)).toThrow(Error);
    });
    test('throws error for null input', () => {
        expect(() => findMax(null)).toThrow(Error);
    });
     test('throws error for object input', () => {
        expect(() => findMax({})).toThrow(Error);
    });
    test('throws error for array with string numbers', () => {
        expect(() => findMax([1, 2, '3', 4])).toThrow(Error);
    });
    test('throws error for array with non-numeric strings', () => {
        expect(() => findMax(['one', 2, 3, 4])).toThrow(Error);
       });
});
//=================================================================================================================
// CountVowels Test Cases
describe('countVowels', () => {
    test('returns the count of vowels in a string', () => {
        expect(countVowels('hello')).toBe(2);
    });
    test('returns the count of vowels in a string with special characters', () => {
        expect(countVowels('h!e@l#l$lo$')).toBe(2);
    });
    test('returns the count of vowels in a string with numbers', () => {
        expect(countVowels('h1e2l3l4o5')).toBe(2);
    });
    test('returns the count of vowels in a string with mixed case', () => {
        expect(countVowels('HeLlO')).toBe(2);
    });

    //ERROR HANDLING
    test('throws error for null input', () => {
        expect(() => countVowels(null)).toThrow(Error);
    });
    test('throws error for undefined input', () => { 
        expect(() => countVowels(undefined)).toThrow(Error);
    });
    test('throws error for number input', () => {
        expect(() => countVowels(12345)).toThrow(Error);
    });
    test('throws error for array input', () => {
        expect(() => countVowels([1, 2, 3, 4])).toThrow(Error);
    });
    test('throws error for object input', () => {
        expect(() => countVowels({})).toThrow(Error);
    });
});
//=================================================================================================================

// PurgeDuplicates Test Cases
describe('purgeDuplicates', () => {
    test('returns an array with no duplicates from a mixed array', () => {
        expect(purgeDuplicates([1, 2, 3, 4, 5, 1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
    });
    test('returns an array with no duplicates', () => {
        expect(purgeDuplicates([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
    });
    test('returns an array of strings', () => {
        expect(purgeDuplicates(['a', 'b', 'a', 'c'])).toEqual(['a', 'b', 'c']);
    });
    test('returns an array of with all duplicates', () => {
        expect(purgeDuplicates(['a', 'a', 'a', 'a'])).toEqual(['a']);
    });

    //ERROR HANDLING
    test('throws error for null input', () => {
        expect(() => purgeDuplicates(null)).toThrow(Error);
    });
    test('throws error for undefined input', () => {
        expect(() => purgeDuplicates(undefined)).toThrow(Error);
    });
    test('throws error for number input', () => {
        expect(() => purgeDuplicates(12345)).toThrow(Error);
    });
    test('throws error for object input', () => {
        expect(() => purgeDuplicates({})).toThrow(Error);
    });
});