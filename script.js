
// const todos = [
//   {
//     title: 'Buy Milk',
//     status: 'pending'
//   },
//   {
//     title: 'Buy Eggs',
//     status: 'pending'
//   },
//   {
//     title: 'Buy Bread',
//     status: 'pending'
//   },
//   {
//     title: 'Buy Butter',
//     status: 'complete'
//   },
//   {
//     title: 'Buy Cheese',
//     status: 'complete'
//   }
// ];

// const pendingTasks = todos.filter((todo) => todo.status === 'pending');
// const completedTasks = todos.filter((todo) => todo.status === 'complete');

// const input = document.getElementById('input');
// const addTaskButton = document.getElementById('addtask');
// const pending = document.querySelector('.pending');
// const complete = document.querySelector('.complete');
// const maincontainer = document.querySelector('.maincontainer')

// addTaskButton.addEventListener('click', () => {
//   // If the condition evaluates to true, it means that the input field is empty
//   if (input.value === '') {
//     alert('Please enter your task');
//   } else {
//     pendingTasks.push({
//       title: input.value,
//       status: 'pending'
//     });
//     // it sets the value of the input field to an empty string
//     input.value = '';
//     // is a function is called to update the task list and display
//     // the newly added task along with the existing ones.
//     displayList();
//   }
// });

// const addClickEventToPendingList = () => {
//  maincontainer.addEventListener('click', (event) => {
//     console.log('Target: ', event.target);
//     console.log('Current Target: ', event.currentTarget);
//     if (event.target.className === 'bi bi-check2') {
//       const index = event.target.getAttribute('index');
//       console.log('Click from check button with index: ', index);
//       const pendingTask = pendingTasks[index];
//       console.log(pendingTask);
//       pendingTasks[index].status = 'complete';
//       completedTasks.push(pendingTask);
//       pendingTasks.splice(index,1);
//     }
//      else if (event.target.className === 'bi bi-trash') {
//       console.log('Target: ', event.target);
//       console.log('Current Target: ', event.currentTarget);
//       const listItem = event.target.closest('li');
      
//       if (listItem.parentElement === pending) {
//         const index = Array.from(pending.children).indexOf(listItem);
//         pendingTasks.splice(index, 1);
//       } else if (listItem.parentElement === complete) {
//         const index = Array.from(complete.children).indexOf(listItem);
//         completedTasks.splice(index, 1);
//       }
//       listItem.remove();
//     }
//     else if (event.target.className === 'bi bi-arrow-up') {
//       const index = event.target.getAttribute('index');
//       console.log('Click from arrow-up button with index:', index);
//       const completedTask = completedTasks[index];
//       console.log(completedTask);
//       completedTasks.splice(index, 1);
//       // completedTask.status = 'pending';
//       pendingTasks.push(completedTask);
//     }
    
  
  
//     displayList();
//   });
// };

// const displayList = () => {
//   // console.log(todos);
// //  to clears any existing task items from the container
// //   This allows for a fresh display of pending tasks when the displayList()
// //    function is called and new tasks are added to the pending container.
//   pending.innerHTML = '';
//   complete.innerHTML = '';

//   pendingTasks.forEach((todo, index) => {
//     const newLi = document.createElement('li');
//     newLi.innerHTML = `${todo.title} - ${todo.status}`;

//     const tickBtn = document.createElement('button');
//     tickBtn.innerHTML = `<i index=${index} class="bi bi-check2"></i>`;

//     const deleteBtn = document.createElement('button');
//     deleteBtn.innerHTML = '<i class="bi bi-trash"></i>';

//     newLi.appendChild(deleteBtn);
//     newLi.appendChild(tickBtn);
//     pending.appendChild(newLi);1
//   });
//   completedTasks.forEach((todo, index) => {
//     const newLi = document.createElement('li');
//     newLi.innerHTML = `${todo.title}`;
  
//     const deleteBtn = document.createElement('button');
//     deleteBtn.innerHTML = `<i class="bi bi-trash"></i>`;
  
//     const untickBtn = document.createElement('button');
//     untickBtn.innerHTML = `<i index=${index} class="bi bi-arrow-up"></i>`;
  
//     newLi.appendChild(deleteBtn);
//     newLi.appendChild(untickBtn);
//     complete.appendChild(newLi);
//   });
// };

// displayList();
// addClickEventToPendingList();





const todos = [
  {
    title: 'Buy Milk',
    status: 'pending'
  },
  {
    title: 'Buy Eggs',
    status: 'pending'
  },
  {
    title: 'Buy Bread',
    status: 'pending'
  },
  {
    title: 'Buy Butter',
    status: 'complete'
  },
  {
    title: 'Buy Cheese',
    status: 'complete'
  }
];

const input = document.getElementById('input');
const addTaskButton = document.getElementById('addtask');
const pending = document.querySelector('.pending');
const complete = document.querySelector('.complete');
const maincontainer = document.querySelector('.maincontainer');

addTaskButton.addEventListener('click', () => {
  if (input.value === '') {
    alert('Please enter your task');
  } else {
    todos.push({
      title: input.value,
      status: 'pending'
    });
    input.value = '';
    displayList();
  }
});

// const addClickEventToPendingList = () => {
//   maincontainer.addEventListener('click', (event) => {
//     if (event.target.type === 'checkbox') {
//       const index = event.target.getAttribute('index');
//       todos[index].status = 'complete';
//     } else if (event.target.className === 'bi bi-trash') {
//       const index = event.target.getAttribute('index');
//       todos.splice(index, 1);
//     } else if (event.target.className === 'bi bi-arrow-up') {
//       const index = event.target.getAttribute('index');
//       todos[index].status = 'pending';
//     }
//     displayList();
//   });
// };

// const addClickEventToPendingList = () => {
//   maincontainer.addEventListener('click', (event) => {
//     if (event.target.type === 'checkbox') {
//       const index = event.target.getAttribute('index');
//       if (todos[index].status === 'pending') {
//         todos[index].status = 'complete';
//       } else {
//         todos[index].status = 'pending';
//       }
//     } else if (event.target.className === 'bi bi-trash') {
//       const index = event.target.getAttribute('index');
//       todos.splice(index, 1);
//     }
//     displayList();
//   });
// };



// const displayList = () => {
//   pending.innerHTML = '';
//   complete.innerHTML = '';

//   todos.forEach((todo, index) => {
//     const deleteBtn = document.createElement('button');
//     deleteBtn.innerHTML = `<i index="${index}" class="bi bi-trash"></i>`;
//     deleteBtn.classList.add('deleteBtn');

//     const newLi = document.createElement('li');

//     const checkOrUncheckBtn = document.createElement('input');
//     checkOrUncheckBtn.type = 'checkbox';
//     if (todo.status === 'pending') {
//       checkOrUncheckBtn.innerHTML = `<i index="${index}" class="bi bi-check2"></i>`;
//     } else {
//       checkOrUncheckBtn.innerHTML = `<i index="${index}" class="bi bi-arrow-up"></i>`;
//     }

//     const todoItem = document.createElement('div');
//     todoItem.classList.add('todo-item');
//     todoItem.textContent = todo.title;

//     newLi.appendChild(checkOrUncheckBtn);
//     newLi.appendChild(todoItem);
//     newLi.appendChild(deleteBtn);

//     if (todo.status === 'pending') {
//       pending.appendChild(newLi);
//     } else {
//       complete.appendChild(newLi);
//     }
//   });
// };

// const addClickEventToPendingList = () => {
//   maincontainer.addEventListener('click', (event) => {
//     if (event.target.type === 'checkbox') {
//       const index = event.target.getAttribute('index');
//       if (todos[index].status === 'pending') {
//         todos[index].status = 'complete';
//       } else {
//         todos[index].status = 'pending';
//       }
//       displayList();
//     } else if (event.target.className === 'bi bi-trash') {
//       const index = event.target.getAttribute('index');
//       todos.splice(index, 1);
//       displayList();
//     }
//   });
// };

// const displayList = () => {
//   pending.innerHTML = '';
//   complete.innerHTML = '';

//   todos.forEach((todo, index) => {
//     const deleteBtn = document.createElement('button');
//     deleteBtn.innerHTML = `<i index="${index}" class="bi bi-trash"></i>`;
//     deleteBtn.classList.add('deleteBtn');

//     const newLi = document.createElement('li');

//     const checkOrUncheckBtn = document.createElement('input');
//     checkOrUncheckBtn.type = 'checkbox';
    

     
//     if (todo.status === 'pending') {
//       checkOrUncheckBtn.checked = false;
//     } else {
//       checkOrUncheckBtn.checked = true;
//     }
//     checkOrUncheckBtn.setAttribute('index', index);

//     const todoItem = document.createElement('div');
//     todoItem.classList.add('todo-item');
//     todoItem.innerHTML = todo.title;

//     newLi.appendChild(checkOrUncheckBtn);
//     newLi.appendChild(todoItem);
//     newLi.appendChild(deleteBtn);

//     if (todo.status === 'pending') {
//       pending.appendChild(newLi);
//     } else {
//       complete.appendChild(newLi);
//     }
//   });
// };

// displayList();
// addClickEventToPendingList();






const addClickEventToPendingList = () => {
  maincontainer.addEventListener('click', (event) => {
    if (event.target.type === 'checkbox') {
      const index = event.target.getAttribute('index');
      if (todos[index].status === 'pending') {
        todos[index].status = 'complete';
      } else {
        todos[index].status = 'pending';
      }
      displayList();

    } else if (event.target.className === 'bi bi-trash') {
      const index = event.target.getAttribute('index');
      todos.splice(index, 1);
      displayList();
    }
  });
};

const displayList = () => {
  pending.innerHTML = '';
  complete.innerHTML = '';

  todos.forEach((todo, index) => {
    const deleteBtn = document.createElement('button');
    deleteBtn.innerHTML = `<i index="${index}" class="bi bi-trash"></i>`;
    deleteBtn.classList.add('deleteBtn');
   
    const newLi = document.createElement('li');

    const checkOrUncheckBtn = document.createElement('input');
    checkOrUncheckBtn.type = 'checkbox';

    if (todo.status === 'pending') {
      checkOrUncheckBtn.checked = false;
    } else {
      checkOrUncheckBtn.checked = true;
    }
    checkOrUncheckBtn.setAttribute('index', index);

    const todoItem = document.createElement('div');
    todoItem.classList.add('todo-item');
    todoItem.innerHTML = todo.title;

    // Add a class to the todo item if it's completed
    if (todo.status === 'complete') {
      todoItem.classList.add('completed');
    }

    newLi.appendChild(checkOrUncheckBtn);
    newLi.appendChild(todoItem);
    newLi.appendChild(deleteBtn);

    if (todo.status === 'pending') {
      pending.appendChild(newLi);
    } else {
      complete.appendChild(newLi);
    }
  });
};

displayList();
addClickEventToPendingList();


















