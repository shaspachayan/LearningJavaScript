// how to iterate object 
//1. for in loop
//2. Object.keys

const person = {
    name: "Shaspa",
    age: 22,
    "person hobbies": ["guitar", "sleeping", "listening music"]
}

// for (let key in person) {
//     console.log(key); //now if we only print key then it will print only properties, not the values what the properties content 
// }
/*
name
age
person hobbies
*/

// what we have learnt to acess the content?? 
//>>>>[]

for (let key in person) {
    console.log(person[key]); // in previous section it only acess the object of person but not its value, now if you use dot. the op will be same, so we have to mention to acess the values of object.. we know that we can do it through third bracket without invited.. In short third bracket along without invited used to acess the values
}/*
Shaspa
22
[ 'guitar', 'sleeping', 'listening music' ] */

// Now if we want key value pair??  
// for(let key in person){
//     // console.log(`${key} : ${person[key]}`); //smart nah ;))
//     console.log(key," : " ,person[key]); // or this way!!
// }

// console.log(typeof (Object.keys(person))); // object
// const val = Array.isArray((Object.keys(person)));
// console.log(val);// true

// we can acess through index too....

for (let key of Object.keys(person)) {
    console.log(person[key]);
}
/*
Shaspa
22
[ 'guitar', 'sleeping', 'listening music' ]
*/