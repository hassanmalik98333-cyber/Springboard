// *************************
// 2:Shorthand Property Names
// **************************

function person(first, last, age){
    return {
        first:first,
        last :last,
        age  :age
    };
};
// same as
function person2(first, last, age){
    return {first, last, age,};
};
// if the key and value are the same(parameter in this case, since it is a function), you only need to type it once.


// *******************
// 3:Shorthand Methods
// *******************

// an object methond is basically a function as a value to the key

const mathStuff = {
    x      : 200,
    add    : (a,b) => a+b,
    square : a => a*a
};

// to use the function in the key do mathStuff.add(2,3), the ES2015 short hand is:

const mathStuff2 = {
      x      : 200,
    add(a,b){return a+b},
    square(a){a*a}
};
// arrow functions do not work here


// *************************
// 4:Computed Property Names
// *************************

// 'periwinkle' '9c88ff'
// 'bright ube' 'D6A2E8'

// will make an object where the user can search up the color name and it will show the hex code, or the user can search up the hex code and it will show the color name.

const color = {
    periwinkle   : '9c88ff',
    '9c88ff'     : 'periwinkle'
};
// color['9c88ff'] ==> 'periwinkle'
// color['periwinkle'] or color.periwinkle ==> '9c88ff'

// now make a function that will create an object like this

const pickColor = (col,hex) => ({[col]:hex, [hex]:col});
// basically the shortest way based on ES2015(computed property)                    

// prior to computed properties(ES2015):

function pickColor2(col, hex) {
  var obj = {};
  obj[col] = hex;
  obj[hex] = col;
  return obj;
};

// can also havedynamic key names:

const mystery = {[6+7]:'thirteen'};

