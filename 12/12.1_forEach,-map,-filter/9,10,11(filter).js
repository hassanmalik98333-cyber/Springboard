// filter will make a new array where it will filter based on a certain condition.

// creates a new array, loops through existing array, runs the callback on every value in the array, if the callback returns true, that value is pushed to the new array. ex bellow:

const letters = ['a','b','2','b','c','d','e','f','g'];

const newLetters= letters.filter(letter => letter ==='b');

// let newLetters= letters.filter(function(letter){
//     return letter === 'b';
// }); // this is thesame as above just longer, above is the newer shorter version.

// will itterate through the letters array and filter only the values which meet the condition letter === 'b' and will return ['b','b'] as these are the only values which meet the condition. 

// can also do != or !== as I did in the todo list assignment.

// remember you can use an already existing function as a callback.

// !! 10: map and filter !! //

let allCheckboxes = Array.from(document.querySelectorAll('input[type="checkbox"]'));

// you can do allCheckboxes[i].checked, if the checkbox is checked it will return true.

// can use filter to make anarray of only checked checkboxes:

// const checked = allCheckboxes.filter(box => box.checked === true);

//same as 

const checked = allCheckboxes.filter(box => box.checked);//box.checked is the same as box.checked === true.

//same as:

// const checked = allCheckboxes.filter(function(box){
//     return box.checked;
// });

// what if you wanted to not only know which ones were checked but also what the actual todos are:


let checkedTodo = checked.map(checkbox => checkbox.parentElement.innerText);

// same as:

// let checkedTodo = checked.map(function(checkbox){
//     return checkbox.parentElement.innerText;
// });

// can chain it together using a function:

function extractCompletedTodos(){
    return allCheckboxes.filter(box => box.checked).map(checkbox => checkbox.parentElement.innerText); //chained together, works well.
};

// combining filter and map can really help find info and manipulate things.

//!! 11:Writing filter !!

function myFilter(arr,callback){
    const filteredArray = [];
    for(i=0;i<arr.length;i++){
        if(callback(arr[i])){ //remember saying if(this) is the same as if(this===true).
          filteredArray.push(arr[i]);
        };
    };
    return filteredArray;
}; //should be the same as the built in .filter()


let newLettersArray = myFilter(letters,function(letter){
         return letter ==='b';
});

let otherLetter = myFilter(letters,function(letter){
    if(i>0){
    return i % 2 === 0;
    };
}); // remember this for caesers cipher.


// can go through everyother value by using i % 2 === 0, this checks if i is in the even position.





