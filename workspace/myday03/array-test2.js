// 1. 제어문
// 2. callback 함수
// 3. arrow expression

// 1~10까지 Array 객체에 담은 후 짝수만 출력
// let datas = new Array(10).fill(0);
// for (let i = 0; i < datas.length; i++) {
//     datas[i] = i + 1;
// }
// console.log(datas);
// console.log(datas.filter(datas => datas % 2 == 0));
// datas.filter(datas => datas % 2 == 0).forEach(datas => console.log(datas));



// 한글을 정수로 변경
// 공일이삼사오육칠팔구
// 
// function changeToNumber(str, callback) {
//     let hangle = "공일이삼사오육칠팔구";
//     let result = "";
//     for (let i = 0; i < str.length; i++) {
//         result += hangle.indexOf(str.charAt(i));
//     }
//     if (callback) {
//         return callback(result);
//     }
//     return result;
// }
// changeToNumber("일공이사", function(result){console.log(result)});
// let hangle = "공일이삼사오육칠팔구";
// let str = "일공이사";
// let result = "";
// console.log(str.split("").map(i => hangle.indexOf(i)).join(""));



/* ============================== */
let hangle = "공일이삼사오육칠팔구";

function numToHangle(selectNums) {
    result = "";
    for (let i = 0; i < selectNums.length; i++) {
        for (let j = 0; j < hangle.length; j++) {
            if(selectNums.charAt(i) == hangle.indexOf(hangle.charAt(j))){
                result += hangle.charAt(j);
            }
        }
    }
    return result;
}
console.log(numToHangle("4212"));
/* ============================== */



// 정수를 한글로 변경
// function changeToHangle(number) {
//     let hangle = "공일이삼사오육칠팔구";
//     number += "";
//     let result = "";
//     for (let i = 0; i < number.length; i++) {
//         result += hangle.charAt(parseInt(number.charAt(i)));
//     }
//     console.log(result);
// }
// changeToHangle(1024);

// 1~100까지 합 출력
// function addOneToNumber(number, callback) {
//     let result = 0;
//     for (let i = 0; i < number; i++) {
//         result += i+1;
//     }
//     if (callback) {
//         return callback(result);
//     }
//     return result;
// }
// addOneToNumber(100, function(result){console.log(result)});

