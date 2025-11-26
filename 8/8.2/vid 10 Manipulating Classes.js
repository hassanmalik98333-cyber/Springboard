// it is hard and tedious to constantly change styles on JS. Having to type different styles for one element takes a while, ex el.style.color, el.style.textDecoration,       el.style.backgroundColor, el.style.border, etc... All of this writing takes a long time.

// instead you you had a class in css and that class had 20 different properties changed (color, border, background-color,etc...) I could then just apply that class with all of that to an element instead of writing all of the tedious text.

// it is shorter and enables the user to write the styles in css                   (much easier than .style)

// you can make a class in css(that is not on the html file) and you can type styles into it and apply that class in JS. BVasically you are adding the class in through javascript not in html, so you make the style in the class in css and do not apply the class to the html file but add it to any element on the page via JS by adding that class to the html element through JS. 

// one way is to add a new class while including the current class (so that it does not erase it)

// const todo = document.querySelector('li');

// todo.setAttribute('class', 'todo completed')

// todo is the class that is in the html, have to write todo as well as the new added class(completed) to not completely get rid of the original class name.

// another way is className

// todo.className += ' completed' 

// need the space as that is needed to seperate multiple classes per html element. This is not a great option if you want to dynamically change class names(it is possible, but not ideal).

//the third and best option is classList, this gives an array like object to add or remove or toggle classes.

// todo.classList will give in this case  ['todo', value: 'todo'] (this is without adding another class).

// has useful methods like; add, remove, toggle, contains. Ex bellow

// todo.classList.add('completed');

// did not look at click events yet, but if a user clicks something you can do something like todo.classList.add('completed'); and when he clicks again you can do todo.classList.remove('completed');

// toggle is useful because you do not need to specify whether it needs to be added or removed. With toggle if the element has the class specified, it will remove it, if it does not have the class it will add it in. Imagine toggling 100 lines of css with a click even or removing it with a click event.

//ex of code bellow

function toggleAllTodods(){
    const todos = document.querySelectorAll('li');

for(let li of todos){
    li.classList.toggle('completed');
}
}
// if you type this function in the console it will add the class or remove the class(if it already has the class) to all the li's.




