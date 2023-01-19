// computed properties

// Task is we have two pairs of key values ... So we have to assign the values with the corresponding keys
// const obj = {
//     objkey1 : "myvalue1",
//     objkey2 : "myvalue2",
// } // like this, i mean dont write it this way, but how you will do this??




const key1 = "objkey1";
const key2 = "objkey2";

const value1 = "myvalue1";
const value2 = "myvalue2";


// const obj = {
//     key1: value1,
//     key2: value2
// }
// console.log(obj);  /*{ objkey1: 'myvalue1', objkey2: 'myvalue2' }*/

// normally we will do this, but it will not work,as you can see in op the keyvalue is not printing!!!!!

// what is the problem?? problem is key value is not showing...  we already know how to show the value.. go ahead...
const obj = {
    [key1]: value1,
    [key2]: value2
}
console.log(obj);

// is there any other option????

// const obj = {}; // empty object

// obj[key1] = value1; // now as we maintioned the key in third bracket so it will acess the value of key
// obj[key2] = value2;// that's it
// console.log(obj);


//** Difference between : and = in js???

// In JavaScript, the ":" is used in object literals to define a key-value pair, whereas the "=" is used to assign a value to a variable.

