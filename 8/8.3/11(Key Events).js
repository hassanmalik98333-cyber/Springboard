// running code when a user types a key, there are many variations. The first one I will look at is called keypress.

let h1 = document.querySelector('h1')

let input = document.querySelector('input');

document.addEventListener('keypress',function(e){
    document.body.style.backgroundColor ='lightgrey';
    h1.style.color = 'magenta';
    // console.log(e.key);
});

// does not work if you press shift(will come back to this later). It only works for a key that would actually display.

// the even keydown will display shift tho (not the function key tho). keydown fires when you press the key, whereas keyup fires when you release the key.

input.addEventListener('keypress',function(e){
  console.log('The key you pressed is:',e.key);
});// if you have a game and want the arrow keys to register, then use keydown.