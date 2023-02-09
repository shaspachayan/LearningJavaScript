//reduce is most importent method till now, let understand it with a example.Suppose we have a array, and we want to add the values then we can use it, it takes 2 parameters, and perform the callback opertion.
// Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.

//===========================================================================

//Example 01: Sum of All Values of Array

// const numbers = [1, 2, 3, 4, 5, 6];

// function sum_reducer(accumulator, currentValue) {
//     return accumulator + currentValue;
// }

// let sum = numbers.reduce(sum_reducer);
// console.log(sum); // 21

// // using arrow function
// let summation = numbers.reduce(
//     (accumulator, currentValue) => accumulator + currentValue
// );
// console.log(summation); // 21


//======================================

// The reduce() method takes in:

// callback - The function to execute on each array element (except the first element if no initialValue is provided). It takes in
// accumulator - It accumulates the callback's return values.
// currentValue - The current element being passed from the array.
// initialValue (optional) - A value that will be passed to callback() on first call. If not provided, the first element acts as the accumulator on the first call and callback() won't execute on it.

//===============================================================

// Example 2: Subtracting Numbers in Array

// const numbers = [1800, 50, 300, 20, 100];

// // subtract all numbers from first number
// // since 1st element is called as accumulator rather than currentValue
// // 1800 - 50 - 300 - 20 - 100
// let difference = numbers.reduce(
//     (accumulator, currentValue) => accumulator - currentValue
// );
// console.log(difference); // 1330

// const expenses = [1800, 2000, 3000, 5000, 500];
// const salary = 15000;

// // function that subtracts all array elements from given number
// // 15000 - 1800 - 2000 - 3000 - 5000 - 500
// let remaining = expenses.reduce(
//     (accumulator, currentValue) => accumulator - currentValue,
//     salary
// );
// console.log(remaining); // 2700

//=================================================================

//Example 3: Remove Duplicate Items from Array

// let ageGroup = [18, 21, 1, 1, 51, 18, 21, 5, 18, 7, 10];
// let uniqueAgeGroup = ageGroup.reduce(function (accumulator, currentValue) {
//     if (accumulator.indexOf(currentValue) === -1) {
//         accumulator.push(currentValue);
//     }
//     return accumulator;
// }, []);

// console.log(uniqueAgeGroup); // [ 18, 21, 1, 51, 5, 7, 10 ]

//========================================================================

// Example 4: 
// const userCart = [
//     {productId: 1, productName: "mobile", price: 12000},
//     {productId: 2, productName: "laptop", price: 22000},
//     {productId: 3, productName: "tv", price: 15000},
// ]

// const totalAmount = userCart.reduce((totalPrice, currentProduct)=>{
//     return totalPrice + currentProduct.price;
// }, 0)

// console.log(totalAmount);

// this is what happens, in first case for total price 0 is passed and a empty object as a current value, and returns the sum.Then the sum is passed as a total price and current value is passed and as usual the sum is returned... goes like this
// total price      currentValue     return 
// 0                {}                  12000
// 12000            22000                34000
// 34000            15000                49000

//=======================================================================

// // Example 5: Grouping Objects by a property

let people = [
    { name: "John", age: 21 },
    { name: "Oliver", age: 55 },
    { name: "Michael", age: 55 },
    { name: "Dwight", age: 19 },
    { name: "Oscar", age: 21 },
    { name: "Kevin", age: 55 },
];

function groupBy(objectArray, property) {
    return objectArray.reduce(function (accumulator, currentObject) {
        let key = currentObject[property];
        if (!accumulator[key]) {
            accumulator[key] = [];
        }
        accumulator[key].push(currentObject);
        return accumulator;
    }, {});
}

let groupedPeople = groupBy(people, "age");
console.log(groupedPeople);

//OUTPUT:

// {
//     '19': [ { name: 'Dwight', age: 19 } ],
//     '21': [ { name: 'John', age: 21 }, { name: 'Oscar', age: 21 } ],
//     '55': [
//       { name: 'Oliver', age: 55 },
//       { name: 'Michael', age: 55 },
//       { name: 'Kevin', age: 55 }
//     ]
//   }









