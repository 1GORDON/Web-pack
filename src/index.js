window.onload = () => {
  const todos = JSON.parse(localStorage.getItem('todo') || '[]');
  const todoList = document.querySelector('.todoList');

  todos.forEach(({ description, id, completed }) => {
    todoList.innerHTML += `
      <li class="listElements">
        <div class="d-flex center-items list-group-1">
          <input type="checkbox" ${completed && 'checked'} class="check-box" id="check-${id}">
          <p class="task-description ${completed ? 'text-line' : ''}">${description}</p>
          <input type="input" class="edit-input no-outline">
        </div>
        <div>
          <i class="fas fa-trash-alt trash"></i>
          <i class="fas fa-ellipsis-v"></i>
        </div>
      </li>
      <hr>`;
  });

  const addTask = (entry) => {
    todos.push(entry);
    localStorage.setItem('todo', JSON.stringify(todos));
    window.location.reload();
  };

  const deleteTask = (index) => {
    const currentTasks = todos.filter((todo, todoIndex) => todoIndex !== index);
    localStorage.setItem('todo', JSON.stringify(currentTasks));
    window.location.reload();
  };

  const editTask = (index, text) => {
    todos.filter((todo, todoIndex) => {
      if (index === todoIndex) {
        todo.description = text;
        todos.splice(index, 1, todo);
      }
      return false;
    });
    localStorage.setItem('todo', JSON.stringify(todos));
    window.location.reload();
  };

  const changeTaskStatus = (index, status) => {
    todos.filter((todo, todoIndex) => {
      if (index === todoIndex) {
        todo.completed = status;
        todos.splice(index, 1, todo);
      }
      return false;
    });
    localStorage.setItem('todo', JSON.stringify(todos));
    window.location.reload();
  };

  const clearCompleted = () => {
    const newTodos = todos.filter((todo) => todo.completed !== true);
    localStorage.setItem('todo', JSON.stringify(newTodos));
    window.location.reload();
  };

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

  document.querySelectorAll('.listElements').forEach((element, index) => {
    element.addEventListener('dblclick', () => {
      element.style.backgroundColor = 'bisque';
      const deleteIcon = element.childNodes[3].childNodes[1];
      const ellipsisIcon = element.childNodes[3].childNodes[3];
      const taskDescription = element.childNodes[1].childNodes[3];
      const editInput = element.childNodes[1].childNodes[5];

      // hide / show the icons
      deleteIcon.style.display = 'flex';
      ellipsisIcon.style.display = 'none';
      editInput.style.display = 'flex';
      taskDescription.style.display = 'none';

      element.addEventListener('mouseleave', () => {
        element.style.backgroundColor = 'transparent';
        deleteIcon.style.display = 'none';
        editInput.style.display = 'none';
        ellipsisIcon.style.display = 'flex';
        taskDescription.style.display = 'flex';
      });

      deleteIcon.addEventListener('click', () => {
        deleteTask(index);
      });

      editInput.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
          const { value } = editInput;
          editTask(index, value);
        }
      });
    });
  });

  document.querySelectorAll('.check-box').forEach((element, index) => {
    element.addEventListener('change', () => {
      if (element.checked) {
        changeTaskStatus(index, true);
      } else {
        changeTaskStatus(index, false);
      }
    });
  });

  document.querySelector('.clear-all-completed').addEventListener('click', () => {
    clearCompleted();
  });
};