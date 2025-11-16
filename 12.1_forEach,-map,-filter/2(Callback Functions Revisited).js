// you can find tons of build in methods for arrays on mdn

//the way that these methods work is that you pass in a callback(a callback is a function).

// a regular function: function nameOfFunction(){}, this a called a function decloration.

//anaonymous function expression: a function stored in a variable. const variable = function(){}, notice that the function in the varialbe has no name. to execute it you need to type  variable()

function add(x,y){
    return x+y;
};


function subtract(x,y){
    return x-y;
};

function multiply(x,y){
    return x*y;
};

function divide(x,y){
    return x/y;
};

//can store these functions in an array

const mathFuncs = [add,subtract,multiply,divide]; 
// dont add () otherwise it executes the function immediately.

//to execute divide:

// mathFuncs[3](4,2) the three is the index position of divide and it is 4/2

//callback down bellow:

function doMath(a,b,mathFunc){
    return mathFunc(a,b);
};// this is a callback, another example is addEventListener

// with this you can type doMath(4,2,divide); and it will call the divide function with 4 and 2, divide here is mathFunc.

//you pass a function as an argument.

// can also do doMath with an anonymous function just like with setInterval and setTimeout.

doMath(2,1,function(a,b){
    console.log(a**b); //this is a to the power of b.
});

// more complex example

// function doAllMath(a,b,mathFuncs){ //this time you pass in an array of functions.
//       for(i=0;i<mathFuncs.length;i++){
//         console.log(mathFuncs[i](a,b)); // does not work with return as it only executes the add function
    
//       };
// };

//with a for of loop


function doAllMath(a,b,mathFuncs){ //this time you pass in an array of functions.
      for(let func of mathFuncs){
            console.log(func(a,b));  //func is the same as mathFuncs[i] in a regular for loop. 
      };
};
