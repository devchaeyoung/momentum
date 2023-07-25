const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";
//본인이 string을 반복해서 쓸 경우에는 변수에 할당해주기!

function onLoginBtnClick(e) {
  e.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

loginForm.addEventListener("submit", onLoginBtnClick);

const savedUsername = localStorage.getItem(USERNAME_KEY);
//이렇게 매번 변수에 할당하는 이유는 오타가 났을때 바로 찾을 수 있기 위해서!

if (savedUsername === null) {
  //form 태그를 가져오기 show the form
} else {
  //show the greeting
}
