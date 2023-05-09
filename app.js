//return
//console.log를 사용하지않고 함수안에서 값을 확인하는 법

const yearOfBirth = 1800;
function calculateKrAge(theYearOfBirth) {
  let thisYear = 2023;
  thisYear - theYearOfBirth + 1;
  return "Hello";
}

// 아래코드를 보고 데이터값이 들어가는 흐름 따라 가보기.
const krAge = calculateKrAge(yearOfBirth);

console.log(krAge);

const calculator = {
  add: function (a, b) {
    return a + b;
  },
  minus: function (a, b) {
    return a - b;
  },
  multiply: function (a, b) {
    return a * b;
  },
  divide: function (a, b) {
    return a / b;
  },
  powerOf: function (a, b) {
    return a ** b;
  },
  rest: function (a, b) {
    return a % b;
  },
};

const plusResult = calculator.add(1, 3);
const minusResult = calculator.minus(4, 1);
const multiplyResult = calculator.multiply(56, 2);
const divideResult = calculator.divide(2048, 2);
const powerOfResult = calculator.powerOf(2, 11);
const restOfResult = calculator.rest(3.15, 2);
