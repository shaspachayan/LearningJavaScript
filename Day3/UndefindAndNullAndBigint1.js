// lets talk about null and Undefined
"use strict "
/* 
let firstname;
console.log(typeof firstname, firstname); //-> undefined undefined
firstname = "Shaspa"; // we can put let infront of firstname, it will create another variable named firstname, but if strictmode is on , it will give error //->let firstname = "Shaspa"; //-> Cannot redeclare block-scoped variable 'firstname'.
console.log(typeof firstname, firstname); //->string Shaspa 
*/

/*
let variable1 = null;
//console.log(typeof variable1, variable1); //-> object null
console.log(typeof null, null); //-> object null
variable1 = 32;
console.log(typeof variable1, variable1,); //-> number 32
*/

let myNumber = BigInt(12);
let sameMyNumber = 123n;
console.log(myNumber); //-> 12n // n represents bigint
console.log(myNumber + sameMyNumber); //-> 9007199254740991
console.log(Number.MAX_SAFE_INTEGER); //-> 135n //The Number.MAX_SAFE_INTEGER constant represents the maximum safe integer in JavaScript (2^53 – 1).For larger integers, consider using BigInt.


