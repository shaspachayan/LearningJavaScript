// intro to for loop 
// print 0 to 9

// for (let i = 0; i <= 9; i++) {
//     console.log(i);
// }

// console.log("value of i is ",i);

//=================================
// for loop example 

// let total = 0;

// let num = 100;

// for (let i = 1; i <= num; i++) {
//     total = total + i;
// }

// console.log(total);

//=======================================
//break keywork
//continue keyword 

for (let i = 1; i <= 10; i++) {
    if (i === 4) {
        break; // when the value of i will be 4 , the if loop will break, so op will be 1 to 3
    }

    console.log(i);
}

for (let i = 1; i <= 10; i++) {
    if (i === 4) {
        continue;
    }
    console.log(i); // here, when the value of i is 4 then the if loops turned on , as continue ,it will come out from if , go directly to for loop. so 4 will not appear in op. 1 to 3 and 5 to 10 
}
console.log("hello there");