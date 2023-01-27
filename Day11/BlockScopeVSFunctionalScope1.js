// block scope vs function scope 


// {
//     // this is a scope, that means whatever lies or separeted by 2nd bracket is called scope
// }

// let and const are block scope

// if we made anything using let and const then we can call it block scope. It cant be acessed outside of the scope.... If no scope is created then the program will work as a scope... because every js code itself is a scope. We make scope to divide the code from remaining of the code.



// {
//     const x = 3;
// }
// console.log(x); //ReferenceError: x is not defined

// {
//     let x = 3;
// }
// console.log(x); //ReferenceError: x is not defined



// var is function scope

// {
//     var x = 3;
// }
// console.log(x); //3



// if(true){
//     var firstName = "Shaspa";
//     console.log(firstName);
// }

// console.log(firstName);

// function myApp() {
//     if (true) {
//         var firstName = "Shaspa";
//         console.log(firstName);
//     }

//     if (true) {
//         console.log(firstName);
//     }
//     console.log(firstName);
// }

// myApp();