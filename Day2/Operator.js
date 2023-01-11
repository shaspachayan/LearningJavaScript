// typeof operator 

// data types (primitive data types)
// string "shaspa"
// number 2, 4, 5.6 
//------------------------
// booleans 
// undefined
// null 
// BigInt
// Symbol

// let age = 22; 
// let firstName = "shaspa";

// console.log(typeof age);

// 22 -> "22"
// convert number to string. 
// age = age + "";
// console.log(typeof(age)); "22"


//  convert string to number. 

let myStr = +"34";
console.log(typeof myStr); // number

// let age = "18";
// age = Number(age);
// console.log(typeof age);



//-------------------------------------------


// string concatenation 

let string1 = "17";
let string2 = "10";

let newString = +string1 + +string2;
console.log(typeof newString);


//-------------------------------------------
// template string 
let age = 22;
let firstName = "shaspa"

// "my name is shaspa and my age is 22 "
// let aboutMe = "my name is " + firstName + " and my age is " + age; 

let aboutMe = `my name is ${firstName} and my age is ${age}`

console.log(aboutMe);
