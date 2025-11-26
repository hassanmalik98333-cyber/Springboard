// let btn = document.querySelector('button');

// btn.addEventListener('click',function(){
//     document.body.style.backgroundColor = 'red';
//     console.log('Clicked');
// }) 

//need to add <script src="5(Load Events).js"></script> to the end of the body for it to work(not the beginning). The script needs to run after the DOM is loaded not before.

// there is another way other than putting it at the bottom of the body is to put the entire code in an event listener that runs when the dom is loaded:

document.addEventListener('DOMContentLoaded',function(){
    //add all the code in here and it will only run after the DOM is fully loaded.
    alert('DOM CONTENT LOADED!')
    let btn = document.querySelector('button');

btn.addEventListener('click',function(){
    document.body.style.backgroundColor = 'red';
    console.log('Clicked');
});

})

// adding the script at the end of the body is simpler tho.

// the alert in the event listener is there to show that the alert appears on screen before any images or elements appear on the page.