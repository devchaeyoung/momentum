```js
array.forEach(element => {
  console.log("실행할 함수");
});

function sayHello(item) {
  console.log(`Hello. this is ${item}`);
}

const myArray = [a, b, c, d];
myArray.forEach(sayHello); // sayHello 가 배열의 길이만큼 실행됨
```
