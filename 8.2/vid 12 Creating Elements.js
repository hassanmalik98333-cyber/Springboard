// there is a method called createElement ot create an element. Pass in the name of the element(img,h1,etx) and it will make an empty element of that type.

// ex 

let newLi = document.createElement('li');
// newLi.innerText ="Do Homework";// this way the new li is the only bold one (look bellow)
newLi.classList.add('todo'); 

// this wont add it to the page. To add it on the page you have to append. 

// there is a method called append. append is a method that a parent element calls and you pass in the child element that you would like to place inside of the parent element.

// in this case there are a bunch of li's inside of the one ul on the html document, so you would append to the ul and it would be the last child of the ul. 

// how to append

let boldText = document.createElement('b');
boldText.innerText = 'Do Homework';


// How to add the bold text bellow to this specific li(and not the others).

const ul = document.querySelector('ul'); // NewLi is above
// ul.append(newLi, newLi2);

//append the boldText to newLi:

newLi.append(boldText);

// newDiv.append(boldText); can only work one

// append
 
// can append multiple at once:

const newLi2 = document.createElement('li');
newLi2.textContent = 'done homework';
newLi2.classList.add('todo');

ul.append(newLi, newLi2);

// there is another method called prepend.The difference is that append places the element as the last child where as prepend places it as the first child. 

// same process of append.

const newImg = document.createElement('img');
newImg.setAttribute('src', 'https://images.pexels.com/photos/1632790/pexels-photo-1632790.jpeg')

// will place it in the body (can just do .body)

document.body.prepend(newImg);

newImg.style.width ='500px';

// !! VID 13 REMOVING ELEMENTS !! //

// there are 2 ways, the old way removeChild and the new wy called remove. I added a random li in the html with the id of remove for this example.

let rem = document.querySelector('#remove');

// then select the parent const ul = document.querySelector('ul'); this is already on top.

// ul.removeChild(rem);

rem.remove(); // this will remove it without selecting the parent.

//ex with h1 (easy)

let h1 = document.querySelector('h1');

h1.remove();




