// ********************
// The arguments Object
// ********************

// rest and spread are different operators but they share the same sytax to write the operator.

// rest and spread use ... 

// before rest and spread people used the argument object.

// sometimes you want to make a function where you can have an unlimited number of arguments.

// Math.max accepts a very large amount of arguments => Math.max(1,2,3,4,5,6,...1000), to recreat this you would need to use an arguments object.

// inaise of every function except for arrow functions, you have access to a special keyword called arguments. Ex bellow:

function sum(){
    // arguments.reduce((sum,val) => sum + val);// does not work because arguiments is not an an actual array.
    // in the past, peole would turn arguments into an array:
    const args = Array.from(arguments);
    return args.reduce((sum,val) => sum + val);
};

// this is not that hard, it does not work in an arrow function.

// to get something like arguments in an arrow function, you can use rest.

function max(){
    const args = Array.from(arguments);
    return args.reduce((max,val) => val > max ? val : max);
};


// *****************
// The Rest Operator
// *****************

// both rest and spread use the same operator: ... but they do different things depending on the context.

// When the ... is part of a function definition, it is called the rest operator. function doSomething(...parameter){} ex bellow:

function sum2(...nums){ // technically this is spread
 console.log(nums);
 if(!nums.length) return undefined; // if the user types sum2() it returns undefined
return nums.reduce((sum,val) => sum + val);
};
// if you pass in sum2(1,2,3) ... will turn it into an array [1,2,3] instead of doing  const args = Array.from(arguments);

const sum3 = (...nums) => {
    if(!nums.length) return undefined;// error handling
    return nums.reduce((sum,val) => sum + val)
};
// works in an arrow function.

// so far I have been using ... to collect every argument. Can also use it to collect remaining arguments. 
// can start off with names parameters then use the rest operator (first, ...more)

function makeFamily(husband,wife, ...children){
    // function child(){
    //         if(children.length > 0){
    //             return children
    //         }else{
    //             return 0;
    //         };
    //     };
    return {
        husband:husband,
        wife:wife,
        children: children.length > 0 ? children : 0 // way shorter than my solution.
           
    };
};

function filterByType(type, ...values){
   if(type === 'number'){
    return values.filter(val => typeof val === 'number'); // ***remember typeof***
   }else if(type === 'string'){
     return values.filter(val => typeof val === 'string');
   }else if(type === 'boolean'){
     return values.filter(val => typeof val === 'boolean');
   }else{
    return'type must be: number, boolean, or string';
   };
};

// type of could be useful.

// a much shorter way of doing this bellow(minus the final return):

const filterByType2 = (type,...vals) => vals.filter(val => typeof val === type);

// is hard to use rest when it is not the last parameter(so make sure that it is the last one).



// *********************
// spread Function Calls
//**********************

// can use spread is a couple of different contexts function max(...something) this is spread not rest, function max(a,...something) this is rest. you can us spread in an array [...something] or an object {...something}

// ex bellow:

const names = ['Mary','Colt','Hassan','Zain'];

function takesFour(one,two,three,four){
    console.log(one);
    console.log(two);
    console.log(three);
    console.log(four);
};

takesFour(...names); // this takes it out of the array and makes each name an argument in the function.

const nums = [4,5,123,88,0.9,200,34,500,1];

const max2 = Math.max(...nums);// gives the max value in the array because the array was spread, if you Math.max an array(Math.max(nums)), it will not work(this does because it was spread),

// recall the filterByType functions above:

const things = [1,2,3,4,'d','Hassan',true,false];

// you could do:

const thingsFiltered = filterByType('number',...things);// things was spread so that it works in this function(which does not accept and array, but this was spread).

// spread is kind of the opposite of rest.

// spread is not limited to arrays, it just need to be an itterable.

// Can itterate a string.

console.log('HELLO'); 
// vs
console.log(..."HELLO");// it is spread here(prints each indivudual letter seperately, not together like above).

// spreading the string is the same as:
console.log('H', 'E', 'L', 'L', 'O'); // same as console.log(..."HELLO");

