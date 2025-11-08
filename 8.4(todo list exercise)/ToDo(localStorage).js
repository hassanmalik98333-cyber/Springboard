const input = document.querySelector('input');
const form = document.querySelector('form');
const todoList = document.querySelector('#todo-list');
const clearTodo = document.querySelector('#clearTodo');
const section = document.querySelector('#todo');
// let todoArray =[];
// let stringifiedTodoArray = JSON.stringify(todoArray);

// localStorage.setItem('todoList', stringifiedTodoArray);

let todoArray = JSON.parse(localStorage.getItem('todoList')) || []; // This means that todoArray can be either  JSON.parse(localStorage.getItem('todoList')) or [].

if (localStorage.todoList) {
  console.log('You have a todo list');
} else {
  console.log('There is no todo list');
}

function saveToLocalStorage() {
  localStorage.setItem('todoList', JSON.stringify(todoArray));
}

function displayTodo() {
  todoArray.forEach((todoText, index) => {
    const Li = document.createElement('li');
    Li.innerText = input.value;
    const removeTodo = document.createElement('button');
    removeTodo.classList.add('removeButton');
    removeTodo.innerText = 'X';
  });
}
// forEach() function: ex. for each li, add a button.

//forEach((todoText,index)=>) is the same as forEach(function(todoText,index)).

form.addEventListener('submit', function (e) {
  e.preventDefault();
  const value = input.value.trim();
  if (value !== '') {
    todoArray.push(value);
    console.log(todoArray);
    saveToLocalStorage();
    displayTodo();
  }
  input.value = '';
  if ((todoArray.length = 0)) {
    localStorage.clear();
    todoArray = [];
  }
  // const newTodo = document.createElement('li');
  // const removeTodo = document.createElement('button');
  // removeTodo.classList.add('removeButton');
  // newTodo.innerText = input.value;
  // if(input.value.trim() !==''){
  //  newTodo.appendChild(document.createTextNode(' '));
  // newTodo.appendChild(removeTodo);
  // todoList.appendChild(newTodo);
  // }
  // removeTodo.innerText ='X';
  // input.value = '';
});
//trim() only removes space at the beginning and at the end.

todoList.addEventListener('click', function (e) {
  if (e.target.tagName === 'LI') {
    e.target.classList.toggle('done');
  } else if (e.target.tagName === 'BUTTON') {
    e.target.parentElement.remove();
    let todos = todoArray.filter((todo) => todo !== e.target.parentElement);
    localStorage.setItem('todoList', todos);
  }
});

// displayTodo();

//dry concept: every function should handle only one thing, not multiple. This is because if the function is broken, the code will still work.

// make functions that do a task, and call those functions in an event listener.

// the todoList in the local storage is connected to the todoList variable(for some reason), if you change the name if the todoList variable and not the localStorage name, it will not work. But if you just change the localStorage name to something like todo, it will still work.
