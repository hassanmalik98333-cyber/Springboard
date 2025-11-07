// will learn how to change the element so that it is constantly changing colors.
// will first start with one color.

function randomRGB() {
    const r = Math.floor(Math.random() * 256)
    const g = Math.floor(Math.random() * 256)
    const b = Math.floor(Math.random() * 256)
    return `rgb(${r},${g},${b})`
} // this will give a random rgb

// const h1 = document.querySelector('h1')



// setInterval(function(){
//     h1.style.color = randomRGB();
// },500)

// now will make each letter change independantely, do do this you will have to wrap each letter in the html element(in this case each letter of the h1) in a span tag.

const letters = document.querySelectorAll('.letter');


setInterval(function(){
    for(let letter of letters){
        letter.style.color = randomRGB();
    }
    
},1000) 

// the javascript code is done, to make the transition of colors smoother, you will need to use CSS. Just give each letter a transition property in CSS.