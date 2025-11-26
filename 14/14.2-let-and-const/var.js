// how is var different from let and const(these are new)

// unlike let and const you can redeclare var

var name = 'Hassan';

var name = 'Malik';

// name is Malik, if you did this  with let and const, it would not let you redeclar the variable like this(only the other way, name = Malik).

let speech = 'hello';

// let speech = 'hi'; // would get Identifier 'speech' has already been declared

// to change speeck you would have to do:

speech = 'hi'; // cannot do let speech again unlike var.

// const g = 'hello';

// g = 'hi'; // cannot do this with const

// when a var variable is declared it is stored in the window object(global object in the window) (just type window and window.var_name to see). Let and const are not like this.

function sign(){
    if(true){
        var sig = 'hi'; // variables declared using var are global across the entire function. If you used const or let here, you would not beable to console.log it bellow, it would be outside of the scope(this global scope is more indusive to bugs, but it someone may want to use it sometimes)(with let and const it is easier to avoid bugs due to global function scope).
    };
    console.log(sig);
};

// with var if you name the variable wrong, you could accidently override a default name in the window object, iwth let and cont this is less of an issue. You need to be more careful with var and keep this in mind.