// very versatile(can do so many things with it).

// the name reduce is not that explanitory it is unclear.

// it takes an array of elements and ti reduces them down to a single value. Ex summing every element, could create an object based off of the array, find the max, min, average, etc... it does a lot.

const nums = [20,30,50,12,-2,45,99,19,22,85];

// will first find the summ of all of these elements without reduce and then with reduce:

// mine:
function sum(arr){
let sum = 0;
for (let num of arr){
    sum+=num;
};
 return sum;
};

// find min not using reduce:

let min = nums[0];
for(let i = 1;i<nums.length;i++){
    if(nums[i]< min) min = nums[i]; // same as { min = nums[i]};
    // with nums[i]< min, the loop scans the entire array and then min = num[i] when it is the lowest.
    //nums[i]> min would look for the greatest value.
};
// how many times does each letter occur in the string without reduce:
const str = "lollapalooza"; 
const charFreq = {};
for(let char of str){
    if(charFreq[char]){
        charFreq[char] += 1;// adds one if it is already in the object
    } else{
        charFreq[char] = 1; // if not in the object, then adds it and makes it equal to one.
    };
};

// !! using reduce !! //
// how reduce works:

// it accepts a callback(like all methods before) and an optional second parameter
// it itterates through the array and runs the callback on each value in the array.
// the callback has 2 parameters: the first parameter is the value you are trying to reduce down to called the 'accumulator' ( the min, max,total, etc...). The second parameter is each value in the array.

//whatever is returned from teh callback, becomes the new valueofthe accumulator.

// ex: 
//     evens.reduce(function(accumulator, nextValue){ // the parameters can be named anything.
//                 return accumulator + nextValue;
//     }); // second optional parameter goes here

// if you dont add in a second optional parameter, accumulator will go with the first value in the array(can change that with the second parameter).

// as it itterates through the array, the return value becomes the new accumulator.

// ex:

const words = ['hello', 'I', 'love','you'];

let result = words.reduce((accum, nextWord) =>{ 
     console.log(accum,nextWord);
     return accum + ' ' + nextWord;
});

// the first parameter accum starts as the first value in the array, the nextWord(the second parameter) starts at the very next value in the array.

const midtermScores = [70,88,93,56,64,62,94];
// how to find the min

// let lowestScore = midtermScores.reduce((min,nextScore) => {
//     if(nextScore< min){
//         return nextScore
//     } // same as else{return min};
//     return min;
// });

// can write this with a ternary operator:

let minMidtermScore = midtermScores.reduce((min,nextScore) => nextScore < min ? nextScore : min);
let maxMidtermtScore = midtermScores.reduce((max,nextScore) => nextScore > max ? nextScore : max);

// you can pass in an optional second argument and that value will be used to initialize the accumulator. 
// if you have evens = [2,4,6,8,10] and the second argument passed when you want to reduce is 10, it will not start at 2, it will start at 10, so the result will start at 12 and the last value will be different as well(plus 10). 

const finalsScores = [92,93,76,77,59,61];

const MinFinalsScore = finalsScores.reduce((min,nextScore) => nextScore < min ? nextScore : min)

// if you want to find the min overall between the midterm and finals, one way to do this is by passing a second paramenter, Ex bellow:

const minOverallScore = finalsScores.reduce((min,nextScore) => nextScore < min ? nextScore : min,minMidtermScore); // will give 56. The accumulator will start at 56.



