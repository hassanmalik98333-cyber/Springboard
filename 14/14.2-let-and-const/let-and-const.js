// like var let can be reassigned but not redeclared in the same scope.

// let is not included in the window object unlike var.

// if you use var to create a variable called console, it will you will no longer be able to access window.console, it will earase it.

// With let it will not be earased if you name a variable console, you can still access window.console(still do not name it console).

// the let keyword creates a block-scoped variable: a variable that only exists inside a code block.

// a code block is basically anythig inside of {} except for an object literal({firstName:'Hassan', lastName:'Malik'}, this is an object literal). 

// Var is scoped to the entire function(function scoped) where as let and const are scoped to the {}

// in the past for loops used to look like this: for(var i=0; i<3; i++) the problem with this is that i will persist outside of the loop, with let it is limited to the scope.

// !! const !! //

// everything I already learned plus:

// const like let is block scoped.

// !! Variable hoisting !! //

console.log(greet);
var greet = 'hi';
// with var, if you console.log the variable before it is declared, it will give undefined. If you do this with let or const, it will give an error(let and const variables are not hoisted).

// this has to do with variable hoisting. When your code is compiled, what happens is that the variable declorations declared with var is run first before the initialization. Think of it as the variable without the value is moved to the very top of the javascrip file(without the value, so it is undefined, so var greet; is at the top without the value of 'hi) and when it runs through the code, it only becomes defined with the value when you the code gets to the part of the code where the variable is declared(initialized) by the user, until then it is undefined.

// !! What to use !! //

// never use var unless you need to work on an old code base.

// prioratize const(your go too), unless you need let for reasigning a variable.

// use const for objects and arrays.

// there are companies which only allow const(this would require more advanced code).