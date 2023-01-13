// intro to arrays 
// Array is ordered collection of different types or similar types of items ( heterogeneous values). Array has a zerp based indexing.
// **Array is a reference data type(what is reference dt will be discussed in next codes. )

//================================================

// how to create arrays?

// let fruits = ["apple", "mango", "grapes"]; // string always maintioned in double invited...

// let numbers = [1, 2, 3, 4];

// let mixed = [1, 2, 2.3, "string", null, undefined];

// console.log(mixed); //-> [ 1, 2, 2.3, 'string', null, undefined ] 
// console.log(numbers); //-> [ 1, 2, 3, 4 ]
// console.log(fruits[2]); //-> grapes

//====================================================

let fruits = ["apple", "mango", "grapes"];
let obj = {}; // object literal is nothing but the term. Litteral means actual value, we make objects by {}, so anything in between it, seperted by quama((,)is object literal. // here obj is just a name, anything made with curly braces are object and anything between this braces are object literal.
// console.log(fruits);
// fruits[1] = "banana"; // replacing the values 
// console.log(fruits);
console.log(typeof fruits); //-> object // In js we will see many concept which is basically a object. Look at this , type of array is object, and if we see type of any object is also object.So how we will differtiate between them? That`s why Array.isArray(type---name ).
console.log(typeof obj); //-> object 
console.log(Array.isArray(fruits)); //-> true // details are in 26 th line
console.log(Array.isArray(obj)); //-> false
