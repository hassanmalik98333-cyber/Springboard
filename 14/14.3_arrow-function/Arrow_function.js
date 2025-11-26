// !! into to arrow functions !! //

// ideal for shortening callbacks

// they cannot be named

// function decloration is a function that is declared normally. function expression is one that is saved to a variable.

// arrow functions do not replace function declorations. Can just write it in a variable to do the same thing. Basically arrow functions cannot have names, but if you store it in a variable, it will have a name(the variable name).

const add = (x,y) => {return x+y}; // same thing as bellow.

// const add = function(x,y){return x+y};

const nums = [2,3,78,6,104,99,23];

// let max = (arr) => arr.reduce((num,nextNum) => {
//     if(nextNum>num){
//         num = nextNum;
//     };
//     return num;
// }); // another way to write this bellow:

let max = (arr) => arr.reduce((num,nextNum) => {
    return Math.max(num,nextNum);// learned new way to get max, works for Math.min as well.
});

// so far it is not much shorter(for now).



// **********************
// Arrow Functions Syntax    
// **********************

// will see shortcuts

// if you have one parameter, you do not need brackets.

const q = [1,2,3,4,5].filter(num => num>3);

// how to write an arrow function that has no parameters:

// const greet = () => {return 'hello'}; // can write this shorter:

const greet = () => 'hello'; // without the {} it would automatically return

const greet2 = () => console.log('hello');

// as seen above, SOMETIMES you can leave off the word return. And you can leave off {} for very simple functions.

const squared = [1,2,3,4,5,6].map(num => num ** 2 );

// no return and brackets only works for single expressions nomultiple.

const dailyRainTotals = [ [ 1.2, 0.35, 2.2 ], [ 1.7, 0.6, 0.1 ], [ 2.5, 0.9, 1.5 ] ];

// turn this into an array that has the sum of all the inner arrays.

//  const sumOfRainTotals = dailyRainTotals.map(hourlyRainTotals => {
//     return hourlyRainTotals.reduce((sum,inchesOfRain) => {
//          return sum + inchesOfRain;
//     });
//  }); 

// this can be done without {} and return because both map and reduce are single expressions in this case.

  const sumOfRainTotals = dailyRainTotals.map(hourlyRainTotals =>
     hourlyRainTotals.reduce((sum,inchesOfRain) => sum + inchesOfRain ));

//imagine this on one line(the whole of reduce is the single expression of map).


// **********************
// Arrow Functions Gotcha   
// **********************

// function makeMath(num){
//    return {doubled : num*2,squared: num**2};
// }; 

//without arrow function, with bellow:

const makeMath= num => ({doubled: num * 2, squared: num ** 2});

// without the () it would not work(need () for object literals).

// the next gotcha has to do with the keyword 'this'(not learned yet).

// Arrow functions do not have their own 'this' context.

// this will sometimes have a different value with an arrow function compared to normal.

// you should not use arrow functions in an object method or when you need your own keyword this.

const cat = {
    name: 'Bubs',
    meow: function(){
        return `${this.name} says MEOW!!`;// 'this' refers to the object. 
    }
}; // call cat.meow() to see the message.

const catArrow = {
    name: 'Bubs',
    meow: () => `${this.name} says MEOW!!`
    
};  // 'this' does not work the same way with an arrow function. ${this.name} evaluates to undefined(because it references to the global window object unlike 'this' ins a regular function).

// own note: hoisting is relavent here as well, If you do function doThing(), you can call it in code above where it is declared. You can't with arrow functions (because they are anonymous functions assigned to a variable)(and var does not fix this).



// *********************
// Arrow Functions Recap
// *********************

// Babel is a JavaScript compiler. It converts modern JS to old browser compatible JS.

// Babel is most commonly used as a command line tool.



