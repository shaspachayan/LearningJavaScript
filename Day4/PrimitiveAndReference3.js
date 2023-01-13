// primitve vs reference data types


//primitve datatype // In primitive dt a stack stores all the value individually,so when num1 =6 is assigned,it holds place in stack memory.One of the key point is when num2 = num1 is declared then num 2 is assigned on the top of the num1 index where num2 holds the same value as num1.So thats why if we bring change in num1 it doesnot occure at num2.Inshort if the datatype uses only stackmemory then that dt is premitive dt.

// let num1 = 6;
// let num2 = num1;
// console.log("value is num1 is", num1); //->value is num1 is 6
// console.log("value is num2 is", num2);//->value is num2 is 6
// num1++;
// console.log("after incrementing num1")
// console.log("value is num1 is", num1);//->value is num1 is 7
// console.log("value is num2 is", num2);//->value is num1 is 6


//reference types //It uses two type of memory, stack memory holds the varible with a address where the value is stored i.e in reference type a 2nd type of memory holds the value i.e. heap memory. Heap memory holds the value, it has a proper address for identifying (or you can say for identifing from stack).So when array1 is declared the values are stored in heap memory and the array1 varrible holds the address of value in stack, so when the value is updated it changes directly to heap, so when the array2 is printed then it takes only the address from stack and prints the value from heap.
// if it looks confusing , look at the image. [time stamp from videoimage.png :-3:15:38]
//array
let array1 = ["item1", "item2"];
let array2 = array1;
console.log("array1", array1);//->array1 [ 'item1', 'item2' ]
console.log("array2", array2);//->array2 [ 'item1', 'item2' ]
array1.push("item3");
console.log("after pushing element to array 1");
console.log("array1", array1);//->array1 [ 'item1', 'item2', 'item3' ]
console.log("array2", array2);//->array1 [ 'item1', 'item2', 'item3' ]