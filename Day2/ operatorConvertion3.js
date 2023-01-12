// typeof operator 

// data types (primitive data types)
// string "shaspa"
// number 2, 4, 5.6 
//------------------------
// booleans 
// undefined -> a variable that has benn not assigned a value. zero and undefined is not same, because zero will be value if it assigned. In jS undefined is a object[typeof undefined = object]. It is a bug present in lang from a long time, it is not  fixed beacuse a lot of implementation is already made, if it is fixed the whole implementation have to reimplement. 
// null 
// BigInt
// Symbol

/* >Difference  between == and === ?
Double equals (==) will perform a type conversion when comparing two things, and will handle NaN, -0, and +0 specially to conform to IEEE 754 (so NaN != NaN, and -0 == +0); >> Basically it checks the content only, if in string  a number is given and it is comparing with number, if both the content is same then it will be true.
Triple equals (===) will do the same comparison as double equals (including the special handling for NaN, -0, and +0) but without type conversion; if the types differ, false is returned. >> it will check the datatype with content , so it is said to be Strictly Equi*/
let integer = '34';
let integer2 = 34;
console.log(typeof integer); //->string
console.log(typeof integer2);//->number
console.log(integer == integer2);//-> true
console.log(integer === integer2);//-> false



let firstname = null;
console.log(typeof firstname); //-> object



// let rollnumber = "hello"
// console.log(firstname + rollnumber);
// console.log(typeof firstname);
// let number = "34"; // we can use '...'single invited to make it a string.
// console.log(typeof number); //-> string

// console.log(`We can use this like this too ex: ${number}`); // We can use this like this too ex: 34 // this is backtick not single invited.

// let string = +"shaspa";
// console.log(typeof string); // number //-> just put a plus to convert a string to inter
// console.log(string); // NaN //In JavaScript, NaN stands for Not a Number. It represents a value which is not a valid number. It can be used to check whether a number entered is a valid number or not a numbe



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
