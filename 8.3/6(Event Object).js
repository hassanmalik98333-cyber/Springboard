// everytime an event is triggered and the callback(the event handler) is run, it has actually passed an object as an argument. All you have to do is add a parameter inside of the callback function.

// let h1 = document.querySelector('h1');
// h1.addEventListener('click', function(event){
//     console.log(event); 
// })

// the parameter event is common.

// this is useful for when you have an event on one of the children inside of a parent element and you can see what child was actually clicked.

//you can find out where on the page it occured (the x and y pixels), what key was pressed (will console.log it).

let p = document.querySelector('p');

p.addEventListener('click', function(e){
    console.log(e);
}) // by console.logging e, it will display the object(the one mentioned before). You can open it and it will display a ton of info about the event.

//it will say target is p in this case, but if you inclue a bold tag in the paragraph and click that, it will say that the target is b. This is a way to figure out specifically where the click occured. 

// Also should the exact coordinated (pageX or clientX and pageY or clientY). if you write console.log(e.pageX) it will show the exact x coordinates that was clicked. Remember the box model, the p element stretches far, if you click that, it will show the X coordinate.

// can do console.log(e.type) to figure out what type of event was called. Can be used if you have multiple events per element.

// when you have a key press event, you can console.log the specific key that was pressed. 