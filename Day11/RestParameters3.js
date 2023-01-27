// rest parameters 
// it is one of the most importent parameters out there, suppose you have made a function and there are 3 parameters which id passed. But at the time of calling the function we have passed a huge amount of values then , it will be wastage of data.So the concept of rest parameter introduced

// function myFunc(a,b,...c){ // this 3 dots ... indicates remaing all the elements will be stored in it as an array(rest parameter)
//     console.log(`a is ${a}`);
//     console.log(`b is ${b}`);
//     console.log(`c is`, c);
// }

// myFunc(3,4,5,6,7,8,9);

function addAll(...numbers) {
    let total = 0;
    for (let number of numbers) {
        total = total + number;
    }
    return total;
}

const ans = addAll(4, 5, 4, 2, 10);
console.log(ans);