const ON = 1;

function testConst(){
    // ON = 2; // 값의 변경이 불가능. 진짜 상수
    console.log(ON);
}

function testLet(){
    let data = 10;
    // let data = 20; // let은 중복 선언 불가능
    data = 20; // 값 변경은 가능.
    console.log(data);
}

testLet();
testConst();