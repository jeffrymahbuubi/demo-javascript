// Declare Variable

const listToDo = document.getElementById("list-todo");
const input = document.getElementById("user-input");
const addBtn = document.getElementById("add");

//Function to check input
function inputLength() {
  return input.value.length;
}

// Function to add todo-list
function createListElement() {
  // Create variable for adding list and delete button
  const li = document.createElement("li");
  const deleteBtn = createDeleteButton();
  // Add list and delete button at the same time
  li.appendChild(document.createTextNode(input.value));
  li.appendChild(deleteBtn);
  listToDo.appendChild(li);
  // Delete list if delete button clicked
  deleteBtn.addEventListener("click", () => {
    li.remove();
  });
  // Add strikethrough if list clicked
  li.addEventListener("click", () => {
    li.classList.toggle("done");
  });
}

function createDeleteButton() {
  const deleteBtn = document.createElement("button");
  deleteBtn.setAttribute("title", "Delete List!");
  deleteBtn.classList.add("delete-button");
  deleteBtn.innerHTML = `<i class="fa-sharp fa-solid fa-trash"></i>`;
  return deleteBtn;
}

// Function to add todo-list after clicking add-button
function createListAfterClick() {
  if (inputLength() > 0) {
    createListElement();
  }
}

// Function to add todo-list after pressing 'Enter' button
function addListAfterKeypress(event) {
  if (inputLength() > 0 && event.which == 13) {
    createListElement();
  }
}

function runApp() {
  addBtn.addEventListener("click", createListAfterClick);
  input.addEventListener("keypress", addListAfterKeypress);
}

runApp();
