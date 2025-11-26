// for every method including this you pass in a callback. 

// map calls that method or that function once per element in the array.

// map will take the return value and build a new array(a new empty array).

// it itterates through your array and runs a callback function for each value in the array.

// it adds the result of that callback function to the new array and then returns that new array.

// map will always return a new array of the same length as the original array.

//ex .

let numbers = [1,2,3];

// numbers.map(function(value,index,array){
//     console.log( value *10);
// });

// can also write 

const newNumbers =numbers.map((value,index,array)=>{// can be named anything the first one (value) represents each elements of each index... the same as forEach.
    return value *10; // make sure it returns or it wont givean array.
});

console.log(newNumbers); // shows an array  [10, 20, 30]

// ex 2.

const todos = [
    {
        id: 1,
        text: 'walk the cat',
        priority:'high'
    },
      {
        id: 2,
        text: 'walk the chicken',
        priority:'medium'
    },
      {
        id: 3,
        text: 'walk the cow',
        priority:'low'
    },
      {
        id: 4,
        text: 'put out fire',
        priority:'very high'
    },
];

// if you wanted to create a new array that only consists of the text keys in the objects, you could use map to do that.

let todoList = todos.map(todo =>{
    return todo.text; //this returns it as an array
});

console.log(todoList);

// you can use map to get all of the arrays in the html page and put them in an array.

const links = document.querySelectorAll('a'); // links is not a an array so you cannot use map with it, but it can still be turned into one using Array.from()

Array.from(links); // with Array.from you can pass in an itterable an this will turn it into an array.

let linksArray = Array.from(links).map(link =>{
    return link.href; // .href to get the link you can also use getAttributeBy('href');
});

console.log(linksArray);

// can also do const links = Array.from(document.querySelectorAll('a')); to get the array right away.