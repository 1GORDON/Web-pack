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
window.onload = () => {
  const todos = JSON.parse(localStorage.getItem('todo') || '[]');

  const todoList = document.querySelector('.todoList');

  todos.forEach(({ description, id, completed }) => {
    todoList.innerHTML += `<li class="input-list">
  <div><input type="checkbox" ${completed && 'checked'} class="check-box" id="check-${id}">${description}</div>
  <div><input type="input" class="li-input"></div>
  <div><i class="fas fa-trash-alt"></i><i class="fas fa-ellipsis-v"></i></div>
  </li><hr>`;
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

  const addTask = (entry) => {
    todos.push(entry);
    localStorage.setItem('todo', JSON.stringify(todos));
    window.location.reload();
  };

  // const removeTask = () => {
  //   const todos = todos.filter((element) => element -= 1);
  //   localStorage.setItem('todo', JSON.stringify(todos));
  //   window.location.reload();
  // };

  // const liElements = document.querySelector('.check-box');
  // liElements.addEventListener('keydown', (e) => {
  //   if (e.key === 'Enter') {
  //     const newTask = {
  //       description: liElements.value,
  //       completed: false,
  //       id: todos.length - 1,
  //     };
  //     removeTask(newTask);
  //   }
  // });

  // Whenever you want to add an event listener to an element,
  // always target an element,
  // add event listener, and
  // then call a function
  const deleteIcon = document.querySelector('.fa-trash-alt');
  document.querySelectorAll('.input-list').forEach((element, index) => { 
    element.addEventListener('click', (e) => {
      const children = element.childNodes[3].childNodes[0];
      children.style.display = 'visible !important';
      console.log(children);
    });
  });

  const inputElement = document.querySelector('.input-list');
    element.addEventListener('click', (e) => {
      inputElement.style
  });

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
};