// The JavaScript Set object is used to store the elements with unique values. The values can be of any type i.e. whether primitive values or object references.


//Syntax:
// new Set([iterables]) //iterable represents the iterable object whose elements will be added to the new Set

// points to remember:
// 1. A set objects uses the concept of keys internally
// 2. A set cant contain the duplicate values.
// 3. A set onjects iterets the elements in insertion order.


// Let's see the list of JavaScript set methods with their description.

// Methods	    Description

// add()	    It adds the specified values to the Set object.
// clear()	    It removes all the elements from the Set object.
// delete()	    It deletes the specified element from the Set object.
// entries()	It returns an object of Set iterator that contains an array of [value, value] for each element.
// forEach()	It executes the specified function once for each value.
// has()	    It indicates whether the Set object contains the specified value element.
// values()	    It returns an object of Set iterator that contains the values for each element.

const items = ['item1', 'item2', 'item3'];
const numbers = new Set();
numbers.add(1);
numbers.add(2);
numbers.add(3);
numbers.add(4);
numbers.add(5);
numbers.add(6);
numbers.add(items);
if (numbers.has(1)) {
    console.log("1 is present")
} else {
    console.log("1 is not present")
}
for (let number of numbers) {
    console.log(number);
}

// Remember we cant measure leangth of a set by.length, so how we will do it?
const myArray = [1, 2, 4, 4, 5, 6, 5, 6];
const uniqueElements = new Set(myArray);
let length = 0;
for (let element of uniqueElements) {
    length++;
}

console.log(length);