//JavaScript Hoisting refers to the process whereby the interpreter appears to move the declaration of functions, variables or classes to the top of their scope, prior to execution of the code.

// function printWord() {
//     console.log("This is printWord function!!");
// }
// printWord(); //This is printWord function!!


// now what if we call the function before making it??? what will happen? btw the dictionay meaning of hoist is 'raise' i.e. tule dhora!! 

// printWord(); //This is printWord function!!
// function printWord() {
//     console.log("This is printWord function!!");
// }

// No error and the similar output. What is happening and how it is happening , we will look in advanced portion, just remember it that it will happen at the time of function declaration!!

//------------------------------------------------------------------------------------

// printWord1(); //Cannot access 'printWord1' before initialization 
// const printWord1 = () => {
//     console.log("This is printWord function!!"); 
// }
// printWord1(); //Cannot access 'printWord1' before initialization 
// const printWord1 = function () {
//     console.log("This is printWord function!!"); // hoisting will not give op for arrow function and function expression
// }

//** * hoisting will not give op for arrow function and function expression

// when we make a varible i.e using var  and hoisting is done then the op will be shown undefined
console.log(example); //undefined
var example = "This is a example of var property , understand the name properly, what does varible means?? got it? Show the op"
console.log(example); // This is a example of var property , understand the name properly, what does varible means?? got it? Show the op

// in case of let and const it will not happen !! =>> The op will uncaught refernce error



