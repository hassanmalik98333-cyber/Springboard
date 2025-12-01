
// // ******************************************************
// // 2,3: Destructuring Objects, More Destructuring Objects
// // ******************************************************




// // can extract certain values into new variables

// const teaOrder = {
//     variety        : 'oolong',
//     teaName        : 'winter sprout',
//     origin         : 'taiwan',
//     price          : 12.99,
//     hasCaffeine    : true,
//     quantity       : 3,
//     brewTemp       : 75
// };


// // const price = teaOrder.price;

// // const quantity = teaOrder.quantity;

// // const teaName = teaOrder.teaName;

// // const totalTeaOrderPrice = `${teaName} is $${price * quantity}`;

// // this is the old way and is kind of annoying to type teaOrder.something all the time, new way down bellow:

// const {price, quantity, ...others} = teaOrder; 
// // looks in the teaOrder object for the names in the {}, and the name in side of{} must be in the object.

// // can use the rest operor with destructuring(look at others above), it returns, the rest in an object.               {variety: 'oolong', origin: 'taiwan', hasCaffeine: true} 


// const {brewTemp = 70 } = teaOrder; 
// // this is a default(it it does not exist in the object).

// // if you instead had brewTemp in the object set to a different value, it will automatically become that value, and ignore the value that you set in the cosnt {}.

// // another thing that you can do with destructuring, is to give variables a new name.

// const {teaName: tea} = teaOrder;
// // with this the variable name is tea(not teaName) and it has the same value('winter sprout').  

// // you can rename and add a default at the same so const {brewTemp:temp = 70 } = teaOrder;

// function checkout(tea){
//      const { quantity = 1, price} = tea;
//      return `Total cost: $${quantity * price}`;
// }; 
// //checkout(teaOrder) = 'Total cost: $38.97'
// // quantity = 1 is there to default just in case that it is not in the object. 



// **********************
// 4: Array Destructuring
// **********************                     

// unlike object {teaName: tea}, for arrays the name has no asociation with what is in the [], it is based on index position [first, second, ...others] = name of the array.

const students = [
  {name: "Alice", gpa: 4.6},
  {name: "Bob", gpa: 4.4},
  {name: "Charlie", ga: 4.3},
   {name: "Charles", ga: 4.2}

];

const [topStudent, secondBest,,lastPlace] = students; // this will get the first and second value in the array.

// you can skip elements by using another coma
// can also use rest

const [first, ...losers] = students