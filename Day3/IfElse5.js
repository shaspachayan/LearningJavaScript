// and  or operator 



// if(firstName[0] === "S"){
//     console.log("your name starts with S")
// }

// if(age > 18){
//     console.log("you are above 18");
// }

// if (firstName[0] === "S" && age > 18) {
//     console.log("Name starts with S and above 18");
// } else {
//     console.log("inside else");
// }
// let firstName1 = "arshit";
// let age = 16;

// if (firstName1[0] === "S" || age > 18) {
//     console.log("inside if");
// } else {
//     console.log("inside else");
// }
// ===================================================================
// nested if else

// winning number 19 

// 19 your guess is right 
// 17 too low 
// 20 too high 

let winningNumber = 19;
let userGuess = +prompt("Guess a number"); // prompt is a method which will ask for input in web, just like prompting notification

if (userGuess === winningNumber) {
    console.log("Your guess is right!!");
} else {
    if (userGuess < winningNumber) {
        console.log("too low !!!");
    } else {
        console.log("too high !!!");
    }
}

//========================================================
let tempInDegree = 4;

if (tempInDegree > 40) {
    console.log("too hot");
} else if (tempInDegree > 30) {
    console.log("lets go for swim");
} else if (tempInDegree > 20) {
    console.log("weather is cool");
} else if (tempInDegree > 10) {
    console.log("it is very cold outside");
} else {
    console.log("extremely cold");
}

console.log("hello");