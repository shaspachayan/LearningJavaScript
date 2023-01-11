// String indexing 

let firstName = "shaspa";

//  s    h   a   s   p   a
//  0    1   2   3   4   5

// console.log(firstName[0]);
// length of string 
// firstName.length 

console.log(firstName.length); // 6

console.log(firstName[firstName.length - 2]); // p

// last Index : length - 1 



//===================USEFUL STRING METHONDS====================================
// trim() 
// toUpperCase()
// toLowerCase()
// slice()

let firstName1 = "shaspa";

// console.log(firstName1.length);
// firstName1 = firstName1.trim(); // "shaspa"
// console.log(firstName1)
// console.log(firstName1.length);
// firstName1 = firstName1.toUpperCase();
// firstName1 = firstName1.toLowerCase();
// console.log(firstName1);

// start index 
// end index

let newString = firstName1.slice(1);
console.log(newString); // haspa