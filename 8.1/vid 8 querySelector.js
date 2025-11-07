// querySelector accepts a string which is a valid CSS selector
// pretty much only use this instead of getElementById or getElementsByClassName, ect...
// ex. to select and id: document.querySelector('#main'), to select all h2 with a particualr class name document.querySelector('h2.section-heading').
// Must note that querySelector only selects the first element that matches the css selector.



// querySelectorAll returns all not just the first document.quertSelectorAll('li') will select all li

//rememberthere are different types of input (text, range, ect...), so if you just select input, it will only show the first inut in the page, so you have to be specific. How to be specific is down bellow.

// document.querySelector('input[type="range"]') or                               document.querySelector('input[type="text"]'), ect...

//!! querySelectorAll !!

// document.querySelectorAll('input) will select all inputs on the page( it is technically called a NodeList).
//document.querySelectorAll('h3.section-title.country) will select all h3's which have both the class names section-title and country.

// you can do complicated selectiongs that are hard to replicate like to select the hr that is a direct child of body. document.querySelectorAll('body > hr')

// can use CSS psuedo selectors like: document.querySelectorAll(':not(p)') will select everything that is not a paragraph.
// document.querySelectorAll('h2:nth-of-type(3)') this will give the third h2 on the page.