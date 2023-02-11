// 프로토타입
// new 뒤에 나오는 생성자를 자바스크립트에서는 프로토타입이라고 부른다.
// 프로토타입은 함수로 선언하여 사용한다. 단, 반드시 대문자로 시작해준다.


function User(id, password, name, age){
    this.id = id;
    this.password = password;
    this.name = name;
    this.age = age;
    this.intro = function(){
        with(console){
            log(this.id);
            log(this.password);
            log(this.name);
            log(this.age);
        }
    }
}

let yoon = new User("ymw1234", "1234", "윤민우", 20);
let han = new User("han1234", "1234", "한동석", 20);