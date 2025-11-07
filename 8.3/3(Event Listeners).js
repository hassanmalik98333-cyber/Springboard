// how does one get some code to run when a user clicks a button or scrollers or hovers, etc.. There are three options but the first 2 are not really used.

// 1. Attach the name of the function to the element in html.

// 2. attach the name of the function to an element in JS.

// 3. Use the addEventListener method(this is the one that is used, the others are not anymore).

// anytime you listen for an even using JS, there are 3 pieces that you need to provide. three down bellow:

// 1. what type of even are you looking for(click,hover,etc...), 2. which element you are looking for this even on, 3. code to run when that even runs on that element.

// click event on a button example:

//on html:  <button onclick="alert('hi')">Click</button>, the page will pull up with the text hi when you click the button(this method is not good). The method is called click but you have to also type on, same with others like dblclick(ondblclick).

// can also call js code from html:

function makeBodyPurple(){
    document.body.style.backgroundColor = 'purple';
}

//the html is <button onclick="makeBodyPurple()">Click</button> so that when you click the button, it will call this function and make the body purple.

// the second option is to do it through JS(still not great):

let red = document.querySelector("#red"); // the id of the button is red

// if you do console.dir(red), you will see the different events(onclick, onclose,etc...) and will see a lot of them say null. Can change from null to a function(set them to be a function). Down bellow:

function makeBodyRed(){
    document.body.style.backgroundColor = 'Red';
}

red.onclick = makeBodyRed;// cannot do makeBodyRed() as this will execute the function immediately, you need to make a reference. 
// with this once you click the button, the page will turn red.

// if there is a function that has a parameter then it is more complex:

let teal = document.querySelector('#teal');

function makeBody(color){
    document.body.style.backgroundColor = color;
}

// you need an anonymous function for the event to work with the js method that has a parameter.

let h1 = document.querySelector('h1');

teal.onclick=function(){
    makeBody('teal');
    // h1.style.color = 'blue'; //can do this
};

// these methods are not great, next vid will cover a better method.

//!! addEventListener(4(addEventListener)) !!

let btn = document.querySelector("#addEventListener");

btn.addEventListener('dblclick',function(){
    makeBody('green');
});// same as before with parameter and makeBodyRed without parameter.

// addEventListener is a function.

// why is this better? 1. It is easier to remove later(talk about later), 2. easier to execute multiple changes per event(so clicking the button will change the background color and h1 color because .onclick is technically an object.). With addEventListener, you can add as many even listeners to an element as you want(you could just change the h1 in the actual anonymous function, but ignoring this you cannot do multiple .onclicks, whereas you can do multiple addEventListener and you can also do multiple functions).

btn.addEventListener('click',function(){
    h1.style.color = 'purple';
}); // with this when you click the button once, the h1 will turn pruple and when you double click the body will turn green(based on the prevouse eventListener).

