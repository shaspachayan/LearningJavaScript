const key = "email";
// In previous code we have known the process of acessing object and its key value pairs through dot and bracket, now we have no idea when to use bracket or when to use dot...
// so we will learn this in this code..
const person = {
    name: "Shaspa",
    age: 22,
    "person hobbies": ["guitar", "sleeping", "listening music"] // we can make a array of objects, in previous section we have discussed that the object attributs saved in a form of String. So by any chance if you hava to create a attribute in 2 words like person hobbies just put the invited quoma, pretty simple nah?? 

} // created multiple  objects.
// ** we can acess the single word attributes by dot and thirdbracket ..but double word attributes?? This is the time when we can use third bracket...:))
// console.log(person["person hobbies"]);
// now suppose there is a key , what we have to add in to the object i.e key contains email, we have to include email in the attribute set of person..

//person['key'] = "abc@gmail.com"; // single double whatever in invited quoma means that js will not look for content the given inbeteen quoma will be given prefernce
// console.log(person); 
/*{
        name: 'Shaspa',
        age: 22,
        'person hobbies': ['guitar', 'sleeping', 'listening music'],
        key: 'abc@gmail.com' // see here email is not shown it contains key the constant what we have created..
  }*/
person[key] = "abc@gmail.com"; // in bracket without invited means acess the content of given attribute. simple.. 
console.log(person);
/*{
  name: 'Shaspa',
  age: 22,
  'person hobbies': [ 'guitar', 'sleeping', 'listening music' ],
  email: 'abc@gmail.com'
} */
