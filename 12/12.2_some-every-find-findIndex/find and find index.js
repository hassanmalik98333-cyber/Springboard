const scores = [
	0,
	0,
	0,
	0,
	0,
	0,
	0,
	0,
	55,
	59,
	69,
	73,
	73,
	75,
	79,
	83,
	88,
	91,
	93
];

// use find returns the first value in an array that matches the condition. 
// To find alll, just use filter.


let passed = scores.find(score => score > 75); // you get 79.

// another one is called find index, it will run a callback on every element like all the methods, it returns the index of the first value that meets the condition.

let passedIndex = scores.findIndex(score => score > 75); // index is 14

// use findIndex when indexOf does not work.

// will split the array into two sub arrays one with people who did not show up (an array with     all the zeros) and those who did(an array with any score >0). Can use findIndex(I used filter).

let noShow = scores.filter(score => score === 0); // index 0

let showedUp = scores.filter(score => score > 0); // index 8

let listOfshowOrNoShow = [noShow,showedUp];

// the one shown in the vid:

function partition(arr,pivot){
    const pivotIdx = arr.findIndex(el => el > pivot );
    const left = arr.slice(0,pivotIdx);
    const right = arr.slice(pivotIdx);
   return [left,right];
};//same result as mine but in a function so can use other arrays other than score.

// !! Writing find and find index !! //

