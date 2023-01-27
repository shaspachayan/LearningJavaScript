// /suppose you have made a function and it takes 2 parameters, it adds those 2 numbers.Now when you call the function you just passed only one value , then op will undefined,because undefined + any type  is equals to NaN(not a number)
// before relasing of es6 we checking it through if ->>
// function addNumber(x, y) {
//     if (typeof y === "undefined") {
//         y = 0;
//     }
//     return x + y;
// }
// console.log(addNumber(3));



//after es6 we can set a default valaues to our parameters... just assign values at the time of making function
const sum = (x = 0, y = 1) => {
    return x + y;
}
console.log(sum(9)); //10