const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");

const link = documnet.querySelector("a");

function onLoginBtnClick(e) {
  e.preventDefault();
  console.log(loginInput.value);
}

function handleLinkClick() {
  alert("clicked!"); // alert자체가 새로고침 되는 걸 막아줌. preventDefault랑 쓸 필요 X
}

loginForm.addEventListener("submit", onLoginBtnClick);
link.addEventListener("click", handleLinkClick);
