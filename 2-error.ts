// 타입에러 이해하기
// 1. 객체 타입도 추론이 된다.
// 2. 속성의 타입에러 확인

const product = {
  id: "c001",
  name: "라이트 윈드 브레이커",
  price: 129000,
};

product.price = "139000원";

const salePrice = product.price * 0.9;
console.log(`할인 가격: ${salePrice}`);

// ###
// 1. 객체간에도 타입에러가 발생할 수 있음
// Type '{ id: string; name: string; price: number; sizes: number[]; }' is not assignable to type '{ id: string; name: string; price: number; sizes: string[]; }'.
//   Types of property 'sizes' are incompatible.
//     Type 'number[]' is not assignable to type 'string[]'.
//       Type 'number' is not assignable to type 'string'.ts(2322)

let product2 = {
  id: "c001",
  name: "라이트 윈드 브레이커",
  price: 129000,
  sizes: ["M", "L", "XL"],
};

const newProduct2 = {
  id: "c002",
  name: "다크 윈드 브레이커",
  price: 139000,
  sizes: [90, 95, 100, 105, 100],
};

product2 = newProduct2;
