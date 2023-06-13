const h1 = document.querySelector(".hello > h1");

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

function handleOnCopy() {
  alert("copy!");
}

h1.addEventListener("click", handleTitleClick);

h1.addEventListener("mouseenter", handleMouseEnter);

h1.addEventListener("mouseleave", handleMouseLeave);

window.addEventListener("oncopy", handleOnCopy);
