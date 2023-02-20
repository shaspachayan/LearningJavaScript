// We have know that what is object literals. When the key value pair is maintioned in a curly braces then it is also called as object literals.

// here are some of importent stuffs to remember:
// 1. the key will be alaways string or Symbol(we will see it in future)
// 2. if you pass a number as a key, js will count as a string

//ex 0
const dataBase = [{ name: "Shaspa", DOB: "22022000", 199: "Roll_Number" },
{ name: "Rahuk", DOB: "15021999", 200: "Roll_Number" }]

for (let data of dataBase) {
    console.log(typeof data); // object
    console.log(typeof data[200]); // string // do you get it?? If we pass number it will bw considered as string
}
console.log(dataBase.name); // we can also use dot operator to acess the elements

// hi these is a test