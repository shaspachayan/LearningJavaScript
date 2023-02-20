// The fill() method returns an array by filling all elements with a specified value.

// Example 1
// defining an array 
var fruits = ['Apple', 'Banana', 'Grape'];

// filling every element of the array with 'Cherry'
fruits.fill("Cherry");

console.log(fruits);

// Output: 
// [ 'Cherry', 'Cherry', 'Cherry' ]





// fill() Syntax
// The syntax of the fill() method is:

// arr.fill(value, start, end)
// Here, arr is an array.

// fill() Parameters:
// The fill() method can take 3 parameters:

// 1.value - Value to fill the array with.
// 2.start (optional) - Start index (default is 0).
// 3. end (optional) - End index (default is Array.length), which is always excluded.

// fill() Return Value
// Returns the modified array, filled with value from start to end.


// Notes:

// If start or end is negative, indexes are counted backwards.
// Since fill() is a mutator method, it changes the array itself (not a copy) and returns it.

// Example 2: Using fill() Method
var prices = [651, 41, 4, 3, 6];

// filling every element of the array with '5'
new_prices = prices.fill(5);

console.log(prices);

console.log(new_prices);

// Output

// [ 5, 5, 5, 5, 5 ]
// [ 5, 5, 5, 5, 5 ]

// In the above example, we have used the fill() method to fill every element of the prices array with 5.

// We have passed 5 as a fill value in the method and then assigned the return value to new_prices.

// As the method is mutator, prices.fill(5) modifies the original array and hence both prices and new_prices hold the same value.



// Example 3: fill() Method with Three Arguments
// array definition
var language = ["JavaScript", "Python", "C", "C++"];

// replacing element of array from index 1 to 3 by 'JavaScript'
language.fill("JavaScript", 1, 3);

// printing the original array
console.log(language);

// Output:
// [ 'JavaScript', 'JavaScript', 'JavaScript', 'C++']

// Here, we have used the fill() method to fill 'JavaScript' in language from index 1 to 3 (excluding 3).

// So the method just replace the element of language[1] and language[2] with 'JavaScript'.

// Example 3: fill() Method with Invalid Indexes
var rank = [8, 9, 3, 7];

// on passing negative index, counting starts from back
rank.fill(15, -2);

// prints the modified 'rank' array
console.log(rank);  // [ 8, 9, 15, 15 ]

// passing invalid index result in no change
rank.fill(15, 7, 8);

console.log(rank);  // [ 8, 9, 15, 15 ]

// passing invalid indexes
rank.fill(15, NaN, NaN);

console.log(rank);  // [ 8, 9, 15, 15 ]

// Output

// [ 8, 9, 15, 15 ]
// [ 8, 9, 15, 15 ]
// [ 8, 9, 15, 15 ]
// In the above example, we have passed negative index value -2 as start in the fill() method. rank.fill(15,-2) fills the last two elements of the array with 15.

// If we pass an index value greater than the size of the array as start and end,

rank.fill(15, 7, 8);
rank.fill(15, NaN, NaN);
// here, 7, 8 and NaN, NaN are invalid indexes, so the method returns the array without changing.








// =======================================================================

//here is another type by how we can make array look ..

const newWayToDeclare = new Array(11).fill(5.5);
console.log(newWayToDeclare);
 //output:
//  [
//     5.5, 5.5, 5.5, 5.5,
//     5.5, 5.5, 5.5, 5.5,
//     5.5, 5.5, 5.5
//   ]


