// // what is map method?? ->> Same as forEach method, just the differnce is forEach returns element and map returns as a array


// const num = function (number) {
//     number *= number;
//     return number; // only thing to remember is when you making the function , make sure you return something. As i earlier told that map returns as a array, so if we dont return the ans it will not return anything, if you dont return anything then you are returning undefined . Then you will create a array of undefined. So always return.**
// }
// const array = [12, 46, 1, 4, 78, 89, 23, 41];
// // array.map(num) // map method returns within a array so we have to store to or directly print it!
// console.log(array.map(num));
// /*[
//   144, 2116,    1,
//    16, 6084, 7921,
//   529, 1681       
// ] */


const personalData = [
    { firstName: "Shaspa", rollNumber: 199 }
    , { firstName: "Samrat", rollNumber: 201 }
    , { firstName: "Rahul", rollNumber: 202 }
    , { firstName: "Achal", rollNumber: 203 }
]
console.log(personalData.map(array => { return array.firstName })); //[ 'Shaspa', 'Samrat', 'Rahul', 'Achal' ]















