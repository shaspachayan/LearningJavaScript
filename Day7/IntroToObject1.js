// objects reference type  

// arrays are good but not sufficient 
// for real world data 
// objects store key value pairs // what is key value pairs?? ->> name : "Shaspa"; age: 22; this values and their attributes are called key value pair
// objects don't have index

//------------------------------------------

// how to create objects 

// const person = {name:"Harshit",age:22}; // we can create object through curly braces,every object must have 1 attribute and corresponding value...
const person = {
    name: "harshit",
    age: 22,
    hobbies: ["guitar", "sleeping", "listening music"]
}
//console.log(person); 
/*
  {
    name: 'harshit',
    age: 22,        
    hobbies: [ 'guitar', 'sleeping', 'listening music' ],
    'person': 'male' // will be clear in line no 29
  }*/

// how to access data from objects 

console.log(person["name"]); // we can acess each data through string usage , because for object every atrribute is by default string,put third bracket and put the name in invited quoma
console.log(person["age"]);
console.log(person.hobbies); // we can acess values through dot operetor too.In js there is a meaning of everything. Carefully understand this.
/*
harshit
22
[ 'guitar', 'sleeping', 'listening music' ] 
*/

// how to add key value pair to objects
person["person"] = "male"; // 
console.log(person);
/*
{
  name: 'harshit',
  age: 22,
  hobbies: [ 'guitar', 'sleeping', 'listening music' ],
  person: 'male'
}
*/ 