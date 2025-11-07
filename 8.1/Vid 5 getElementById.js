// the first step is finding the relavent elements

//!!SELECTING ELEMENTS IN THE DOM
//All of the methods are document.something

//First one to look at is, document.getElementById, looks for element with the id you type in (id is <p id= paragraph1> Lorem </p>). 
// ex. document.getElementById('paragraph1'). This finds the first element with the id of paragraph1 (you should only have on id per element in the first place unlike class)

// to use this, type in the console document.getElementById('content'). By doing this is retrieves the content with the id(in this case id of 'content').

// you can save it to a variable, let btn = document.getElementById('submit'), by default it shows the html representation.
// All elements in the page gets turned into an object by the DOM.
// Specifically the object is called the HTMLElement.
// to look at the object(HTMLElement) do, console.dir(btn). With this you can see if an element has any childNodes(in the case of btn, between the opening and closing text for the button there is text, this is the childNode in this case and inside the text node there are values, there is a lot to learn), you can see if it has a class, ect. If you scroll down you can see what prototype it is, in this case it is HTMLBottonElement.
// every element in the DOM (prototype) is an HTMLElement.