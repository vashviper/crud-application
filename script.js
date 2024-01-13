document.addEventListener("DOMContentLoaded", function () {
  // all the code here
  function addSampleTasks() {
      addTodo(todos, "Walk the dog", 3)
      addTodo(todos, "Clean the room", 3);
      addTodo(todos, "Pay the bill", 2);
  }


  function renderTodos(todos) {
      const todoList = document.querySelector("#todoList");
      // todoList.innerHTML = '';
      for (let todo of todos) {

          const li = document.createElement('li');

          li.className = 'list-group-item d-flex justify-content-between align-items-center';
          li.innerHTML = `
                  ${todo.name} <span class="badge bg-primary">${todo.urgency}</span>               
              `;
          todoList.appendChild(li);
      }
  }

  addSampleTasks()
  renderTodos(todos)
});





































// Sanity check
// console.log("hello is linked")
// alert("Hello!")

// DOM = Document Object Model

// DOM Manipulation
// const btn = document.querySelector("#dom-btn") // # => id
// btn.addEventListener("click", function() {
//     alert("button is clicked")
// })
