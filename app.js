//프로그래머로 일하다보면 조건이 하나보다 많은 경우가 많다.
//그럴 때 사용하는 것이 else if!

const age = parseInt(prompt("How old you?"));

if (isNaN(age) || age < 0) {
  console.log("Please write a real positive number.");
} else if (age < 20) {
  console.log("you are too young.");
} else if (age >= 20 && age <= 50) {
  console.log("You can Drink");
} else if (age > 50 && age <= 80) {
  console.log("You should exercise.");
} else if (age > 80) {
  console.log("You can do whatever you want.");
} else {
  console.log("You can't Drink.");
}
//AND연산자(모든 값이 true여야 boolean타입이 true로 value값을 받을 수 있다.)
//OR연산자(하나라도 true이면 boolean타입이 true로 value값을 받고 모든값이 false여야 false로 value값을 받을 수 있다.)
