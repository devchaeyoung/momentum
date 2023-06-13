const h1 = document.querySelector(".hello > h1");

function handleTitleClick() {
  console.log("title was click!");
}

h1.onclick = handleTitleClick;
h1.addEventListener("click", handleTitleClick);
//위 두 코드는 같지만 addEventListener의 경우 removeEventListener를 사용할 수 있으므로 더 선호해서 사용하는 편이다.
