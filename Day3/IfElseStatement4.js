//if else condition

let age = 17;

if (age >= 18) {
    console.log("User can play ddlc");
} else {
    console.log("User can play mario");
} //-> User can play mario

let num = 13;

if (num % 2 === 0) {
    console.log("even");
} else {
    console.log("odd");
} //-> odd

//falsy values


false
""
null
undefined
0

//truthy values

"abc"
1, -1

let firstName = 0; // 0 is a falsy value 

if (firstName) { // if will execute when the statement is true only, for the falsy value the else statement starts to run
    console.log(firstName);
} else {
    console.log("firstName is kinda empty");
} //-> firstName is kinda empty