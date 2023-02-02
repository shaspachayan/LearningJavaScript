//yeah it is possible to return function in function. 
const myFunction = () => {
    console.log("This is Function 1! ");
    function ourFunction() {
        console.log("This is function 2");
    }
    return ourFunction();
}
// console.log(myFunction());
let x = myFunction();
console.log(x);
/*This is Function 1!
This is function 2
undefined*/

// basically this is just a property, remember !