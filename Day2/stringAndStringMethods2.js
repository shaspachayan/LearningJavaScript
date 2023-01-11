// String indexing 

let firstName = "shaspa";

//  s    h   a   s   p   a
//  0    1   2   3   4   5

// console.log(firstName[0]);
// length of string 
// firstName.length 

console.log(firstName.length); // 6

console.log(firstName[firstName.length - 2]); // p

// last Index :( length - 1 )


//===================USEFUL STRING METHONDS====================================
// trim() 
// toUpperCase()
// toLowerCase()
// slice()

let firstName1 = "shaspa";

// console.log(firstName1.length);
// firstName1 = firstName1.trim(); 
// console.log(firstName1) // "shaspa"
// console.log(firstName1.length); //6
// firstName1 = firstName1.toUpperCase(); //SHASPA
// firstName1 = firstName1.toLowerCase();
// console.log(firstName1);

// start index = 0
// end index = 5

let newString = firstName1.slice(1);
console.log(newString); // haspa
