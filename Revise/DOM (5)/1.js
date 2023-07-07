// DOM: Document Object Model
// Basically the HTML in terms of browser we call it is as DOM. The h!, body ,title, p , and others elements of html are called as DOM elemwnts.
// Through js we can perform aka manipulate all the elements of HTML aka DOM elements, this process is called as DOM manipulation.


alert("Hey there I am a alert");// used when we need to show a perticular massage to user on some click. 

prompt('What is your name?'); //when we need a aditional input field to take input from user then we use prompt.it just a alert which include a additional input bar for taking massage.It takes the string as a input and return it as a string.We can store the string in a variable and use it further.
const name = prompt("What is your name? ", "Default name"); // we can add a default name to it, by like this.


// Similarly we have 2 objects what we can acess in 1) windoe level, now what is windoe level? 
// the browser is window, basically what ever we do with browser is doing with window.lets see a example:

window.console.log("Yeah, Everything is a part of Window!"); // basically max methods what we use to manipulate is a method of window. We dont need to mention it, browser can identify the objects of window.

// The alert method is also a method of window, again we dont need to mention the window part to use the alert

// 2) Document: It is also a part of window. So if we console.log the Document then we can see that our code is visible to us. Basiccaly whatever we write is a part of document and it stores it.
// so what is the use of document?? we can acesss our own code like if we work on a html and we need the title of html from head section, then we can easily acess it through (document.title), not only acessing but we can change it also...

const fullName = prompt(" Enter your name: ------", "Ralph Sege");
document.write = ("HEllo, Do you understand how DOM works " + fullName);