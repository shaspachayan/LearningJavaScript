// The find() method returns the value of the first array element that satisfies the provided test function. 

// you have write a function and want to find which element will satisfy the function, the matter of fact is it just points out the 1st element what will satisfy the condition,that is how find() works.


// find() Parameters

// The find() method takes in:

// callback - Function to execute on each element of the array. It takes in:
// element - The current element of array.
// thisArg (optional) - Object to use as this inside callback.


// find() Return Value:

// Returns the value of the first element in the array that satisfies the given function.
// Returns undefined if none of the elements satisfy the function.




//example 0:
// const myArray = ["Hello", "catt", "dog", "lion"];

// function isLength3(string){
//     return string.length === 3;
// }

// const ans = myArray.find((string)=>string.length===3);
// console.log(ans);

//example 1:
// function isEven(element) {
//     return element % 2 == 0;
//   }

//   let randomArray = [1, 45, 8, 98, 7];

//   let firstEven = randomArray.find(isEven);
//   console.log(firstEven); // 8

//   // using arrow operator
//   let firstOdd = randomArray.find((element) => element % 2 == 1);
//   console.log(firstOdd); // 1

//example 2:
const team = [
    { name: "Bill", age: 10 },
    { name: "Linus", age: 15 },
    { name: "Alan", age: 20 },
    { name: "Steve", age: 34 },
];

function isAdult(member) {
    return member.age >= 18;
}

console.log(team.find(isAdult)); // { name: 'Alan', age: 20 }

// using arrow function and deconstructing
let adultMember = team.find(({ age }) => age >= 18);

console.log(adultMember); // { name: 'Alan', age: 20 }