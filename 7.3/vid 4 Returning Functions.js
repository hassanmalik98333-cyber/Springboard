// the return value of a function can be another function

function giveBirth(){
    console.log('giving birth');
    return function cry(){
        return 'WAAAAAHHH'
    }
} 

// by writing giveBirth()() in the console you will give the arguments for giveBirth with the first () and the arguments for the function cry with the second ().

// Can capture that return value in a variable

const func = giveBirth() // func() to display 'WAAAAAHHH'

// ex

function makeMultiplyFunc(num) {
    return function mult(x) {
        return num * x;
    }
}

//This can be used effectively

const double= makeMultiplyFunc(2) //With this if you want to double 9 you can do  double(9) and you will get 18 can do the same with other like Quad...