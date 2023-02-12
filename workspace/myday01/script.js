// script-file.html
// url.html

function changeImage(object) {
    // classList 클래스 내 여러개 중에서 가져오는거
    let status = object.classList[0];
    // let result = status == "on" ? "image/img2.jpg" : "image/img1.jpg"
    if(status == "on") {
        object.classList.replace("on", "off");
        object.src = "image/img2.jpg";
        return;
    }

    object.classList.replace("off", "on");
    object.src = "image/img1.jpg"
}