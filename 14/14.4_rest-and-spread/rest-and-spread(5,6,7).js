// ***************
// 5:Spread Arrays
// ***************

// // will use spread inside of array literals. rray literal is whenever you are making a new array, ex. const nums = [1,2,3];

// const palette = ['lavender berry', 'sunflower yellow', 'orchid orange'];

// // to make a copy of this without spread:

// // const paletteCopy = palette; 
// // this will not work, remember it is a reference type, so it is pointing to the exact same array, not a copy.

// const paletteCopy = palette.slice(); // copy without spread

// const paletteCopySpread = ['purple haze',...palette, 'grass green']; 
// //unlike before you can add before and after the copy easier.

// // may not seem like a big difference, but there are things you can do with the spread copy that you cannot do with the first copy. such as const paletteCopySpread = ['purple haze',...palette,'grass green']; 

// // can also do .concat and uncshift to add to the non spread copy

// const paletteCopy2= palette.slice().concat('grass green');

// paletteCopy2.unshift('purple haze');
// // clearly the spread method is easier and does not need multiple lines.

// const greenTeas = ['snow jasmine', 'fragrant leaf'];
// const oolongTeas = ['honey orchid', 'winter sprout'];
// const herbalTeas = ['african solstice', 'marshmallowroot'];
// const coffees = ['guatemala red cat', 'snow leapord blend'];

// // can use spread to create an array that contains all the teas(combine arrays):

// const allTeas = [...greenTeas,...oolongTeas,...herbalTeas];

// const withCaffeine = [...greenTeas,...oolongTeas,...coffees,'black tea','earl grey'];

// const vowels = 'AEIOU';

// const vowelArr = [...vowels,'sometimes Y']; // ['A', 'E', 'I', 'O', 'U']

// const vowelArr2 = [vowels.split('')]; // same result just different, but can do more with the above method.


// ****************
// 6:Spread Objects
// ****************

// const tea = {
//     type    : 'Oolong',
//     name    : 'Winter Sprout',
//     origin  : 'Taiwan'
// };

// const teaData = {
//     steepTime    : '3 minutes',
//     brewTemp     : '70 degrees celcius',
//     origin       : 'Japan'
// };

// // cant normally spread an object into an array, will give an error saying that it is not itterable.

// // You can copy an object using spread tho and add new key value pairs like you did before this with arrays.

// const tea2 = {...tea, price:'$22'};

// const newTea = {...tea, name:'Golden Frost'}; // this will update the name key in the tea object, and it will not work if you put it before. What comes after will override keys with the same name.

// const fullTea = {...tea,...teaData}; // combine objects
// // and again if there is a conflict with key names, the one that comes after will ovverride it.

// // if you try to spread an array into an object, it will use the index position as the key and the value as the value. Same with spreading a string into an object, it will use the index position of each value as the key for the value. Since the keys are the same(0,1,2,3...), what comes after will override it.



// ************************
// 7:Spread and Deep Copies
// ************************

const shoppingCart = [
    {
        name     : 'honey orchid',
        quantity : 2,
        price    : 13.5
    },
    {
        name     : 'African solstice',
        quantity : 4,
        price    : 25
    }
];

// this section is about creating copies of nested data structures(like objects inside of an array, or an array inside of another array) using the spread operator.

const cartCopy = [...shoppingCart]; 
// this will not make a copy, it will actually refer to the same reference(only for the actual nested arrays and objects).

cartCopy[0].quantity = 99; // this also changes the shoppingCart[0] because it has the same reference.

// it is hard to actually create deep clones in javascript(can use libraries or tools)(only does a shallow copy one level deep).

