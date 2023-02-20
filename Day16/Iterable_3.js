// Iterable objects are objects that can be iterated over with for..of.

// Technically, iterables must implement the Symbol.iterator method.


// ex:0 
let numbers = [12.3, 4, 67, 8, "high"];
// lets apply for of :
for (let number of numbers) {
    console.log(number);
}

//output:
// 12.3
// 4
// 67
// 8
// high

// ** So conclusion is array is iterable.

//ex:1
let fullName = "Shaspachayan Bandyopadhyay";
// lets appy for .. of on string
for (let name of fullName) {
    console.log(name); // yooh , you can see the op in terminal, I am not pasting it.
}

//** So string  is also iterable


// one final question  >> "Is this applicable for object array / object too??"

//ex:2 
const dataBase = [
    { "name": "Raj", "Roll_number": "33", "Passion": "Cricket" },
    { "name": "Sam", "Roll_number": "30", "Passion": "football" }
]
for (let data of dataBase) {
    console.log(data);// Uncaught TypeError: dataBase is not iterable
}

//** in case of you run it in node, it might work , we will understand it in upcoming codes */

//=========================


** Only the String And Array is iterable... Object is not iterable



