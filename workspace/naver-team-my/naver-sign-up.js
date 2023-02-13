// 이름 정규식, 유효성 검사


// console.dir(input);

// input.addEventListener("blur", function(){
//     if(input.value == "a"){
//         nameWarning.style.color = "blue";
//         nameWarning.innerHTML = "a";
//         nameWarning.style.display = "none";
//     }
// });


// document.querySelector("#input-name").addEventListener("blur", getResult(checkName));
const inputName = document.querySelector("#input-name");
const nameWarning = document.querySelector("#name-warning");
const genderSelect = document.querySelector("#gender-select");
const genderWarning = document.querySelector("#gender-warning");
const inputEmail = document.querySelector("#input-email");
const emailWarning = document.querySelector("#email-warning");

inputName.addEventListener("blur", e => checkNameResult(checkName));
genderSelect.addEventListener("change", e => checkGenderResult(checkGender));
inputEmail.addEventListener("blur", e => checkEmailResult(checkEmail));

// 이름 정규식
function checkName(asValue, warningTag){
    // console.log("checkName 들어옴");
    // console.log(asValue);
    // console.log(warningTag);

    let check = false;
    var regExp = /[ㄱ-힣]/;
    // function checkTrue(){warningTag.style.display = "none"; console.log("checkTrue 들어옴");}
    // function checkFalse(){warningTag.style.display = "block";console.log("checkFalse 들어옴");}
    let checkTrue = () => warningTag.style.display = "none";
    let checkFalse = () => warningTag.style.display = "block";

	check = regExp.test(asValue.value);

    check ? checkTrue() : checkFalse();
    // check == true ? checkTrue() : checkFalse();
    // check = check == true ? checkTrue : checkFalse;
    // check();
}

// 이름 정규식
function checkNameResult(callback){
    console.log("getResult 들어옴");
    if(callback){
        console.log("callback 들어옴");
        callback(inputName, nameWarning);
    }
}


// 성별 정규식
function checkGender(asValue, warningTag){
    // let check = false;
    // var regExp = /[ㄱ-힣]/;
    let checkTrue = () => warningTag.style.display = "none";
    let checkFalse = () => warningTag.style.display = "block";

	// check = regExp.test(asValue.value);

    asValue.value ? checkTrue() : checkFalse();
}
// 성별 정규식
function checkGenderResult(callback){
    if(callback){
        console.log("callback 들어옴");
        callback(genderSelect, genderWarning);
    }
}

// 이메일 정규식
function checkEmail(asValue, warningTag){
    let check = false;
    // let flag = false;
    var regExp = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
    let checkTrue = () => warningTag.style.display = "none";
    let checkFalse = () => warningTag.style.display = "block";
    // console.log(asValue.value.length);
    if (asValue.value.length == 0) {
        checkTrue();
        // flag = true;
        return
    }
    // if (!flag) {
    check = regExp.test(asValue.value);
    check ? checkTrue() : checkFalse();
    // }
}
// 이메일 정규식
function checkEmailResult(callback){
    if(callback){
        console.log("callback 들어옴");
        callback(inputEmail, emailWarning);
    }
}

