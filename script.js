const input = document.getElementById("taskInput");
const button = document.getElementById("addTaskBtn");
const list = document.getElementById("taskList");

// Add task function
function addTask() {
  const taskText = input.value.trim();
  if (taskText === "") return;

  const li = document.createElement("li");

  const span = document.createElement("span");
  span.textContent = taskText;

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "✕";

  deleteBtn.onclick = () => {
    li.remove();
  };

  li.appendChild(span);
  li.appendChild(deleteBtn);

  list.appendChild(li);
  input.value = "";
}

// Button click
button.addEventListener("click", addTask);

// ENTER key support
input.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    addTask();
  }
});