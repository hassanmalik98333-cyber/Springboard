// you can store functions in an array


function greet(){
    console.log('hi');
}

function diss(){
    console.log('you are bad')
}


let funcs= [greet,diss] // to exectute a function inside of ana array(down bellow)

//funcs[0]()

console.log(funcs[0]())

const myFunc= function add(x,y){
    return x+y;
} //myFunc(x,y) to execute