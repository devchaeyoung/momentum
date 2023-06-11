const title = document.querySelector(".hello > h1");

function handleTitleClick() {
  console.log("title was click!");
}

function handleMouseEnter() {
  console.log("mouse is here!");
  title.innerText = "Mouse is Here!";
}

function handleMouseLeave() {
  console.log("mouse leaved");
  title.innerText = "Mouse is gone!";
}

title.addEventListener("click", handleTitleClick);

title.addEventListener("mouseenter", handleMouseEnter);

title.addEventListener("mouseleave", handleMouseLeave);
