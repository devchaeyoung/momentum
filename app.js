//자바스크립트가 브라우저에서 어떻게 움직이는 가
document.title = "Hello! from JS";
//cannot set property 'innerText' of null

const title = document.getElementById("title");
title.innerText = "Got you!";
console.log(title.className);
document.title = "Hello! from JS.";

document.body; //는 html의 body태그부분을 가져와준다.
document.location; //은 html의 위치를 가져와준다.
