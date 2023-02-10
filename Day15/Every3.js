function isAdult(age) {
    if (age > 18)
        return true;
    else
        return false;
}


const ans = [20, 110, 0200, 78, 50, 45];
console.log(isAdult(ans)); //false

// this is just a minimal concept clear, nothing much. We have written a function where we will check weather the age is greater than 18 or not. So when we passes the whole array of age(i.e. ans here), it checks element by element, if the 1st(0th element acctually) element > 18 then go to next if not then also next. Ultimetly TRUE * FALSE = FALSE and TRUE * TRUE= TRUE. Thats it, we know this already.

// Actually this is the wrong process. When we are passing the whole array and not passing the index then everytime it will give us false. So now just learn how to do the same thing what we are tring to do............... :)



// find() : find method will give us the 1st element which will satisfy the callback function.
// now lets check is all the elements will satisfy the function or not but it will give us op in boolean. It is not possible to give op for every element.The method is :
//every() :The every() method checks if all the array elements pass the given test function.


// Example 01: Function that checks whether
// the age is 18 or above
function checkAdult(age) {
    return age >= 18;
}

const ageArray = [34, 23, 20, 26, 12];

// //checks if all the array elements
// // pass the checkAdult() function
// let check = ageArray.every(checkAdult); // I have already told that check() gives op in boolean

// Output: false

// every() Syntax:-
// The syntax of the every() method is:
// arr.every(callback(currentValue), thisArg)
// Here, arr is an array.

// every() Parameters:-
// The every() method takes in:
// callback() - the function to test for each array element. It takes in:
// currentValue - the current element being passed from the array.
// thisArg (optional) - value to use as this when executing callback(). By default, it is undefined.

// every() Return Value:-
// The every() method returns:
// true - if all the array elements pass the given test function (callback returns a truthy value).
// false - if any array element fails the given test function.

// Notes:
// every() does not change the original array.
// every() does not execute the callback() function for an empty array. In case we do pass an empty array, it always returns true.


//Example 02:
// function that checks whether all
// the array elements are even or not
function checkEven(num) {
    return num % 2 === 0;
}

// create an array of numbers
const numbers1 = [2, 4, 6, 7, 8];

// use the every() method along with
// checkEven() on the numbers array
let check = numbers1.every(checkEven);

console.log(check)

// Output: false


//example 03: using Arrow Fumction

let numbers = [1, 2, 3, 4, 5];

// use arrow function with every()
let result = numbers.every(element => element < 6);
console.log(result);

// Output: true


// credit : Programiz