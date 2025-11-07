// you can change CSS on the DOM, the first one to look at is called the style property

// let h1 = document.querySelector('h1'), if you do h1.style, you get an object which shows tons of CSS properties. You can go to the CSS property like color and change it.

// note even if you change the CSS property in the css editor(in vs code or anyother code editor) it will still appearblack in the DOM. This is because h1.style only contains the inline styles (the ones that are in line on html).

// you can also change it by doing h1.style.color = 'red' (or a hex code or whatever just has to be a string). If you look at the html oce you do this, it will update the html with an inline style.

// the javascript version of the css property is different, in JS it is camel case. ex  css: background-color, in JS it is backgroundColor.

// not that useful because most of the time it css will be done in a style sheet not inline. Only useful if you want to update a single property.