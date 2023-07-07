// when we pass the functon as a argument inside a function then that function is called High order functon.

// And the callback is the function which we are passing in the function is callback.\

function addSum(a, b, cb) {
    let value = a + b;
    cb(value);// this cb is callback : the function which is passed inside the function is called callback
}

// addSum(2, 3, (value) => { console.log(value); }) // we can rewrite the function because arrow function can be more clean
addSum(2, 3, value => console.log(value))


// So where the highorder and callback function is used?

// When there is a heavy task and it can  consume time then we pass the argument and make the complex thing happen and pass the result into the function for further Worke. Basically it is process do complex things in easy way.

// we must know that we can return a function

function add(a, b, cb) {
    let result = a + b;
    cb(result);
    return () => console.log(result); // There will be many case  when returning a function can be helpfull
}

let resultFunction = add(2, 3, () => { }); // here we are just ignoring the callback
resultFunction();