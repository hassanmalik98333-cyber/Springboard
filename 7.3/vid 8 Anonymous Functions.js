// Anonymous function is a namless function, we can store it in a variable and is frequently used to pass to other functions.



function greet(){
    console.log('hi');
}

function diss(){
    console.log('you are bad')
}

function doubleDiss(){
    diss()
    diss()
} 


// greet()
// setTimeout(doubleDiss,1000); 
// setTimeout(diss,2000);
// greet()

//If you want to call diss twice in the timeout, you can use a doubleDiss function, but you can also use an anonymous function.

//Ex of anonymous function down bellow

// greet()
// setTimeout(function(){
//  diss() 
//  diss()
//  diss()
// },1000); //This is anonymous function, cannot call it again.
// greet()

// another ex

function doTwice(func){
    func()
    func()
} //can put an anonymous function as func, ex down bellow.

doTwice(function () {
    console.log('hi')
    console.log('bye')
}) //will call this anonymous function twice

//Can store an anonymous function inside of a variable

const one = function(x,y) {
   return x+y
} //one(x,y) to activate the function stored inside.

//Can store anonymous functions inside of an array
