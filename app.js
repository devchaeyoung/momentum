// const h1 = document.querySelector(".hello > h1");

// function handleTitleClick() {
//   console.log("title was click!");
// }

// h1.onclick = handleTitleClick;
// h1.addEventListener("click", handleTitleClick);
//위 두 코드는 같지만 addEventListener의 경우 removeEventListener를 사용할 수 있으므로 더 선호해서 사용하는 편이다.

function handleWindowOffline() {
  alert("Please checking your Network :(");
}

function handleWindowOnline() {
  alert("success! :)");
}
window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline);

const h1 = document.querySelector(".hello > h1");

function handleTextColor() {
  if (h1.style.color === "blue") {
    h1.style.color = "tomato";
  } else {
    h1.style.color = "blue";
  }
}

h1.addEventListener("click", handleTextColor);
