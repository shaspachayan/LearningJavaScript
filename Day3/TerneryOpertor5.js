// Conditional (ternary) operator
// The conditional (ternary) operator is the only JavaScript operator that takes three operands: a condition followed by a question mark (?), then an expression to execute if the condition is truthy followed by a colon (:), and finally the expression to execute if the condition is falsy. This operator is frequently used as an alternative to an if...else statement.
// ternary operator

let age = 4;
let drink;

if (age >= 5) {
    drink = "coffee";
} else {
    drink = "milk";
}
console.log(drink); //->milk

// ternary operator / conditional operator

let age1 = 3;
let drink1 = age >= 5 ? "coffee" : "milk"; // the boolean value drink1 will be true or false if age will be greter than or equals to 5 >>>> if true then drink1 value will be coffee else milk. 
console.log(drink1); //->milk