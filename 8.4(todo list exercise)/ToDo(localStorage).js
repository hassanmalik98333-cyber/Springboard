const input = document.querySelector('input');
const form = document.querySelector('form');
const todoList = document.querySelector('#todo-list');
const section = document.querySelector('#todo'); 

let todoArray = JSON.parse(localStorage.getItem('todoList')) || []; 


todoArray.forEach(todo => { // same as todoArray.forEach(function(todo) {... 
    const newTodoElement = document.createElement('li');
    const removeTodo = document.createElement('button');
    removeTodo.classList.add('removeButton');
    newTodoElement.innerText = todo.completed ? '' : todo.task;
      let targetId = todo.id;
      removeTodo.innerText ='X';
     newTodoElement.appendChild(document.createTextNode(' '));
    newTodoElement.appendChild(removeTodo);
    todoList.appendChild(newTodoElement);

    todoList.addEventListener('click', function(e){
        // if(e.target.tagName==='LI'){
          
   
      if(e.target.tagName==='BUTTON'){
        let newTodo = todoArray.filter(todo => todo.id !== targetId);
         localStorage.setItem('todoList', JSON.stringify(newTodo));
           

    
    
  };
   
});
}); 




 
// the todo represents each index position inside of the array (remember this) so it itterats through each index position in the array.

form.addEventListener('submit',function(e){
    e.preventDefault();
    let inputValue = input.value.trim();
    if(inputValue !==''){
      const newTodo = {
          id: Date.now(), //will a different different code(each it unique) for every object
         task: inputValue,
         completed: false // once the task is completed, you will turn it to true.
      };
    todoArray.push(newTodo);
    localStorage.setItem('todoList', JSON.stringify(todoArray));//
    console.log('localStorage.todoList: ',localStorage.todoList);
    console.log('todoArray: ',todoArray);
    // add this to add li on the page when the form is submitted
      const newTodoElement = document.createElement('li');
    const removeTodo = document.createElement('button');
    removeTodo.classList.add('removeButton');
    newTodoElement.innerText = inputValue;
    removeTodo.innerText ='X';
     newTodoElement.appendChild(document.createTextNode(' '));
    newTodoElement.appendChild(removeTodo);
    todoList.appendChild(newTodoElement);
      
    };
  input.value = '';

}); 

    function listClicked(e){
      if(e.target.tagName==='LI'){
    e.target.classList.toggle('done');
} else if(e.target.tagName==='BUTTON'){
    e.target.parentElement.remove();
    
    
  };
};

todoList.addEventListener('click', function(e){
    listClicked(e);
});




console.log('localStorage.todoList: ',localStorage.todoList);
 console.log('todoArray: ',todoArray);

 //ask ai about objects inside of an array


