// const removeButton = document.querySelectorAll('li button');
// const form = document.querySelector('#add-friend');
// const input = document.querySelector('#first-name');
// const friendList = document.querySelector('#friends')


// for(let btn of removeButton){
//     btn.addEventListener('click', function(e){
//       e.target.parentElement.remove();
//     });
// } // by using a loop, you can select each buttopn instead of doing const button1 or const button 2 and removing them individually. But there is a catch with this approach.

// // form.addEventListener('submit',function(e){
// //     e.preventDefault();
// //     const newFriend = document.createElement('li');
// //     const removeBtn =document.createElement('button');
// //     removeBtn.innerText = 'UnFriend';
// //     newFriend.innerText = input.value;
// //     input.value= "";
// //     newFriend.appendChild(removeBtn);
// //     friendList.appendChild(newFriend);
    
// // });

// // the problem is that the new button does not work, this will be covered bellow(13). 

// // the reason the new button does not work is because on the html page the script tage goes after the actual list. There are two ways to fix this :

// // 1. Adding the event listener when we create elements(add event listener inside of the event listener):

// form.addEventListener('submit',function(e){
//   e.preventDefault();
//   const newFriend = document.createElement('li');
//   const removeBtn =document.createElement('button');
//   removeBtn.innerText = 'UnFriend';
//   newFriend.innerText = input.value;
//   input.value= "";
//   removeBtn.addEventListener('click',function(evt){
//     evt.target.parentElement.remove();
//   });//this is the new addition, it will make it so that the button removes the new friend.
//   newFriend.appendChild(removeBtn);
//   friendList.appendChild(newFriend);
  
// });
// // this works just find, but there is a more efficient way.

// 2. Event delegation takes a parent element and listen for an event on that parent(make that parent a delegate). 
// in this case, it will make it so that a click will be listened for on the ul(one listener,the parent, instead of many, the children).
// how to do it(will comment all the old code away and start fresh down bellow):

// const removeButton = document.querySelectorAll('li button');// This is not relevent with the delegation method either
const form = document.querySelector('#add-friend');
const input = document.querySelector('#first-name');
const friendList = document.querySelector('#friends')


// for(let btn of removeButton){
//     btn.addEventListener('click', function(e){
//       e.target.parentElement.remove();
//     });
// } // with the delegation method, this is not needed

friendList.addEventListener('click',function(e){
   // if you do console.log(e.target.tagName), you will see when you click the button, it will show BUTTON. You want it so that when e.target.tagName === BUTTON, it removes the parent element. For other elements print out the tag name if you do not know it, to make sure.

   if(e.target.tagName === 'BUTTON'){// dont need to use TagName, can use a class name or something else.
    e.target.parentElement.remove();
   }
  else if (e.target.tagName === 'LI'){
      e.target.classList.add('clicked-friend');
      const heart = document.createElement('span');
      heart.innerHTML = '&hearts;'//entity will not work with innerText.
      e.target.prepend(heart);
  }  else if (e.target.tagName === 'SPAN'){
    const heart = document.createElement('span');
    heart.innerHTML = '&hearts;'
    e.target.remove(heart);
}
});

form.addEventListener('submit',function(e){
  e.preventDefault();
  const newFriend = document.createElement('li');
  const removeBtn =document.createElement('button');
  removeBtn.innerText = 'UnFriend';
  newFriend.innerText = input.value;
  input.value= "";
  newFriend.appendChild(removeBtn);
  friendList.appendChild(newFriend);
  
});

// !! 14 !! // (above is the code)

// what if you want to do something when you click the actual friend(not the button) like to make it bolded to signify that this is the best friend.

// to make something like a star shaped entity in and display it on the page, you will need to use an html entity code(can find it online). Ex &trade; will give the trade mark symbol. 

// attempt to make it so that the list is ranked based on the number of hearts, and it changes color based on the number of hearts.

