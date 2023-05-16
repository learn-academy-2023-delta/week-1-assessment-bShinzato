// ASSESSMENT 1: Coding Practical Questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Pseudo coding your process is required.

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in two strings and determines which of the two strings has more characters. Use the two sets of test variables provided.

// Pseudo code:

// Set one:
const fruit1 = "apple"
const fruit2 = "banana"
// Expected outcome: "banana"

// Set two:
const fruit3 = "cherry"
const fruit4 = "kiwi"
// Expected outcome: "cherry"

// --------------------1) Create a function that takes in a number and determines if the given number is below boiling point, at boiling point, or above boiling point. Boiling point is 212 degrees Fahrenheit. Use the test variables provided below.

// Pseudo code:
// 1. Create a function called number.
    // 1a. The function will have 2 parameters (num1, num2).
    // 1b. Create a let variable named num2 to set the given value of the boiling point. Thus, stops from typing in 212 multiple times within each argument.
// 2. Use a conditional to determine if the number is below, equal to, or above boiling point.
    // 2a. Use Relational Operators for comparison between the parameters.
    // 2b. With the conditional we will see if num1 is below, equal to, or above num2.
    // 2c. Use return to output a statement with string interpolation.
    // 2d. Have a catch all conditional.
// 3. Invoke or call the function and check with our provided variables given.

const temperature1 = 42
// Expected output: "42 is below boiling point"

const temperature2 = 350
// Expected output: "350 is above boiling point"

const temperature3 = 212
// Expected output: "212 is at boiling point"

let num2 = 212
const number = (num1,num2) => {
    if (num1 < num2) {
        return `${num1} is below boiling point`
    } else if (num1 > num2) {
        return `${num1} is above boiling point`
    } else if (num1 === num2) {
        return `${num1} is at boiling point`
    } else {
        return "Something went wrong."
    }
}

console.log(number(temperature1, num2)) // 42 is below boiling point
console.log(number(temperature2, num2)) // 350 is above boiling point
console.log(number(temperature3, num2)) // 212 is at boiling point

// --------------------2) Create the code that will combine the two arrays and return the length using the test variables provided below.

// Pseudo code:
// 1. Use built-in methods to combine the two arrays within the argument.
// 2. Accessor or getter method .concat() on the first variable name.
    // 2a. Within the parenthesis of .concat() insert second variable name.
// 3. Use .length after to obtain the length from the merged array.
// 4. Invoke the code with the provided variables to check.

const padres1984WorldSeriesRuns = [2, 5, 2, 2, 4]
const padres1998WorldSeriesRuns = [6, 3, 5, 3]
// Expected output: 9

console.log(padres1984WorldSeriesRuns.concat(padres1998WorldSeriesRuns).length) // 9

// --------------------3) Create the code that will reverse the letters of a string using the test variable provided below.

// Pseudo code:
// 1. Use built in methods to mutate the string to an array within the argument.
// 2. Turn the string into an array with .split(" "). The quotations with the space adds a space between each word.
// 3. Use the setter method .reverse() after .split(" ") within the argument. This will reserve the array.
// 4. Use .join("") after .reverse() within the argument. This will turn the array back into a string. In addition, the use of quotations without a space will group the characters without a comma.
// 5. Invoke the code and check.

const currentCohort = "Delta 2023"
// Expected output: "3202 atleD"

console.log(currentCohort.split("").reverse().join("")) // 3202 atleD

// --------------------4) Create the code that will return the last index of the given value from the array using the test variables provided below.

// Pseudo code:
// 1. Use getter method .lastIndexOf() to obtain the last value due to first/second given variable having two of the same element in the array.
    // 1a. Within the argument of .lastIndexOf() insert the given variable names.
// 2. Invoke the code and check. 

const numberOfConnections = [13, 34, 42, 5, 5, 10, 27, 42, 10]

const givenValue1 = 42
// Expected output: 7

const givenValue2 = 10
// Expected output: 8


console.log(numberOfConnections.lastIndexOf(givenValue1)) // 7
console.log(numberOfConnections.lastIndexOf(givenValue2)) // 8

// --------------------5) Create the code that will sort all the numbers in an array from largest to smallest. Use the test variables provided below.

// Pseudo code:
// 1. Use setter method .sort() to mutate the numberical values in the array.
// 2. Will use a and b for our parameters within our argument of the setter method due to comparison.
        // 2a. Within the .sort() argument use another set of () to notify action on our two parameters. 
        // 2b. Use the arrow function syntax for an implicit return.
        // 2c. Since we are looking for largest to smallest, we will use b - a to list accordingly.
// 3. Invoke the code with provided method and operators to check.

const sanDiegoSummerTemperatures = [79, 80, 72, 73, 82, 77, 76]
// Expected output: [82, 80, 79, 77, 76, 73, 72]

const sanDiegoWinterTemperatures = [59, 68, 62, 59, 66, 67, 66]
// Expected output: [68, 67, 66, 66, 62, 59, 59]

console.log(sanDiegoSummerTemperatures.sort((a, b) => b - a )) // [82, 80, 79, 77, 76, 73, 72]
console.log(sanDiegoWinterTemperatures.sort((a, b) => b - a )) // [68, 67 ,66 66, 62, 59, 59]