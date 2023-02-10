// As the name suggest, it sorts out in ascending order.But it sorts according to ASCII( American Standard Code for Information Interchange).Lets revisit first the number implementation of every letter, numbers, special charecter then we will leaen how to make things happen correctly.

// ASCII TABLE
//==================


//char : ascii value

// '0' : 48
// '1' : 49
// '2' : 50
// '3' : 51
// '4' : 52
// '5' : 53
// '6' : 54
// '7' : 55
// '8' : 56
// '9' : 57


// ':' : 58
// ';' : 59
// '<' : 60
// '=' : 61
// '>' : 62
// '?' : 63
// '@' : 64


// 'A' : 65
// 'B' : 66
// 'C' : 67
// 'D' : 68
// 'E' : 69
// 'F' : 70
// 'G' : 71
// 'H' : 72
// 'I' : 73
// 'J' : 74
// 'K' : 75
// 'L' : 76
// 'M' : 77
// 'N' : 78
// 'O' : 79
// 'P' : 80
// 'Q' : 81
// 'R' : 82
// 'S' : 83
// 'T' : 84
// 'U' : 85
// 'V' : 86
// 'W' : 87
// 'X' : 88
// 'Y' : 89
// 'Z' : 90



// '[' : 91
// '\' : 92
// ']' : 93
// '^' : 94
// '_' : 95
// '`' : 96



// 'a' : 97
// 'b' : 98
// 'c' : 99
// 'd' : 100
// 'e' : 101
// 'f' : 102
// 'g' : 103
// 'h' : 104
// 'i' : 105
// 'j' : 106
// 'k' : 107
// 'l' : 108
// 'm' : 109
// 'n' : 110
// 'o' : 111
// 'p' : 112
// 'q' : 113
// 'r' : 114
// 's' : 115
// 't' : 116
// 'u' : 117
// 'v' : 118
// 'w' : 119
// 'x' : 120
// 'y' : 121
// 'z' : 122
// '{' : 123
// '|' : 124
// '}' : 125


//===============

// const numbers = [5, 9, 1200, 400, 3000];
// console.log(numbers.sort()); //1200,3000,4000,5,9 // it takes the first index(0 th)of the string. According to 0th string , 1 has the lowest ASCII value over others so 1200 is the 1st element of sorted Array. One more thing to remember that sort perform opertion on the existing array i.e it changes the array suppose you tell the array to sort, it will sort in ascending order by default and will store it to the corresponding array so if we again want to print the array then the updated sorted array will be provided as an output.
// 5, 9, 400, 1200, 3000 (expected)

//==================================================

// const userNames = ['Shaspa', 'abcd', 'mohit', 'nitish', 'aabc', 'ABC', 'shaspa'];
// userNames.sort();
// console.log(userNames);//['ABC','Shaspa','aabc','abcd','mohit','nitish','shaspa]

// const numbers = [5, 9, 1200, 410, 3000];
// numbers.sort((a, b) => { // remember to make it right we have to write some weird function, yes sort() can accept callback function.
//     // return b - a; //decending order //[ 3000, 1200, 410, 9, 5 ]
//     return b - a;
// });
//numbers.sort((a, b) => a - b); // In arrow function we can write the return statement like this i.e if the return statement is less complex it is good to write it in this way. (nothing much a annoyomus function taking a and b two parameter and returning a-b as op of the function nothing much.. for multiline code use proper scoping {/..../})
// console.log(numbers); //[ 5, 9, 410, 1200, 3000 ]

// now how the function works?
//suppose we have 2 numbers 1200,410 , let a=1200 and b= 410, now if the subtraction of these 2 numbers are positive then the smaller number is b and greater number is a. So in this order things are happening, we dont need to go in depth just understand it the function takes 2 numbers and perform this minus system opertion and decide what number is smaller and what number is greater.
// a-b ---> 790
// a-b ---> postive (greater than 0) ---> b, a

// 410 , 1200
// a-b ---> negative ----> a,b
// 5, 9 ---> -4


// price lowToHigh HighToLow
// const products = [
//     { productId: 1, produceName: "p1", price: 300 },
//     { productId: 2, produceName: "p2", price: 3000 },
//     { productId: 3, produceName: "p3", price: 200 },
//     { productId: 4, produceName: "p4", price: 8000 },
//     { productId: 5, produceName: "p5", price: 500 },
// ]

products.sort((a, b) => {
    return a.price - b.price
});
console.log(products);// the thing is it is changing the original array , so if we dont want that we just need to clone the array then apply it.We are cloning it to a new array by slice , and doing the same thing.

// // lowToHigh
// const lowToHigh = products.slice(0).sort((a, b) => {
//     return a.price - b.price
// });

// const highToLow = products.slice(0).sort((a, b) => {
//     return b.price - a.price;
// });



