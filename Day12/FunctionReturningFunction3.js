// //yeah it is possible to return function in function. 
// const myFunction = () => {
//     console.log("This is Function 1! ");
//     function ourFunction() {
//         console.log("This is function 2");
//     }
//     return ourFunction();
// }
// // console.log(myFunction());
// let x = myFunction();
// console.log(x);
// /*This is Function 1!
// This is function 2
// undefined*/

// // basically this is just a property, remember !
// function print() {
//     console.log("You are in 1 st function!");

//     function secondPrint() {
//         return "You are in 2nd function!";
//     }
//     return secondPrint();
// }

// console.log(print());

// we can return function this way too, if it is a bit confusing then we will look into it in future!
// the fact is a function is returning a function ! tai to?? now lets clear it! we dont need to make the 2nd function what we are returning , we can directly return it, no need to give a name then call it by that name! directly make a function and return it!
function print() {
    console.log("You are in 1 st function!");
    return function () {
        return "You are in 2nd function!";
        //console.log("You are in 2nd function!");
    }
}
//let x = print();
// typeof x; // function
console.log(print());
/*You are in 1 st function!
 ƒ () {
        return "You are in 2nd function!";
        //console.log("You are in 2nd function!");
    }*/




















