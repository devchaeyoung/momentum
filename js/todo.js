const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input");
// = document.querySelector("#todo-form input")  두번 찾을 필요 없음
const toDoList = document.querySelector("#todo-list");

/**목록을 삭제하는 함수
 * 화살표함수로 바로 실행하는게 좋을 지 함수로 빼서 사용해주는 지 좋을지 고민하기
 * React에서 따로 compoenet로 써도 좋을 거 같기도..?
 */
function deleteToDo(e) {
  // console을 통해 삭제할 target을 찾아서 지울 수 있다.
  const li = e.target.parentElement;
  li.remove;

  // console.log(e); // event가 일어난 자리를 path를 통해 확인 가능!
  // console.dir(e.target); // event가 일어난 target의 parent를 확인 가능!
}
function paintToDo(newToDo) {
  console.log(`I will paint ${newToDo}`);
  const li = document.createElement("li");

  const span = document.createElement("span");
  span.innerText = newToDo;

  const delButton = document.createElement("button");
  delButton.innerText = "❎";
  delButton.addEventListener("click", deleteToDo);

  li.appendChild(span);
  li.appendChild(delButton);
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
  checkbox.innerText = newToDo;
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
