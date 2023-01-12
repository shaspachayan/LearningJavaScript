// while loop 

// 0 to  9 
// dry >>>> don't repeat yourself
// let i = 0; // 1 2 3 4

// while (i <= 9) {
//     console.log(i);
//     i++;
// }
// console.log(`current value of i is ${i}`);
// console.log("Out of while loop");
//====================================
// while loop example 

let num = 100;
let total = 0; //1 + 2 +3
let i = 0;


while (i <= 100) {
    total = total + i;
    i++;
}
console.log(total); //-> 5050

let totalNumber = (num * (num + 1)) / 2;
console.log(totalNumber); //-> 5050