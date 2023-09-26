const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input");
// = document.querySelector("#todo-form input")  두번 찾을 필요 없음
const toDoList = document.querySelector("#todo-list");

const TODOS_KEY = "todos";

/**localStorage에 저장 중인 DB */
let toDos = [];

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos)); // DevTools >> Application으로 가면 저장된 배열 확인 가능
}

/**목록을 삭제하는 함수
 * 화살표함수로 바로 실행하는게 좋을 지 함수로 빼서 사용해주는 지 좋을지 고민하기
 * React에서 따로 compoenet로 써도 좋을 거 같기도..?
 */
function deleteToDo(e) {
  // console을 통해 삭제할 target을 찾아서 지울 수 있다.
  const li = e.target.parentElement;
  toDos = toDos.filter(e => e.id !== parseInt(li.id));
  li.remove();
  saveToDos();

  console.log(li.id);

  // console.log(e); // event가 일어난 자리를 path를 통해 확인 가능!
  // console.dir(e.target); // event가 일어난 target의 parent를 확인 가능!
}
function paintToDo(newToDo) {
  const li = document.createElement("li");
  li.id = newToDo.id;

  const span = document.createElement("span");
  span.innerText = newToDo.text;

  const delButton = document.createElement("button");
  delButton.innerText = "❎";
  delButton.addEventListener("click", deleteToDo);

  li.appendChild(span);
  li.appendChild(delButton);
  toDoList.appendChild(li);
}

function handleToDoSubmit(e) {
  e.preventDefault();
  const newToDo = toDoInput.value;
  toDoInput.value = "";

  const newToDoOBJ = {
    id: Date.now(),
    text: newToDo,
  };

  toDos.push(newToDoOBJ);
  paintToDo(newToDoOBJ);
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);
console.log(savedToDos);

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}
