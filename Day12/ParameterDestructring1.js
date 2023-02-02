// parameter destructuring  : we have discussed enough about destrutering, so this will not give many trouble.

// First of all before starting we use parameter destructreing with object. It is very importent concept to learn React


const person = {
    firstName: "Shaspa",
    gender: "male",
    // age: 500
}

// function printDetails(obj){ // we always destructre objects by this method, suppose there is no such parameter but u passed it then undefinrd will come(just like age)
//     console.log(obj.firstName); //Shaspa
//     console.log(obj.gender); // male
//     console.log(age); // undefined
// }

// we dont need to use dot opertor everytime, we can destructure parameter in single line. just pass the parameters what you want to acess. Thats it...make sure to use {} because in this case you are not acessing the object rather than you directly usesits keys to get its values, to understand what is this, we use {key} to get the value. 


function printDetails({ firstName, gender, age }) {
    console.log(firstName);
    console.log(gender);
    console.log(age);
}

printDetails(person);