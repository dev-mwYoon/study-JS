// 이름 정규식, 유효성 검사
function checkName(asValue){
    const input = document.querySelector("#name-warning").value;
    
    var regExp = /[ㄱ-힣]/;
    
	return regExp.test(asValue);
}