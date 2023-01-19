// spread operator
const array1 = [1, 2, 3];
const array2 = [5, 6, 7];

//process1 
// const newArray = [...array1, ...array2, 89, 69]; // first it is spreding array1 along with array2 .. then 89 and 69 is also added to it
// console.log(newArray);
// /*[
//   1, 2,  3,  5,
//   6, 7, 89, 69
// ]*/ 

const newArray = [..."123456789"]; // if you write all the values in between double invited with in front of 3 dot(...)then it will be considered  as each element of array
console.log(newArray);
/*[
  '1', '2', '3',
  '4', '5', '6',
  '7', '8', '9'
] */

//------------------------------------------------------------------------

// spread operator in objects

// const obj1 = {
//     key1: "value1",
//     key2: "value2",
// };
// const obj2 = {
//     key1: "valueUnique",
//     key3: "value3",
//     key4: "value4",
// };

//   // const newObject = { ...obj2, ...obj1, key69: "value69" }; // we can clone or spread the obj1 and obj2 constant through ... but if you want a third key then you can add it like this key69: "value69"

//const newObject= {..."abc"}; // now what happen?? the 0 index will be the key where its value will be a and the value of index 1 will be b and the value of index 2 will be c // so in short if you spread the string then the string index will become the key and the value will be the charecter

//   // const newObject = { ...["item1", "item2"] }; //so what will happen here??? it is spreding the array.. here o will be the first key and value will be item1, 1 will be the second key and item2 will be the second value of 2

//   // const newObject = { ..."abcdefghijklmnopqrstuvwxyz" }; // here the whole string will be divided in key value pair in respect of index
//   // console.log(newObject);