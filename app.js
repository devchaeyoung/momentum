const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");

function onLoginBtnClick(e) {
  e.preventDefault(); //어떤 event가 기본행동 (페이지 새로고침)을 하지 않도록 막는 것
  console.log(e);
}

loginForm.addEventListener("submit", onLoginBtnClick);
