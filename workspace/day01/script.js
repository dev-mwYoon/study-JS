// script-file.html
// url.html

function changeImage(object){
    console.log(object.classList);
    let status = object.classList[0];
    console.log(status);
    if(status == "on"){
        object.classList.replace("on", "off");
        object.src = "image/icon3.png";
        return;
    }

    object.classList.replace("off", "on");
    object.src = "image/icon4.png";

}