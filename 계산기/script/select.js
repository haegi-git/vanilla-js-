const inputNumber = document.querySelector("#num");
const plusBtn = document.querySelector(".plus");
const minusBtn = document.querySelector(".minus");
const multiplyBtn = document.querySelector(".multiply");
const divisionBtn = document.querySelector(".division");

const calculationOutput = document.querySelector(".calculation");
const resultOutput = document.querySelector(".result");

function outputResult(result, text) {
  resultOutput.textContent = result;
  calculationOutput.textContent = text;
}

// select.js는 html에 작성된 html태그 클래스,id값들을 변수에 담아놓았음
// function outputResult는 index.js에서 계산 함수가 작동하면 화면에 뿌려줄 함수이다.
