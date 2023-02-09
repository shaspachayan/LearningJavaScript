// we have previously discussed the many methods so this is nothing new, filter method takes a callback function as a parameter and return in boolean.Basically it filters out, the given task,and as usal it returns in array or you can say we can store it in array.
let array = [1, 47, 45, 78, 5, 2, 0, 1, 2, 7];

const isEven = numbers => { return numbers % 2 === 0 };

const ans = array.filter(isEven);
console.log(ans); //[ 78, 2, 0, 2 ]

// ====================================================


//******************************************************
//What is the differnce between forEach(), map(), filter()? When we will use it??

// forEach(): When we have a array of object and we need a specific function to run and need us a specific case of values in return. That means it will give individual outputs.

// map(): Same as forEach(), it will return in a array.

//filter(): when you want to select a subset of multiple elements from an array.

// https://medium.com/@jeff_long/understanding-foreach-map-filter-and-find-in-javascript-f91da93b9f2c#:~:text=forEach%20returns%20undefined.,3%5D%3Bconst%20transformedArr%20%3D%20arr.