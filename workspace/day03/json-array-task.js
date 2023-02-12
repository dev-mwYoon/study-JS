// 상품명, 가격, 재고를 프로퍼티로 담고 있는 Object를 3개 선언한다.
// 3개의 Object를 1개의 Array 객체에 모두 담는다.
// JSON으로 변경시킨다.

// shop.json에 변환된 JSON 형식의 문자열을 작성한다.
// shop.json을 읽어 온 뒤 Array 객체로 변환한다.
// 총 가격과 총 재고 수를 Object에 담은 뒤 sum.json으로 출력한다.
<<<<<<< HEAD

=======
let file = require("fs");
>>>>>>> 3ab64b15a301d6b94e308a7fe115b406347f1269
function Product(name, price, stock) {
    this.name = name;
    this.price = price;
    this.stock = stock;
}

let products = [
    new Product('참후레쉬', 1500, 90),
    new Product('참후레쉬', 1500, 60),
    new Product('참후레쉬', 1500, 30)
];

let productsJSON = JSON.stringify(products);
<<<<<<< HEAD
=======
// file.writeFile('shop.json', productsJSON, 'utf-8', error => {});
file.readFile('shop.json', 'utf-8', (error, contents) => {
    let products = JSON.parse(contents);
    let totalPrice = products.map(product => product.price).reduce((totalPrice, price) => totalPrice + price);
    let totalStock = products.map(product => product.stock).reduce((totalStock, stock) => totalStock + stock);
    let sum = {totalPrice: totalPrice, totalStock: totalStock};
    let sumJSON = JSON.stringify(sum);
    file.writeFile('sum.json', sumJSON, 'utf-8', error => {});
});
>>>>>>> 3ab64b15a301d6b94e308a7fe115b406347f1269

// 각 상품별 총 가격을 구한 뒤 출력한다.
// callback 함수를 사용한다.
// 외부에서는 JSON 데이터가 전달된다.
<<<<<<< HEAD
function getTotals(productsJSON, callback) {
    let products = JSON.parse(productsJSON);
    let totals = products.map(product => product.price * product.stock);
    if(callback){
        callback(totals);
    }
}

getTotals(productsJSON, totals => {totals.forEach(total => console.log(total))});
=======
// function getTotals(productsJSON, callback) {
//     let products = JSON.parse(productsJSON);
//     let totals = products.map(product => product.price * product.stock);
//     if(callback){
//         callback(totals);
//     }
// }

// getTotals(productsJSON, totals => {totals.forEach(total => console.log(total))});
>>>>>>> 3ab64b15a301d6b94e308a7fe115b406347f1269
