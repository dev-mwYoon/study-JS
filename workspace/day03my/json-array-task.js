// 상품명, 가격, 재고를 프로퍼티로 담고 있는 Object를 3개 선언한다.
// 3개의 Object를 1개의 Array 객체에 모두 담는다.
// JSON으로 변경시킨다.

// shop.json에 변환된 JSON 형식의 문자열을 작성한다.
// shop.json을 읽어 온 뒤 Array 객체로 변환한다.
// 총 가격과 총 재고 수를 Object에 담은 뒤 sum.json으로 출력한다.
function Product(name, price, stock) {
    this.name = name;
    this.price = price;
    this.stock = stock;
    this.toJSON = JSON.stringify(this);
}

let products = new Array();

products.push(new Product('참후레쉬', 1500, 90).toJSON);
products.push(new Product('막걸리', 1900, 30).toJSON);
products.push(new Product('돔페리뇽', 2000000, 1).toJSON);

console.log(products);
// console.log(products.toString());
console.log(`[${products.toString()}]`); // 이렇게 해야 어레이객체를 JSON타입으로 변환 후 파일 저장했을 때 표시 값이랑 일치




// 각 상품별 총 가격을 구한 뒤 출력한다.
// callback 함수를 사용한다.
// 외부에서는 JSON 데이터가 전달된다.
function getTotals(products, callback) {
    let total;
    products = JSON.parse(products);
    if (callback) {
        totals = products.map(product => product.price * product.stock);
        callback(totals);
        // console.log(products);
        return;
    }
    // console.log(products);
    return totals;
}
