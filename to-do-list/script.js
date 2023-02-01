// Declare Variable

const listTodo = document.getElementById("list-todo");
const userInput = document.getElementById("user-input");
const addButton = document.getElementById("add");

//Function to check input
function checkInputLength() {
  return userInput.value.length;
}

// Function to add todo-list
function createTodoItemElement() {
  // Create variable for adding list and delete button
  const todoItem = document.createElement("li");
  const deleteBtn = createDeleteButton();

  // Add list and delete button at the same time
  todoItem.appendChild(document.createTextNode(userInput.value));
  todoItem.appendChild(deleteBtn);
  listTodo.appendChild(todoItem);

  // Delete list if delete button clicked
  deleteBtn.addEventListener("click", () => {
    todoItem.remove();
  });

  // Add strikethrough if list clicked
  todoItem.addEventListener("click", () => {
    todoItem.classList.toggle("done");
  });
}

function createDeleteButton() {
  const deleteButton = document.createElement("button");
  deleteButton.setAttribute("title", "Delete List!");
  deleteButton.classList.add("delete-button");
  deleteButton.innerHTML = `<i class="fa-sharp fa-solid fa-trash"></i>`;
  return deleteButton;
}

// Function to add todo-item after clicking add-button
function createTodoItemAfterCheckLength() {
  if (checkInputLength() > 0) {
    createTodoItemElement();
  }
}

function runApp() {
  addButton.addEventListener("click", createTodoItemAfterCheckLength);
  userInput.addEventListener("submit", createTodoItemAfterCheckLength);
}

runApp();

// const listTodo
// const userInput
// const addButton
// function checkInputLength()
// function createTodoItemElement()
// Todo List => Todo Item
// Todos => Todo
// li to const todo
// const deleteButton
// Pisah dengan enter
// div dibungkus dalam form
// Bagaimana jika semua todosnya di deklrasi diatas
//  const dataTodos = [
//   {
//     id: "1"
//     text:'Programming'
//     done (class): true or false
//   }
// ]
