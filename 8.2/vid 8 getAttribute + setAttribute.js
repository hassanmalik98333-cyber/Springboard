// how to modify attributes for an element. 

// reminder: an attribut is this type="text", <input type="text">, src, rel, alt, class, etc...

// the first one is getAttribute.

// const firstInput = document.querySelector("input")

// firstInput.getAttribute("type") will give "text" if the type is text.

//const input = document.querySelector('input')

//input.getAttribute('placeholder')
//'How Many Muffins'

const imgs= document.querySelectorAll("img");

for(let img of imgs){
    console.log(img.getAttribute("src"))
}// will display the src on the console

// use setAttribute to change the value of any of the attributes, down bello:

const input = document.querySelector('input');

// setAttribute requires 2 arguments, the first is the attribute that you want to change, and the second is what you want to change it to.

input.setAttribute('placeholder', 'I like kittens')

input.setAttribute('type', 'checkbox')// this will change it drastically

// can change the class on an element and add an additional class to an element that already has a class so that it has multiple classes.

let h2 = document.querySelector('h2')

h2.setAttribute('class', 'big')// problem with this is that it will completely replace the already existing class with big. There are other ways to add a class to an already existing class.