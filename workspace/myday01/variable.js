/* 
    author: Yoon
    contents: variable
    register date: 2023-02-06
    update: 2023-02-06
*/

// 동적 바인딩: 컴파일 시 값에 따라 자료형이 동적으로 결정된다.
// var data = 10;
// console.log(data);
// console.log(typeof(data));

// data = "안녕";
// console.log(typeof(data));

// hoisting(호이스팅) : 선언의 위치에 상관없이 존재하면 메모리에 할당된다.
//                      초기화 작업은 호이스팅(적용) 되지 않고 선언만 호이스팅(적용)된다.
// ※ var 키워드를 사용하지 않으면 호이스팅되지 않는다.

// 자바스크립트는 스크립트언어기 때문에 자바의 컴파일과 달리 한줄씩 검사 후 
// 일단 선언되면 메모리에 할당하고 실행 순서에 따라 선언 위치에 따라 사용 시 값을 결정한다.
// 즉, 스크립트 언어라 한줄씩 검사하는데 컴파일 과정을 하게 되어 호이스팅이 존재하게 됐다.
// console.log(age);
// // var age = 10;
// // var키워드 없이 선언한 경우 호이스팅되지 않는다.
// age = 10;
// console.log(age);

// 지역일 때, var 금지. 전역일 때에만 사용
// var 키워드를 사용하더라도 여러 번 선언이 가능하기 때문에 계속 수정될 수 있다. 목적에 맞게 쓰지 않은 코드이다.
var data = 10;
var data = 20;
console.log(data);
