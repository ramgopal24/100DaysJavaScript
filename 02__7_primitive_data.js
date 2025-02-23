//JavaScript has 7 primitive data types:
// 1. Number
// 2. String    
// 3. Boolean
// 4. Undefined
// 5. Null
// 6. Symbol
// 7. BigInt

// 1. Number
// Numbers can be integers or floating-point numbers.
// Example:
let age = 25;
let price = 12.5;

console.log(typeof age); // number
console.log(typeof price); // number


// 2. String
// Strings are sequences of characters enclosed in quotes.
// Example:
let name = "John";
let message = 'Hello, world!';

console.log(typeof name); // string
console.log(typeof message); // string


// 3. Boolean
// Booleans represent true or false values.
// Example: 
let isLoggedIn = true;
let isAdmin = false;

console.log(typeof isLoggedIn); // boolean
console.log(typeof isAdmin); // boolean


// 4. Undefined
// Undefined represents a variable that has been declared but not assigned a value.
// Example:
let unassignedVar;

console.log(typeof unassignedVar); // undefined


// 5. Null
// Null represents an empty or non-existent value.
// Example:
let emptyValue = null;

console.log(typeof emptyValue); // object
// Additional Notes:
// Why Does typeof null Return "object"?
// When JavaScript was first created, values were stored in memory as binary representations, and the data type of a value was determined by its tag (a few bits in the memory representation).

// Objects had a type tag of 000
// null was mistakenly given the same tag (000) as objects.
// Since typeof checks this tag, it incorrectly identifies null as an "object".

// Is It Fixed?
// No, because fixing this would break a lot of existing JavaScript code that relies on this behavior. 
// However, modern JavaScript developers use a better way to check for null:

//Correct Way to Check for Null:

if (emptyValue === null) {
    console.log('Value is null');
} else {
    console.log('Value is not null');
}   

//Additional Notes:
// What is Strict Type Checking in JavaScript?
// Strict type checking means comparing both the value and the data type of variables without allowing JavaScript to convert types automatically.

// This is done using the strict equality (===) and strict inequality (!==) operators.

// Loose vs. Strict Comparison// Loose comparison (==) converts the operands to a common type before comparison.
// Strict comparison (===) checks both value and type without conversion.

// Example:
let num = 10;
let str = '10';

console.log(num == str); // true (loose comparison)
console.log(num === str); // false (strict comparison)

//Additional Notes:
// What is "Allows Type Conversion" in JavaScript?
// When we say that JavaScript allows type conversion, we mean that JavaScript automatically converts one data type into another when needed.

// This process is called type coercion and happens in loose comparisons (==), mathematical operations, and when using JavaScript functions that expect a specific type.

//Additional Notes:

// Best Practice
// 🔹 Use explicit conversion (Number(), String(), Boolean()) to avoid unexpected bugs.
// 🔹 Avoid loose equality (==) unless necessary (e.g., null == undefined).
// 🔹 Remember that + favors strings, while -, *, / favor numbers.

//Symbols
//Symbols are unique and immutable data types.
// They are often used as property keys to avoid naming conflicts.
// Example:
let symbol1 = Symbol('key1');
let symbol2 = Symbol('key2');

console.log(symbol1 === symbol2); // false

// Note: Symbols are unique and immutable, so even if they have the same description, they are different.

//Additional Notes:
// What is "BigInt"?
// BigInt is a new data type introduced in ES2020.
// It is used to represent integers larger than 2^53 - 1.
// Example:
let bigInt = 123456789012345678901234567890n;

console.log(typeof bigInt); // bigint


