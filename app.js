player.point; // '()'가 없는 이유 : 함수가 아니기 때문에
// function 은 계속 반복해서 사용할 수 있는 코드조각
//어떤 이름이든 hello를 하는 코드를 짜보자!

console.log("hello my name is chaeyoung");
//라는 식으로 이름을 하나하나 입력하면 비효율적! 이럴 경우 function응 사용할 수 있다.

function sayHello() {
  console.log("Hello!");
}
//argument=인수

//function (a){
//  var a
//console.log("Hello! " + a);
//  }
