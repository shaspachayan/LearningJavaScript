// normal function
// function sayHEllo(n) {
//     console.log(n);
// }

//This is arrow function
const sayHello = (n) => {
    console.log("The number is: " + n);
}

//When we have only one thing to return, then we can ignore the 2nd brackets and it does meAn retuening.

const addVal = (a, b) => a + b; // this is one liner code

const addval2 = (a, b) => {
    return (a + b);
} // the same function addval looks more clean


// spread Opertor
let numbers = [1, 2, 3, 4, 5];

const printNumber = (...nums) => console.log(nums);

//Hoisting
greet();
//const greet = () => console.log("Good Day Sir");
function greet() {
    console.log("Hii, Good Day Sir")
} // hoisting does not works on arrow function

//this keyword

// In case of normal function this works as normal ,it refers the object but  but in case of arrow function this refers the web window(you can clearly see in console that this refers the window )

const obj = {
    name: "Shaspa",
    myFunction: function () {
        console.log(this.name);
    }
}
obj.myFunction;// you cant find the op in node, link file with browser.See console it will be clear.
