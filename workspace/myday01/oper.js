// false로 취급되는 값: "", 0, null, undefined
function testFalse() {
    let data = "";
    let result;
    if(data) {
        result = "TRUE";
    }
    else{
        result = "FALSE";
    }
    console.log(result);
}

function compareType(){
    let data1 = "1", data2 = 1;

    console.log(data1 == data2); // 문자열 안에 있는 값만 비교
    console.log(data1 === data2); // 문자열 안에 값과 타입까지 비교
}

testFalse();
compareType();