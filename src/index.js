import checkItem from './status.js';
// import './style.css';

// const tasks = [
//   {
//     description: 'Finish my first project',
//     completed: false,
//     id: 1,
//   },
//   {
//     description: 'Finish my second project',
//     completed: false,
//     id: 2,
//   },
//   {
//     description: 'Finish my third project',
//     completed: false,
//     id: 3,
//   },
//   {
//     description: 'Finish my third project',
//     completed: false,
//     id: 4,
//   },
// ];

// if (!localStorage.getItem('todo')) {
//   localStorage.setItem('todo', JSON.stringify(tasks));
// }

const todos = JSON.parse(localStorage.getItem('todo') || '[]');

const todoList = document.querySelector('.todoList');

todos.forEach(({ description, id, completed }) => {
  const div = document.createElement('div');
  div.classList.add('d-height');
  div.classList.add('todo-cont');
  div.innerHTML = `<li><input type="checkbox" ${completed && 'checked'} class="check-box"   id="check-${id}">${description}</li>
        <div class="delete-icon"></div>`;
  todoList.appendChild(div);
});

for (let i = 0; i < todos.length; i += 1) {
  const inCheck = document.querySelector(`#check-${todos[i].id}`);
  inCheck.addEventListener('change', (e) => {
    checkItem(i, e, todos);
    localStorage.setItem('todo', JSON.stringify(todos));
  });
}

// Create a function to add products to the local storage.
// product is avariable that represents inputs

const addTask = (product) => {
  todos.push(product);
  localStorage.setItem('todo', JSON.stringify(todos));
  window.location.reload();
};

const removeTask = (product) => {
  todos.filter(product)
}

// Whenever you want to add an event listener to an element,
// always target an element,
// add event listener, and
// then call a function

const inputElements = document.getElementById('input-box');
inputElements.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    const newTask = {
      description: inputElements.value,
      completed: false,
      id: todos.length + 1,
    };
    addTask(newTask);
  }
});