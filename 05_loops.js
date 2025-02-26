//Loops in JavaScript


//Loops help us execute repetitive tasks efficiently. Instead of writing the same code multiple times, 
// we use loops to iterate over arrays, objects, or a set of instructions.

//for loop

// for (initialization; condition; increment) {  
//     // Code to repeat  
// }

for (let i = 0; i < 5; i++) {
    console.log("Hello, World!");
}


let fruits = ["Apple", "Banana", "Cherry"];

for (let i = 0; i < fruits.length; i++) {  
    console.log(fruits[i]);  
}


//while Loop (Best for Unknown Repetitions)

let count = 0;
while (count < 5) {
    console.log("Hello, World!");
    count++;
}

//do-while Loop (Runs at Least Once)
let number = 3;

do {  
    console.log("While Loop");
} while (number <= 2);

console.log("You entered: " + number);


//forEach Loop
let colors = ["Red", "Green", "Blue"];

colors.forEach(function(color) {  
    console.log(color);  
})