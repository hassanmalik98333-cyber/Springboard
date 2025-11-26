// functionThatDoesNotExsist();
// console.log('did we make it?');

// //This will produce ReferenceError: functionThatDoesNotExsist
// //Can wrap it inside of a try catch. This is usually only put inside code that you expect can cause problem. Put it in to catch the error.

// // ex bellow.

// try{
//     undefined.pop()
//  } catch(err){
//         console.log('Something went wrong!',err)
//  }
// console.log('did we make it?');

// //you do not need the err parameter, this err parameter will show the error: functionThatDoesNotExsist is not defined at TryCatchError(7.2 vid 7).js:10:5

// // with this try catch, the code will continue if the part that try catch is wrapped in does not work.

// // the parameter is optional but reccomended so that the error can be known, and it will display the type of error.

// function displayInitials(user) {
//     let firstNameLetter = user.firstName[0].toUpperCase();
//     let lastNameLetter = user.lastName[0].toUpperCase();
//     return `Hello ${firstNameLetter}.${lastNameLetter}`;
// }

// console.log(displayInitials({firstName:'Hassan',lastName:'Malik'}))

// // This works fine if everything is inputted correctly but will show an error on the slightest mistake like say fistName instead of firstName. Can add try catch to make it so that if there is an error, a custom error message like "you have an invalid input" displays instead of the normal error pop up and so that the code doesnt just stop working.

function displayInitials(user) {
    let firstNameLetter; //learned something new, can do this.
    let lastNameLetter;
    try{
         firstNameLetter = user.firstName[0].toUpperCase();
         lastNameLetter = user.lastName[0].toUpperCase();
    } catch(y) {
        return "Invalid input";
    }
    return `Hello ${firstNameLetter}.${lastNameLetter}`;
}

console.log(displayInitials({firstName:'Hassan',lastName:'Malik'}))

// // pay attention to let firstNameLetter and let lastNameLetter, the code only works like this

