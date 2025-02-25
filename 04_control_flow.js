//Control Flow in JavaScript (if-else & switch)

//if-else
let age = 19;
if (age >= 18) {
    console.log("You are an adult");
} else {
    console.log("You are a minor");
}

//if-else-if
let score = 70.1;
if (score >= 90) {
    console.log("You got an A");
} else if (score >= 80) {
    console.log("You got a B");
} else if (score >= 70) {
    console.log("You got a C");
} else {
    console.log("You got a F");
}

//switch
let day = "Sunday";
switch (day) {
    case "Monday":
        console.log("It's the first day of the week");
        break;
    case "Tuesday":
        console.log("It's the second day of the week");
        break;
    case "Sunday":
        console.log("It's a Holiday");
        break;
    default:
        console.log("It's not a valid day");
}

//ternary operator
let num = 6;
let isEven1 = (num % 2 === 0) ? "Even" : "Odd";
console.log(isEven1);




