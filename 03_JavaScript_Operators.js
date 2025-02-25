//Operators allow us to manipulate data and perform calculations.

//Arithmetic Operators (for calculations)
//Assignment Operators (assign values)
//Comparison Operators (compare values, return true or false)
//Logical Operators (combine multiple conditions)

//Arithmetic Operators
let a = 10, b = 5;
console.log(a + b); // 15 (Addition)
console.log(a - b); // 5 (Subtraction)
console.log(a * b); // 50 (Multiplication)
console.log(a / b); // 2 (Division)
console.log(a % b); // 0 (Remainder)
console.log(a ** b); // 10^5 = 100000 (Exponentiation)

//Assignment Operators
let x = 10;
x += 5; // x = x + 5
console.log(x); // 15

//Comparison Operators
let c = 10, d = 5;
console.log(c == d); // false (loose equality)
console.log(c === d); // false (strict equality)

//Additional Notes:
// What is "Loose Equality (==) in JavaScript"?
// Loose equality (==) is a comparison operator that converts the operands to a common type before comparison.

// This means that if the operands are different types, JavaScript will try to convert them to the same type before comparing.

// Example:
let str1 = "10";
let num1 = 10;

console.log(str1 == num1); // true (loose equality)
console.log(str1 === num1); // false (strict equality)  

// 1. Loose Equality Helps with null and undefined
// 2. Loose Equality Handles Type Conversion
// 3. Loose Equality Helps with Boolean Conversions

// Use === for most comparisons to avoid unintended type conversion.
// Only use == when specifically handling null/undefined or user input conversion.



//Logical Operators
let e = true, f = false;
console.log(e && f); // false (AND)
console.log(e || f); // true (OR)
console.log(!e); // false (NOT)

