const player = {
  name: "emma", // It's property
  points: 10,
  pretty: true,
};

console.log(player);
console.log(player.name);
//console = the object
//log = this is anywhere
//player.name 에 접근하는 또 다른 방법
console.log(player["name"]);
//프로퍼티의 객체(object)를 바꾸는 방법
console.log(player);
player.points = 50;
console.log(player);
//const는 바꿀 수 없지만 그런 작업은 우리가 하는 것이 아님
//단 오류는 아래처럼 전체의 property값은 하나로 바꾸려할 때 일어남
// player = false;
// console.log(player);

player.lastName = "Jin";
console.log(player);

player.points = player.points + 15;
console.log(player.points);
