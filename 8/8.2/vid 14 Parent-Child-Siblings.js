// If you want to know the parent of any element you can use parentElement.

let div1 = document.querySelector('div'); // div1.parentElement will give       <section></section>.

// can save that to a variable

// const section = div1.parentElement;

// section.parentElement will give the body.

// useful for example if you have a button element inside of one of the li's and you want to remove that specific li that the button is nested in via a click event(not learned yet) using .remove().

// the method .children will give the collection of children of a specific element.

// can access the fist child using .firstElementChild and the last child    using        .lastElementChild.

let ul = document.querySelector('ul');;

// to access the section :

const section = ul.parentElement.parentElement; // parent element of ul is the div and the parent element of that is the section.

// can type on here or the console section.children to see the children, then to access the first child type, section.firstElementChild and last for last

// you can use previousElementSibling or nextElementSibling to select adjacent elements. For example if on the html page there is an element that is a sibling inside of a parent element (that is before or after the selected sibling), you can select that adjacent sibling. If you want the paragraph that is above the ul sibling, you would type(in this case)  ul.previousElementSibling

let p = document.querySelector('p');

// if you did p.previousElementSibling it would give null because p is the first child of the parent element.

let h1 = document.querySelector('h1')

// can do

let div = h1.nextElementSibling.nextElementSibling;// 2 siblings away in this case, can go on and on and on and on and on... can also chain on previousElementSibling(useless).