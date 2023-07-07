const students = ["Shaspa", "Jhon", "Jabe"]

// Introducing forEach() loop

students.forEach(value => console.log(value)); // forEach method littery works same as the normal traditional for loop.

students.map(value => console.log(value)); // the work is pretty same but the map returns a whole new array where forEach() does not.

//find method

const findName = (n) => {
    if (n === students.find) {
        console.log("Yes Student present");
    }
    else
        console.log("Not present");
}
findName("Raj ")
