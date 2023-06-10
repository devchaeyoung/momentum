const title = document.querySelector(".hello > h1");

function handleTitleClick() {
  console.log("title was click!");
}

title.addEventListener("click", handleTitleClick);
