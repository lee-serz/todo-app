let input = document.querySelector("#input");
let taskList = document.querySelector(".tasks");
let theme = document.getElementById("style").href;

function changeTheme() {
  let theme = document.getElementById("style");
  let currentTheme = theme.href;
  let newTheme = currentTheme.includes("dark-theme.css")
    ? "light-theme.css"
    : "dark-theme.css";

  theme.href = newTheme;
}

function addTask() {
  event.preventDefault();
  if (input.value === "") {
    alert("Заполните поле ввода!");
  } else {
    let task = document.createElement("li");
    task.innerHTML = input.value;
    taskList.appendChild(task);
    let span = document.createElement("span");
    span.innerHTML = "&#215";
    task.appendChild(span);
  }
  input.value = "";
  saveData();
}

taskList.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("check");
      saveData();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveData();
    }
  },
  false
);

function saveData() {
  localStorage.setItem("data", taskList.innerHTML);
}

function showData() {
  taskList.innerHTML = localStorage.getItem("data");
}

showData();
