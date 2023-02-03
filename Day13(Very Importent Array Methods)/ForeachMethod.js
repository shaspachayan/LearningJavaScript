// lets create a array of numbers and we have to find out the value of each element of array when every element is multiplied by a specific number(here lets take it 2)
// suppose we have a array named array=[1,2,4,5,7,8], now we have to return the value of each index multiplied by 2 i.e. [2,4,8,10,14,16] ... Got it??

// const numbers = [1, 32, 34, 56, 78];
// console.log(typeof numbers) // object
// function multiplyBy2(number, index) { //i have written number not numbers, it is more convenient way of naming 
//     console.log(`The array element is ${number[index]} & if we multiply it by 2 then Ans = ${number[index] * 2}`);
// }
// multiplyBy2(numbers, 2); //The array element is 34 & if we multiply it by 2 then Ans = 68

// ======================================================
// now this is for only one element.If we want it for every element then what?

// >>>>run a simple for loop

// for (let i = 0; i < numbers.length; i++) {
//     multiplyBy2(numbers[i], i);
// }
//>>>>>  for each loop? >>>The forEach() method executes a provided function once for each array element.forEach() takes callback function i.e takes function as input. It will take function as parameter and you need not to pass any parameter for it.The only change is for what element you apply forEach mention it(using .) and what function you want to perform on  that mentioned element. That`s it
// numbers.forEach(multiplyBy2);
// we can write the function inside the bracket as a parameter also....
const numbers = [1, 32, 34, 56, 78];
numbers.forEach(function (number) {
    console.log(`The element of array is: ${number} and if we multiply it by 2= ${number * 2}`);
})
/*
The element of array is: 1 and if we multiply it by 2= 2
The element of array is: 32 and if we multiply it by 2= 64
The element of array is: 34 and if we multiply it by 2= 68
The element of array is: 56 and if we multiply it by 2= 112
The element of array is: 78 and if we multiply it by 2= 156
*/

const users = [
    { firstName: "Shaspa", age: 23 },
    { firstName: "mohit", age: 21 },
    { firstName: "nitish", age: 22 },
    { firstName: "garima", age: 20 },
]

users.forEach(function (user) { // nothing toomuch , the function is made directly as a argument. function is annoymus i.e. it has no name(spelling mistake) it takes user as a input parameter . Now we understood how foreach works? The foreach is passed on users the users is passed on function & by it , it can acess all the elements
    console.log(user.firstName);
});

// we can make the same function as arrow function!
users.forEach(user => { console.log(user.firstName) }) // GOD DAMN!!!!!! // we know in arrow function , if the parameter is 1 then no need give bracket...We can seek  index too , then we have to give ().
users.forEach((user, index) => { console.log(user.firstName) })

//=========================================================


/*for (let user of users) {
    console.log(user.firstName);
}*/





// time stamp: 6:30:39 ;  link for better understanding: https://www.w3schools.com/jsref/jsref_foreach.asp