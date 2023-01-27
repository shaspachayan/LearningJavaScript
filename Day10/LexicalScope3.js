// lexical scope

// Scope refers to the area where an item (such as a function or variable) is visible and accessible to other code.

// Note:

// Scope means area, space, or region.
// Global scope means global space or a public space.
// Local scope means a local region or a restricted region.


// lexical scope is the another name of static scope, suppose a local variable is created (19) named myVar ,when myVar is called inside myFunc2 it gives value59 as op but when myVar is is commented out then it checks the that is there any global varible named myVar, if present then show it as op.
const myVar = "value1";

function myApp() {


    function myFunc() {
        // const myVar = "value59";
        const myFunc2 = () => {
            console.log("inside myFunc", myVar);
        }
        myFunc2();
    }


    console.log(myVar);
    myFunc();
}

myApp();