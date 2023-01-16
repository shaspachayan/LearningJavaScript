// For loop in array
"use strict"
// let array2 = [];
// for (let i = 0; i < 5; i++) {
//     array2[i] = i;
// }
// console.log(array2); //->[ 0, 1, 2, 3, 4 ]
// array2 = [0];
// console.log(array2); //->[ 0 ]

// using let to create a array, will be not a good choice . Because let will not prevent the array to update further i.e suppose you made a big project and someone made some mistake and declere the array to zero now all the elements are replaced with Zero. 
// so better option is making it through constant, only draeback is you have to put all content at the time of declaring.

// ' array is reference type ' now this will be even more clear.

// const array1 = ['item1', 'item2', 'item3']; //(1x12) address where array1 the variable stores in stack mem & the array elements store in heap mem.(1x12 the address)
// let array2 = array1; // now array2 named a variable created which holds the address only in it stack memory and finds for elements when it needs 
// console.log(array2); //->[ 'item1', 'item2', 'item3' ] // printing the content from heap memory. How array2 finds it so easily?? Array2 holds the address where all the elements stored of array1 [line 17](for ex. 1x12)
// array1.push('item4'); // push item4 to array1, i.e pushing element in heap mem.
// console.log(array2);//->[ 'item1', 'item2', 'item3', 'item4' ]
// console.log(array1);//->[ 'item1', 'item2', 'item3', 'item4' ]






// const array1 = ['item1', 'item2', 'item3'];
// console.log(array1); //->[ 0 ]//->[ 'item1', 'item2', 'item3' ]
// array1 = [0];//->TypeError: Assignment to constant variable.
// console.log(array1);

//------------------------------------------------------------------------------------------------

// let array1 = ['item1', 'item2', 'item3'];
// let array2 = [];
// for (let i = 0; i < array1.length; i++) {
//     array2[i] = [array1[i].toUpperCase()]; // we can apply any method to array, just reember to add first bracket.
// }
// console.log(array2); //[ [ 'ITEM1' ], [ 'ITEM2' ], [ 'ITEM3' ] ]

//------------------------------------------------------------------------------------
// while loop

// const fruits = ["apple", "mango", "grapes"];
// const fruits2 = [];
// let i = 0;
// while (i < fruits.length) {
//     fruits2.push(fruits[i].toUpperCase()); //we are pushing elements of fruits[] to fruits2 with a applied method, what will convert it too all uppercase
//     i++;
// }
// console.log(fruits2);//->[ 'APPLE', 'MANGO', 'GRAPES' ]


//------------------------------------------------------------------------------------------

// for of loop in array

// const fruits = ["apple", "mango", "grapes", "fruit4", "fruit5"];
// const fruits2 = [];


// for (let fruit of fruits) {
//     console.log(fruit);// the internal work is similar as a for loop with i, here only differnce is fruit is a array where all the elements are stored accordingly..1st fruit value is 0 then it prints that. The loop will continue  fruits.length time.
//     // many dev makes array in singular as fruit and from where it will copy made that plural with s. you can do anything.
// }

// for (let fruit of fruits) {
//     fruits2.push(fruit.toUpperCase());
// }
// console.log(fruits2);

// for (let i = 0; i < fruits.length; i++) {
//     console.log(fruits[i]); // for..of loop work same as this.

// }

//-----------------------------------------------------------------------------------------------

// for in loop in array

// the only key differnce is it returns the index, now if you want the elements then put the index in [].Thats it, remaining all are same. // we use for..in & while too often with array, mostly we uses for ...of and normal for with array. 
const fruits = ["apple", "mango", "grapes", "fruit4", "fruit5"];
const fruits2 = [];

for (let index in fruits) {
    fruits2.push(fruits[index].toUpperCase());
}
console.log(fruits2);

//-----------------------------------------------------------------------------------------------

// array destructuring 
// suppose you have array ,now you want access the element one i.e index no 0 to a one varible , now 2nd element to 2nd varible. We can do it ,in js by []making needed varibles  with assignibg to the original array. // line no 100
const myArray = ["value1", "value2", "value3", "value4"];
// let myvar1 = myArray[0];
// let myvar2 = myArray[1];
// console.log("value of myvar1", myvar1);
// console.log("value of myvar2", myvar2);
// let [myvar1, myvar2] = myArray; // now we have created 2 variables which will get the value of index 0 & 1. But what if we want index 3 value in myvar2??? >>> just seperete it with quoma. < let [myvar1, , myvar2] = myArray; > , we can make the varible by let, const but if you make varible by const it cant update further.
// we can update the varible content further.. in short we can do any opertion.
// const myNewArray = myArray.slice(2); // It is suppose you want to make 1 array with the elements of one of array. 

// Now Suppose you want arrayElement 1 and 2 to store to 2 varibles. now you want rest of the elements to store to an array. So we can both the above oporetions in a single line that is-->>

let [myvar1, myvar2, ...myNewArray] = myArray; // it indicates mavar1 and myvar2 will store value 1 and value2. Now rest the element will stored into myNewArray.
console.log("value of myvar1", myvar1);
console.log("value of myvar2", myvar2);
console.log(myNewArray);

// the whole method is called array destructuring..