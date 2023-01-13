// ** array is mutable i.e. we can add any element at any index or delete , as well as we can acess the element without completly deleting it that means we can pop the element from array and it will return the element.It doesnot happen in case of primitive datatype. It will be more clear when we understand the reference datatype. 

//=========================================

// array push pop 

// let fruits = ["apple", "mango", "grapes"];
// console.log(fruits);
// push 

// fruits.push("banana"); // by default the push will happen at the last index i.e. banana will be added at the end of array.
// console.log(fruits);


// pop 

// let poppedFruit = fruits.pop(); // By default pop will happen from last too i.e. elements will be poped from the last index.
// console.log(fruits);
// console.log("popped fruits is", poppedFruit);

//=================================================

// array shift unshift 

// unshift // if we need to add elements from first then unshift
// fruits.unshift("banana");
// fruits.unshift("myfruit");
// console.log(fruits); //-> [ 'myfruit', 'banana', 'apple', 'mango', 'grapes' ]

// shift // remember pop and shift does not delete element from array , it simple put it out and return to user again. That is why we can store it in a variable and reprint it.  
// let fruits = ["apple", "mango", "grapes"];
// let removedFruit = fruits.shift();
// console.log(fruits);//->[ 'mango', 'grapes' ]
// console.log("removed fruits is ", removedFruit);//->removed fruits is  apple
