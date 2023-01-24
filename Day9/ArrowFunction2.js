// arrow functions
// const singHappyBirthday = function(){
//     console.log("happy birthday to you ......");
// }

const singHappyBirthday = () => {
    console.log("happy birthday to you ......");
}

singHappyBirthday();

const sumThreeNumbers = (number1, number2, number3) => {
    return number1 + number2 + number3;
}

const ans = sumThreeNumbers(2, 3, 4);
console.log(ans);

// const isEven = function(number){ // if you are passing 1 parameter , then we can write the code in one line, erase function word and 2nd brackets return statement in previous line, like 23 line.. It means isEven function will take number as a parameter then it will return number%2 ===0 (here it is in boolean. )
//     return number % 2 === 0;
// }

const isEven = number => number % 2 === 0; // if there is only 1 parameter you are passing then we can avoid parenthesis, 


console.log(isEven(4));

const firstChar = anyString => anyString[0];

console.log(firstChar("Shaspa"));


const findTarget = (array, target) => {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === target) {
            return i;
        }
    }
    return -1;
}


// *** nothing different between normal function and arrow function , it only used in libreries. It has multiple applications. Good to know