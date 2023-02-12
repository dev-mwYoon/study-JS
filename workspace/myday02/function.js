// JS에서는 오버로딩을 지원하지 않는다.
// let result = add(1, 3); // NaN = Not a Number 값이 아닌 것 끼리 연산했을 때 나옴.
// console.log(result);    // 오버로딩 안됨.
// result = add(1, 3, 4);
// console.log(result);
// function add(number1, number2, number3){
//     return number1 + number2 + number3;
// }
// /* 같은 이름으로 선언하게 되면 가장 최근에 선언된 함수가 적용된다. */
// function add(number1, number2){
//     return number1 + number2;
// }
var result = add(1, 3);
console.log(result);
result = add(1, 3, 4);
console.log(result);
//         이름도 받고 싶다면 가변인자 앞에 받아야한다.
//    ex: add(name, ...numbers)
//           가변인자 , ...은 무한히 받을 수 있다.
function add() {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    var result = 0;
    for (var i = 0; i < numbers.length; i++) {
        result += numbers[i];
    }
    return result;
}
// typescript를 사용하고 싶을 때에는 다운로드 후 사용해야 한다.
// npm install typescript --save-dev
// npm install -g typescript
// npm install -g ts-node @types/node
// npx tsc
// Set-ExecutionPolicy Unrestricted (관리자 권한으로 실행)
// tsc --init
intro("윤민우", 20, "남자", "학생");
function intro(name) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    console.log("\uC774\uB984: ".concat(name));
    for (var i = 0; i < args.length; i++) {
        console.log(args[i]);
    }
}
