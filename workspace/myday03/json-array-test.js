function Passenger(name, age, level){
    this.name = name;
    this.age = age;
    this.level = level;
}

let yoon = new Passenger('윤민우', 20, 1);
let hong = new Passenger('홍길동', 40, 2);
let lee = new Passenger('이순신', 39, 3);

let train = new Array(yoon, hong, lee);
let trainJSON = JSON.stringify(train);
console.log(train);
console.log(trainJSON);