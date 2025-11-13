const input = document.querySelector('input');
const form = document.querySelector('form');
const todoList = document.querySelector('#todo-list');
const section = document.querySelector('#todo'); 

let todoArray = JSON.parse(localStorage.getItem('todoList')) || []; 


todoArray.forEach(todo => { // same as todoArray.forEach(function(todo) {... 
    const newTodoElement = document.createElement('li');
    const removeTodo = document.createElement('button');
    removeTodo.classList.add('removeButton');
    //to take the class from localStorage
    if(todo.done === true){
      newTodoElement.classList.add('done');
    };
    newTodoElement.innerText = todo.task;
    newTodoElement.id = todo.id;//this adds the id to the element on page refresh.
      removeTodo.innerText ='X';
     newTodoElement.appendChild(document.createTextNode(' '));
    newTodoElement.appendChild(removeTodo);
    todoList.appendChild(newTodoElement);
}); 




 
// the todo represents each index position inside of the array (remember this) so it itterats through each index position in the array.

form.addEventListener('submit',function(e){
    e.preventDefault();
    let inputValue = input.value.trim();
    if(inputValue !==''){
      const newTodo = {
          id: Date.now(), //will give a different code(each code is unique) for every object
         task: inputValue,
         done: false
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
    newTodoElement.id = newTodo.id; // this adds the id to the element right away without needing to refresh.
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
    //to save the class in localstorage
     let identity = e.target.id;
     let foundTodo = todoArray.find(todo => todo.id === parseInt(identity));//this isolates the object with the id
     if(foundTodo){// this checks if the isolated object exists and if it exists, it runs the code bellow.
       if(foundTodo.done === false){//for some reason === works here but not below, bellow only = works.
        foundTodo.done = true;// only one = works here not ===
       } else if(foundTodo.done === true){
        foundTodo.done = false;
       };
      };// at the end of this code, the isolatd objectis updates and todoArray is updated.
      
       localStorage.setItem('todoList', JSON.stringify(todoArray));//this saves the updated todoArray into          local storage.
     
      console.log(foundTodo);

    
    
  

} else if(e.target.tagName==='BUTTON'){
    e.target.parentElement.remove();
    let identity2 = e.target.parentElement.id;
     let newTodoArray2 = todoArray.filter(todo => todo.id !== parseInt(identity2));
     todoArray = newTodoArray2;
         localStorage.setItem('todoList', JSON.stringify(todoArray));
         console.log('localStorage.todoList: ',localStorage.todoList);
 console.log('todoArray: ',todoArray);

           
    
    
  };
};

todoList.addEventListener('click', function(e){
    listClicked(e);
});




console.log('localStorage.todoList: ',localStorage.todoList);
 console.log('todoArray: ',todoArray);

 //ask ai about objects inside of an array


