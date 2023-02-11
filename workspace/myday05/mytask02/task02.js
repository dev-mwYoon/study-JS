/* 
    task02.html
*/
HTMLCollection.prototype.forEach = Array.prototype.forEach;

// 숫자 한글 변경 함수
function numToHan(callback) {
    const input = document.getElementById("input").value;
    const hangle = "공일이삼사오육칠팔구".split("");
    let result = "";
    let nums = input.split("");
    let dot = ".";
    let count = 0;
    
    nums.forEach(num => {
        if(isNaN(num)){
            if (num == dot) {
                result = result + "점";
                count++;
            } else {
                result = "숫자만 입력해주세요.";
                return false;
            }
        }
        else {
            result = result + hangle[parseInt(num)];
        }
    });
    if (count > 1) {
        result = "숫자만 입력해주세요.";
        callback(result);
    }
    return result;
    console.log(result);
}

function confirm(result) {
    const print = document.getElementsByClassName("result-span");
    if(!input) {
        print.innerHTML = "결과 표시 부분";
    } else {
        print.innerHTML = numToHan();
    }   

}