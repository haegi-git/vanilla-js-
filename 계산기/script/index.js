const defaultNumber = 0;
const recordArr = [];
// 기본값으로 0을 담아두고
// resultNumber 라는 결과값을 담아줄 변수를 만들어준 뒤 그곳에 기본값을 할당해줌
let resultNumber = defaultNumber;
outputResult(defaultNumber, defaultNumber);

function getInputVal() {
  return parseInt(inputNumber.value);
  // input의 value값을 가져올 함수이다. parseInt는 문자열을 숫자열로 변경시켜준다.
  // 타입을 확실하게 지정해주는느낌으로 사용
}

function recordResult(operation, resultBefore, enterNumber, newResult) {
  const resultLog = {
    연산자: operation,
    전결과값: resultBefore,
    입력된숫자: enterNumber,
    새로운결과: newResult,
  };
  recordArr.push(resultLog);
  console.log(recordArr);
  console.log(resultLog);
}

function writeOuput(operator, resultBefore, enterNumber) {
  const outputCalculation = `${resultBefore} ${operator} ${enterNumber}`;
  outputResult(resultNumber, outputCalculation);
  // 화면에 연산값을 출력해 보여줄 함수이다.
  // 매개변수로 연산자, 전결과값, 새로입력된 숫자를 받아온다.
  // 순서로 전에 결과값 연산자 입력된 값을 받아온다
  // 0 + 2 - 0은 전 결과값(기본값), 2는 새로받아온 숫자,
  // 그리고 outputResult함수에 매개변수에 전달해준다. (화면에 출력)
}

function addBtnFunc() {
  // 더하기 버튼이다. enterNumber에서는 유저가 입력한 숫자를 받아와 저장한다.
  const enteredNumber = getInputVal();
  // 유저가 입력한 값을 받아와 저장
  const initialResult = resultNumber;
  // 전 결과값을 저장
  resultNumber += enteredNumber;
  // 전 결과값에 새로 입력된 값을 더해준다.
  writeOuput("+", initialResult, enteredNumber);
  // 위 writeOutput *오타남 Ouput, 함수에 매개변수로 연산자와 전 결과값 새로입력된 숫자를 보내줌
  recordResult("더하기", initialResult, enteredNumber, resultNumber);
  // 여태 진행된 결과값을 객체로 저장하기위함
}
function minusBtnFunc() {
  const enteredNumber = getInputVal();
  const initialResult = resultNumber;
  resultNumber -= enteredNumber;
  writeOuput("-", initialResult, enteredNumber);
  recordResult("빼기", initialResult, enteredNumber, resultNumber);
}

function multiplyBtnFunc() {
  const enteredNumber = getInputVal();
  const initialResult = resultNumber;
  resultNumber *= enteredNumber;
  writeOuput("*", initialResult, enteredNumber);
  recordResult("곱하기", initialResult, enteredNumber, resultNumber);
}

function divisionBtnFunc() {
  const enteredNumber = getInputVal();
  const initialResult = resultNumber;
  resultNumber /= enteredNumber;
  writeOuput("/", initialResult, enteredNumber);
  recordResult("나누기", initialResult, enteredNumber, resultNumber);
}

plusBtn.addEventListener("click", addBtnFunc);
minusBtn.addEventListener("click", minusBtnFunc);
multiplyBtn.addEventListener("click", multiplyBtnFunc);
divisionBtn.addEventListener("click", divisionBtnFunc);
