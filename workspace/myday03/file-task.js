// 상품명, 가격, 재고를 JS 객체에 프로퍼티로 담는다.
// JSON 형식으로 변환한 뒤, product.json으로 출력한다.
// product.json에 있는 JSON 형식을 JS Object 타입으로 변환하여 각 프로퍼티를 출력한다.

function Product(name, price, stock) {
    this.name = name;
    this.price = price;
    this.stock = stock;
}

let products = [
    new Product('사탕', 500, 50),
    new Product('초콜릿', 1000, 50),
    new Product('커피', 2000, 50)
];

let productsJSON = JSON.stringify(products);
// console.log(productsJSON);

let file = require('fs');
// file.writeFile('product.json', productsJSON, 'utf-8', error => {
//     if(error){
//         console.log(error)
//     }else{
//         console.log("성공!");
//     }
// })

file.readFile('product.json', 'utf-8', (error,content) => {
    if(error){
        console.log(error)
    }else{
        console.log(JSON.parse(content));
    }
})