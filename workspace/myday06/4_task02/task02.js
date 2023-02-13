/* 
    myday06/4_task01/task01.html
*/
// $("#change").on("click", e => {checkNameResult(changeToHangle)});
// $("#change").on("click", function(){checkNameResult(changeToHangle)});
// e = 클릭 실행 시, 콜백함수 실행
$("#change").click(e => checkNameResult(changeToHangle));
// e가 없으니까 클릭이 없어도 콜백함수 바로 실행
// $("#change").click(checkNameResult(changeToHangle));

function changeToHangle(number) {
    const $numbering = $("div#round");
    const $resultTag = $("#result");
    const hangle = "공일이삼사오육칠팔구";
    let result = "", temp = "", check = false;

    if(isNaN(number) || number.charAt(0) == '.'){
        $resultTag.text("숫자만 입력해주세요.");
        $numbering.text("4");
        return;
    }

    if(number < 1) {
        result = "영";
    }

    for(let i in number) {
        temp = hangle[number.charAt(i)];

        if(i == 0 && result == "영"){
            continue;
        }

        if(!temp) {
            check = true;
            result += "점";
            continue;
        }

        result += temp;

        $numbering.text("3");
        
        if(check){
            $numbering.text("2");
        }
    }
    $resultTag.text(result);
}

function checkNameResult(callback){
    const $input = $("input[name='input']").val();
    if(callback){
        callback($input);
    }
}




