const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input");
// = document.querySelector("#todo-form input")  두번 찾을 필요 없음
const toDoList = document.querySelector("#todo-list");

function paintToDo(newToDo) {
  console.log(`I will paint ${newToDo}`);
  const li = document.createElement("li");
  const span = document.createElement("span");
  li.appendChild(span);
  span.innerText = newToDo;
  toDoList.appendChild(li);
}

/**
 * 해야할 일 목록을 체크박스로 나타냅니다.
 * @param {*} newToDo 새로운 할 일 목록
 */
function checkListToDo(newToDo) {
  console.log(`I will paint ${newToDo}`);
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  const span = document.createElement("span");
  checkbox.appendChild(span);
  span.innerText = newToDo;
  toDoList.appendChild(checkbox);
}

function handleToDoSubmit(e) {
  e.preventDefault();
  const newToDo = toDoInput.value;
  // console.log(toDoInput.value);
  toDoInput.value = "";
  // checkListToDo(newToDo); // 체크박스로 나타낼 경우
  paintToDo(newToDo);
  // console.log(newToDo, toDoInput.value);
}

toDoForm.addEventListener("submit", handleToDoSubmit);
