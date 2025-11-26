//both some and every return a boolean

// some: runs a callback on every value in an array, and if the callback returns true for at leaste one value in the array, it will return true.

let numbers = [1,2,3,4,5];

let numExists = numbers.some(num => num > 4); // returns true.

const words = [
	'immunoelectrophoretically',
	'rotavator',
	'tsktsk',
	'psychophysicotherapeutics',
	'squirrelled',
	'crypt',
	'uncopyrightable',
	'cysts',
	'pseudopseudohypoparathyroidism',
	'unimaginatively'
];

// use some to check if any of the words in this array is longer than 25 characters

let isWordLongEnough = words.some(word => word.length > 25);

// like other methods you have access to the index and full array, the first parameter is the value in the array like other methods.

// check if any of the words contains the string of thyroid.

let doesContainThyroid = words.some(word => word.includes('thyroid'));

// every does the same thing as some but checks if all the values pass the condition

let doAllNumsEqual5 = numbers.every(num => num === 5);

// going to submit a form and add functionality using some and every

const form = document.querySelector('form');
const input = document.querySelectorAll('input');
const btn = document.querySelector('button');
btn.style.backgroundColor = 'transparent';
document.body.style.backgroundColor = 'gray';




// form.addEventListener('click', function(e){
// 	let terms = Array.from(input);
// 	let someAreChecked = terms.some(term => term.checked);
// 	let allAreChecked =terms.every(term => term.checked);
	
// 	if(e.target.tagName === 'BUTTON'){
// 		e.preventDefault();
// 		} else if(someAreChecked === false){
//           btn.style.backgroundColor = 'transparent';
// 		} else if(someAreChecked){
//           btn.style.backgroundColor = 'red';
// 		} else if(allAreChecked){
//           btn.style.backgroundColor = 'green';
// 		} ;
	
// }); // this does not work because the red condition fires first and stops the chain, preventing green from ever running. someAreChecked becomes true when all boxes are checked (because “all checked” still satisfies “some checked”). The one down bellow works.


form.addEventListener('click', function(e){
	let terms = Array.from(input);
	let someAreChecked = terms.some(term => term.checked);
	let allAreChecked =terms.every(term => term.checked);
	
	if(e.target.tagName === 'BUTTON'){
		e.preventDefault();
		} else if(someAreChecked === false){
          btn.style.backgroundColor = 'transparent';
		} else if(someAreChecked){
          btn.style.backgroundColor = 'red';
		};

		  if(allAreChecked){
          btn.style.backgroundColor = 'green';
		} ; // this overrides the red.
	
}); // this works but putting allAreChecked first also works(down bellow).


// form.addEventListener('click', function(e){
// 	let terms = Array.from(input);
// 	let someAreChecked = terms.some(term => term.checked);
// 	let allAreChecked =terms.every(term => term.checked);
	
// 	if(e.target.tagName === 'BUTTON'){
// 		e.preventDefault();
// 	} else if (allAreChecked) {
//     btn.style.backgroundColor = 'green';
// } else if (!someAreChecked) {
//     btn.style.backgroundColor = 'transparent';
// } else {
//     btn.style.backgroundColor = 'red';
// }
	
// }); 




