//자바스크립트가 브라우저에서 어떻게 움직이는 가
document.title = "Hello! from JS";
//cannot set property 'innerText' of null

const title = document.getElementById("title");
title.innerText = "Got you!";
console.log(title.className);
