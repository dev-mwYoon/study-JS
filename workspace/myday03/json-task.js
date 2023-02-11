// 동물원에 동물이 3마리 있다
// 각 동물별 정보는 이름, 종, 나이이다.

function Animal(name, type, age) {
    this.name = name;
    this.type = type;
    this.age = age;
}

let animals = [new Animal('사자', 'lion', 15),
new Animal('호랑이', 'tiger', 20),
new Animal('코끼리', 'elephant', 25)];

let animalsJSON = JSON.stringify(animals);


// 동물원의 동물 전체 평균 나이를 구한다.

function average(animalsJSON, callback) {
    let animals = JSON.parse(animalsJSON);
    // reduce(total, data)일 경우 항상 total값의 타입은 data의 타입과 동일하게 설정된다.
    let total = animals.map(animal => animal.age).reduce((total, age) => total + age);
    let average = total / animals.length;
    if(callback) {
        callback(average);
    }
    return average;
}

average(animalsJSON, average => console.log(average));