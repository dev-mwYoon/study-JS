// 상품명과 가격을 JSON으로 만든다.
// 위 JSON을 JS Object 객체로 변환한다.
// 각 프로퍼티를 출력한 뒤 다시 JSON으로 변환한다.

let JSONproduct = '{"name": "사과", "price": 5000}';
console.log(JSONproduct);
let product = JSON.parse(JSONproduct);
console.log(product);
JSONproduct = JSON.stringify(product);
console.log(JSONproduct);