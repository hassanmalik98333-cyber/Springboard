// forEach loops through an array
// runs a callback function for each value in the array and then returns undefined
// forEach will always return undefined- no matter what.

const colors = ['teal','cyan','peach','purple'];

// colors.forEach(color =>{
//     console.log(color);
// }); // not in the video, this is what i learned by doing the todo list assignment.

//  colors.forEach(console.log);// this will console.log every color and the index position as well as the entire array every time.
// // this is a way to see just what forEach does. forEach returns(console.logs) the index value('teal'...), the index position and the entire array, this is what forEach loop does.

// colors.forEach(function(value,index,array)); you can do one or 2 or all of these parameters, the first one loops through the each value, the second gives the index position and the third gives the entire array, and they can be named what ever you want. remember the todoList assignment I only used the value parameter with todoArray.forEach(todo =>{}), the todo here is the value parameter so with this, it would only loop through the values stored in the array.

// colors.forEach(function(color,i){
//         const caps = color.toUpperCase();
//     console.log(`At index ${i}, ${caps} `);
// }); // or

colors.forEach((color,i) =>{
    const caps = color.toUpperCase();
    console.log(`At index ${i}, ${caps} `);
}); 

// can pass in an existing function that you defined, into the forEach loop with the paramenters of value, index and array or what ever you name them.

const prices = [30.99, 19.99, 2.50, 99.00]; // can use forEach to sum all of this, and other array method which are discussed after.
let total = 0;

prices.forEach(price => {
    total += price;
});

console.log('Your total price is:',total +' $');

// can do this with a for or for of loop as well. the reason forEach exists is because for of did not exist(it was around before a for of loop). The difference is that it is a lot harder to call a function with a for of loop compared to forEach. For something like this for of is cleaner.

// !! 4(Writing forEach) !!

// re-created forEach(custom forEach rather than built in):

  function forEach(arr, callback){
    for(let i = 0; i< arr.length; i++){
      callback(arr[i],i,arr); // like the built in forEach
    };

  };

  forEach(colors, function(color,i){
    console.log(color,i,colors);
  });// this is a custom forEach, the build in one the one you were using before.

// this whole thing is the same as(the built-in one):

// colors.forEach((color,i) =>{
//     console.log(color,i,colors);
// }); // this is is way easier to understand, it is better to just use this built in forEach

// the only reason to use a custom forEach if if you want to modify how it behaves slightly.

// forEach is simpiler but for of loop is overall better to loop through an array, can get more info from chatgpt.


                        
