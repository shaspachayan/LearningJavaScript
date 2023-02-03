// we know in any function we can pass anything as a parameter of a function like. array, string, integer ,objects, pretty much everything
//const exampleFunction = (a) => console.log("We are in exampleFunction() & the value of a is", a);

// exampleFunction([1, 2, 3, 4, 5, "String in array"]);
//exampleFunction({ name: "Shaspa" }, { roll_no: 199 }) //We are in exampleFunction() & the vslue of a is { name: 'Shaspa' }

// we know that, we can pass anything as a parameter: but the question is can we pass function as a parameter of function? i.e we created a 2nd function and we are passing it as a first function parameter? okay lets see!
const exampleFunction = (callback) => {

    console.log("We are in exampleFunction() & the value of a is", callback);
    callback(10.5);
}
const exampleFunction2 = function (b) {

    console.log("We are in exampleFunction2() & the value of b is", b);

}

exampleFunction(exampleFunction2);// so it is possible to pass function as a parameter,this function calling method is called callbackfunction. The only thing to remember is that we devs make the paramter name "callback" to understand that this is a callback function(change the name of parameter b to callback so when people see your code they understand what you have done? and this is a callback function).This is just a tradition
/*We are in exampleFunction() & the value of a is [Function: exampleFunction2]
We are in exampleFunction2() & the value of b is 10.5 */
