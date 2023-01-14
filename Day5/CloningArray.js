// let arr1 = ["item1", "item2"];

// //way of cloning the array:::
// let arr2 = ["item1", "item2"]; // method 1: mention every item manually, most disguted method ever

//let arr2 = arr1.slice(0); // method2: we learnt slice method previously, what slice does? slice takes components from mentioned index to last.
//console.log(arr2); //->[ 'item1', 'item2' ]


// let arr5 = ["item5", "item6"];
// let arr6 = [...arr5, ...arr1]; // method3: this method extending, we are extending arr5 with arr1. 
// console.log(arr6);//->[ 'item5', 'item6', 'item1', 'item2' ]

//------------------------------------------------------------------------------------------------------------

// let arr3 = arr2.slice(0).concat(["item3", "item4"]); //* we also learnt concatination. Concat- add the components at the end
// console.log(arr3); //->[ 'item1', 'item2', 'item3', 'item4' ]

// let arr4 = [].concat(arr1, ["item3", "item4"]);//it indicates make a array first named arr4,now concat arr1 with it along with item3 and item4(dont forget quoma)
// console.log(arr4); //->[ 'item1', 'item2', 'item3', 'item4' ] 

//------------------------------------------------------------------------------------------------------------

// we can push pull to array too...
let arr1 = ["item1", "item2"];
let arr2 = ["item1", "item2"];
// arr1.push("item3"); // we can perform push pop only at last in js.If we need to add element at first then unshift and if we want delete from 1st then shift. ** for easy remember unsift=push [both are lengthy word]
arr2.pop("item2");
console.log(arr2);//->[ 'item1' ]

// console.log(arr1 === arr2);//->false
// console.log(arr1);//->[ 'item1', 'item2', 'item3' ]
// console.log(arr2);//->[ 'item1', 'item2' ]


