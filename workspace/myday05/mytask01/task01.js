HTMLCollection.prototype.forEach = Array.prototype.forEach;
HTMLCollection.prototype.map = Array.prototype.map;
HTMLCollection.prototype.filter = Array.prototype.filter;

const input = joinForm.tariff;
const button = document.querySelector("button");
const ageGroup = document.getElementsByClassName("age-group");

// const child = document.querySelector("#child");

console.log(ageGroup);
// ageGroup.innerHTML.forEach(e => console.log(e));
// let ageGroup1 = ageGroup.forEach(ageGroup => ageGroup.innerHTML);
// let ageGroup1 = ageGroup.forEach(ageGroup => ageGroup.innerHTML);
// console.log(ageGroup1);


function reInput(str, callback){
    child.innerHTML= str;
}

button.addEventListener("click", function(e){
    let result;
    let ageGroupName = ageGroup.forEach(e => e.innerHTML);
    ageGroupName.forEach(e => e == input.value ? result = e);
    ageGroup.forEach(e => e.innerHTML == input.value ? result )
});

// function checkTariff() {
//     if (input.value == ageGroup1[0]) {
        
//     }
// }

