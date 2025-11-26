// !!FIRST CLASS FUNCTION!!

// Functions in JS are first class

// JS treats functions like other data types wheras other languages doe not.

//functions of JS are objects and can be put into a variable like other objects or pass them as an argument

// EX

function greet(){
    console.log('hi');
}

function diss(){
    console.log('you are bad')
}

function repeatThreeTimes(func){
    func();
    func();
    func();
}

// can put the greet function inside of the repeatThreeTimes functions and it will console.log "hi" three times. repeatThreeTimes(greet). This is calling a function

function repeat(num,func){
    for(let i=0; i<num; i++)
     console.log(func());
} // if you write repeat(6,greet), it will repeat the function greet 6 times('hi') six times.

//this idea of a function acting as an argument is very common in javascript.