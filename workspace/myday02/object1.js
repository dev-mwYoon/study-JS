let account = {
    owner: "윤민우",
    password: "1234",
    account: "11-11-123121454"
};

console.log(account);

account.age = 20;
console.log(account.age);

account.money = 10000;
account.deposit = function(money){
    this.money += money;
}

account.deposit(30000);
console.log(`${account.money}원`);