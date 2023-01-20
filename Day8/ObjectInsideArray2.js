// objects inside array 
// very useful in real world applications

// const users = [
//     { userId: 1, firstName: 'Shaspa', gender: 'male' },
//     { userId: 2, firstName: 'mohit', gender: 'male' },
//     { userId: 3, firstName: 'nitish', gender: 'male' },
// ] // basically being a nonpremitive (i.e object refernce type) we can update it anytime we need, we can insert anything we need.
// for (let user of users) {
//     console.log(user.firstName);
//}
/*Shaspa
mohit
nitish*/

//------------------------------------------------------

// nested destructuring 

const users = [
    { userId: 1, firstName: 'Shaspa', gender: 'male' },
    { userId: 2, firstName: 'mohit', gender: 'male' },
    { userId: 3, firstName: 'nitish', gender: 'male' },
]
// const [usr1, usr2, usr3] = users; // we already taught that in third bracket indicates creating varible that will store corresponding varible
// console.log(usr2);  /*{ userId: 2, firstName: 'mohit', gender: 'male' }*/

// now we want to distract a particular object from it, so what will happen?? just put object wala symbol {}, and put what you want  fetch
// const [{ firstName, userId }, , { gender }] = users;// what will happen here??? from usr1 firstName and userId will be distructered, you dont want to alter 2 nd object list, now want gender from 3rd object list !! thats it
// console.log(firstName); // Shaspa
// console.log(userId);// 1
// console.log(gender);// male


const [{ firstName: user1firstName, userId }, , { gender: user3gender }] = users; // you just want to change the varible name,firstname will be changed with user1firstName, just think a little bit...
//how distructering works?? the 0 index will be the key of the first object list(value) of users. so through : we are renaming it and acessing it.. understood??
// if noh!! go visit array distructering again 
console.log(user1firstName);
console.log(userId);
console.log(user3gender);