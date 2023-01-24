// what is function ?? --> Think like function is a survent, it will do any assigned work when it is called. Sometimes a function will work one particular work for single value... so thats why we have to make it dynamic.

// const twoNumberSum = function () { // we can declare a function like this , this method is called function expression
//     let x = 4 + 4;
//     return x;
// }
// console.log("The sum of two numbers: "+ twoNumberSum());

// this function is not dynamic it will add only 4 two Time.. so lets make it dynamic

// function twoNumberSum(x, y) { // const twoNumberSum= function(x,y) // function expression 
//     return x + y;
// }
// console.log("The sum of any two numbers are- ", twoNumberSum(7, 3));  //10


// function to identify wether the number is odd or even??
// function identifyOddOrEven(x) {
//     if (x % 2 == 0) {
//         console.log("The number is even: ", x);
//     }
//     else
//         console.log("The number is odd ", x);
// }
// identifyOddOrEven(10);

// Find the target index within the array
function findTarget(array, target) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === target) {
            return i;
        }
    }
    return -1;
}
const myArray = [1, 3, 8, 90]
const ans = findTarget(myArray, 4);
console.log(ans);






