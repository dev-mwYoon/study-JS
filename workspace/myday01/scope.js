// var x;
// var x = 20;
// this.x는 물음표 필드.
// this.x = 20;

// 정확히 최상위 객체에 변수를 저장해야 가져와서 사용 가능하다.
// global.x는 node에서만 사용가능

// var x = 20;      // 지역변수와 이름이 겹치지 않는 전역 변수
// global.x = 20;   // Node.js에서의 최상위 객체(전역 객체)
// window.x = 20;   // 브라우저에서의 최상위 객체(전역 객체)
// globalThis는 글로벌, 윈도우 둘다 에서도 사용하기 위해 사용.
globalThis.x = 20;  // global과 window객체를 상황에 맞게 사용해주는 전역 객체

function f(){
    // var x = 10;
    // console.log(x);
    // console.log(this.x);
    // console.log(global.x);
    // console.log(window.x);
    console.log(globalThis.x);

    // let일 때는 함수 영역 내 함수?에서만 사용할 때 사용?
    // for(let i = 0; i < 10; i++) {
    for(var i = 0; i < 10; i++) {

    }
    console.log(i);
}

f();