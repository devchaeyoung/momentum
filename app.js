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
