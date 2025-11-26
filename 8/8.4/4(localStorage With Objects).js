// Everything in local storage is a string, which can be tricky when working with an array or and object.

const preferences = {
    fontSiz: '1px',
    favColor: 'teal',
    status: true
}
 
// localStorage.setItem('preferences',preferences); // with this I am setting the the value for localStorage.preferences to be the object I made above. The problem is that it converts it to a string and the result I get back is '[object Object]'

// need to convert the array or object to a special string format called JSON(JavaScript Object Notation). It is not only limited to JS, it also works with other languages. 2 methods that you need to pay attention to:

//1. JSON.stringify - used to convert JS to JSON
//2. JSON.parse - parses a string as JSON 

// JSON.stringify({a: 1, b:true}), JSON.stringify will convert this object(or an array) into a string. Also works for an array that has an object within. 

localStorage.setItem('preferences',JSON.stringify(preferences));// with this when you look at localStorage.preferences, it will show the object in string format.

// to turn it back into an object use the second method JSON.parse.                               JSON.parse(localStorage.preferences), will return the original object that was stringified using JSON.

// even if I comment all of this out, the localStorage will remain in the web page.

// EX of turning the backgroundColor of the page to the favColor key in the local storage preferences object:

const {favColor} = JSON.parse(localStorage.preferences);// can use one of the keys as a variable and it will use that key.

document.body.style.backgroundColor = favColor; // can also make the variable anyting like obj, then do obj.favColor.
