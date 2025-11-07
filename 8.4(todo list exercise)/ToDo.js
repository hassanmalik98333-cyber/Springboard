const input = document.querySelector('input');
const form = document.querySelector('form');
const todoList = document.querySelector('#todo-list');
const clearTodo = document.querySelector('#clearTodo');
const section = document.querySelector('#todo'); 

function listClicked(e){
      if(e.target.tagName==='LI'){
    e.target.classList.toggle('done');
} else if(e.target.tagName==='BUTTON'){
    e.target.parentElement.remove();
};
}

todoList.addEventListener('click', function(e){
    listClicked(e);
});

form.addEventListener('submit',function(e){
    e.preventDefault();
    const newTodo = document.createElement('li');
    const removeTodo = document.createElement('button');
    removeTodo.classList.add('removeButton');
    newTodo.innerText = input.value;
    if(input.value.trim() !==''){
     newTodo.appendChild(document.createTextNode(' '));
    newTodo.appendChild(removeTodo);
    todoList.appendChild(newTodo);
    }
    removeTodo.innerText ='X';
    input.value = '';
}); 

// local storage plan: make it so that when the 'add into todo list' button is clicked, it storaes that input.value into an array that is in local storage, and whatever is in that array will show up in the ul as an li. Also when the X button is clicked to remove the todo item, make it so that, that button removes the value from the array in the local storage.
