/* banner.html */
HTMLCollection.prototype.forEach = Array.prototype.forEach;
const banner = document.querySelector("div.banner");
const imageDiv = document.querySelectorAll("div.banner div");
let count = 0;


imageDiv.forEach((div, i) => 

banner.appendChild(lastImageDiv);
imageDiv[imageDiv.length -1].style.backgroundImage = `url(image/001.png)`


setInterval(function(){
    banner.style.transform = `translate(${-1728 * ++count}px)`;
    if(count == 5) {count = -1;}
}, 2000);