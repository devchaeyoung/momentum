function plus(a, b) {
  console.log(a + b);
}

plus(2, 2);
//function의 목적은 같은 코드로 여러작업을 반복하기 위함

alert("lalalalalal");

function minusFive(potato) {
  console.log(potato - 5);
}
minusFive(3, 5, 6, 86, 42, 5, 7, 18);
// have so many argument But this function is affected only one argument in first.

const calculator = {
  add: function (a, b) {
    console.log(a + b);
  },
  minus: function (a, b) {
    console.log(a - b);
  },
  multiply: function (a, b) {
    console.log(a * b);
  },
  divide: function (a, b) {
    console.log(a / b);
  },
  powerOf: function (a, b) {
    console.log(a ** b);
  },
  rest: function (a, b) {
    console.log(a % b);
  },
};

calculator.add(1, 3);
calculator.minus(4, 1);
calculator.multiply(56, 2);
calculator.divide(2048, 2);
calculator.powerOf(2, 11);
calculator.rest(3.15, 2);

//과목 갯수별로 평균을 낼 수 있는 계산기 만들기
const calculator2 = {
  two: function (a, b) {
    console.log((a + b) / 2);
  },
  three: function (a, b, c) {
    console.log((a + b + c) / 3);
  },
  four: function (a, b, c, d) {
    console.log((a + b + c + d) / 4);
  },
  five: function (a, b, c, d, e) {
    const average = (a + b + c + d + e) / 5;
    console.log(average);
  },
};

calculator2.two(5, 1);
//calculator.과목갯수 를 입력하면 됨
