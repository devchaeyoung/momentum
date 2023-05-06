console.log("자세한 공부기록이 궁금하다면 github.com/devchaeyoung/momentum/commits의 히스토리를 확인해주세요!");
console.log("'today I Learned'가 궁금하다면 'velog.com/@xiu_8'를 확인해주세요 :)");

const player = {
  name: "chaeyoung",
  sayHello: function (otherPersonsName) {
    console.log("Hello! " + otherPersonsName + ". Nice to Meet you :)");
  },
};

player.sayHello("Taeho");
player.sayHello("chayoung");
