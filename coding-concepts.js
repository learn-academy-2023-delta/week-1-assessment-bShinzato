// ASSESSMENT 1: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------INSTRUCTOR EXAMPLE: What will this log?
const colors = ["tangerine", "magenta", "lilac", "daffodil"]
// console.log(colors.push("indigo"))

// a) Your answer:
// b) Verify and explain: 

// --------------------1) What will this log?

const cohort = "LEARN 2023"
// console.log(cohort.length)

// a) Your answer: 10
// b) Verify and explain: Within the argument, the variable with .length will give us the number of characters thats within the quotations of the string.

// --------------------2) What will this log?

const greeting = "Hello World!"
// console.log(greeting[4])

// a) Your answer: o
// b) Verify and explain: The bracket notation after the variable is implying we are extracting the 4th index of the string. 

// --------------------3) What will this log?

const languages = ["JavaScript", "Ruby", "Python", "C++"]
const index = 1
// console.log(languages[index])

// a) Your answer: Ruby
// b) Verify and explain: Within the argument we are stating the arrays variable name. Afterwards, the bracket notation is pulling out the given variable provided. Thus, grabbing a specific value from the given array.

// --------------------4) What will this log?

const weekendDays = ["saturday", "sunday"]
// console.log(weekendDays.toUpperCase())

// a) Your answer: SATURDAY, SUNDAY
// b) Verify and explain: After veification TypeError: weekendDays.toUpperCase is not a function. I would assume the dot notation not working on the array because it has strings within it. Mutate the array into a string and use .join() and .toUpperCase() to fulfill my given answer; console.log(weekendDays.join().toUpperCase()).

// --------------------5) What will this log?

const dataTypes = ["number", "string", "Boolean", "undefined"]
// console.log(typeof dataTypes.length)

// a) Your answer: Number
// b) Verify and explain: Within the argument typeof signifies a primitive data type. Since there is .length after the variable name implies a number.
