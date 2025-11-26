// You can create your own errors

// console.log('I am before the error')
// throw 'I am the error'
// console.log('I am after the error')

// This error is just a string, it does not have a type. If you try to cathc the error it will just show a string, wheras with a regular error, it shows the type of the error when you catch it.

// try{
//     throw"I am the error"
// }catch(e){
//     console.log('there was an error:',e);
// }

// can use an error object (new Error), it will display it like an actual error;  Error: I am the error at 7.2 vid 9 Throwing-Errors.js:19:11, and it contails for detail about the error when using console.dir(e);



// try{
//     throw new Error("I am the error");
// }catch(e){
//     console.log('there was an error,',e);
//     console.dir(e);
// }

// console.dir(e); will show more info about the error.It will show the message('I am the error') and stack, and the name is Error(after new).

// can change the nw Error to something else like TypeError.

// try{
//     throw new TypeError("I am the error");
// }catch(e){
//     console.log('What kind of error',e.name);
//     console.log('What kind of error',e.message);
//     console.log('What kind of error',e.stack);
// }

// This seperates the info in console.dir();

// show What kind of error Error, What kind of error I am the error, What kind of error Error: I am the error at file:///C:/Users/hassa/Desktop/7.2/7.2%20vid%209%20Throwing-Errors.js:29:11

// when would you use this? 
// When you want cusotm feedback, when you want to hide errors from users, it is a good fall back when things might go wrong when working with more unreliable things like connecting to a data base(you can provide specific feedback instead of a generic error, specifiy exactly what the problem is), Hide over complicated error messages and replace them with something that is easier to understand, to be put in areas of the code that you anticipate could produce an error.
// Ex there is a function to get the month name nad if it goes beyond the 12th monthm you write else{throw new Error('Month out of bounds')}

 

function DateError(message){
    this.message=message;
    this.name="DateError";
}

function getMonthName(mo) {
    if(typeof mo !== "number"){
        throw new DateError('Month number must be a number')
    }
    mo = mo-1 //to account for index position
    const months = ['1','2','3','4','5','6','7','8','9','10','11','12'];
    if (months[mo]){
        return months[mo];
    }else{
        throw new DateError('Month out of bounce');
    }
}

// Most of the time, you just need to know, throw new Error( )
