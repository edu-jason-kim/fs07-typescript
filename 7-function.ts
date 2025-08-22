// stock에서 cart로 아이템 담는 함수
// 성공 시 true, 실패 시 false (실패는 재고 없을 때) 반환

const stock: { [id: string]: number } = { c001: 3, c002: 1 }; // c003
const cart = [];

// 암묵적 any 선언을 방지하기 때문에 에러 발생 (https://www.typescriptlang.org/tsconfig/#noImplicitAny)
// noImplicitAny 옵션은 `strict: true` 경우 자동으로 `true`로 설정됨
function addToCart1(productId, quantity) {
  // 성공 했다고 가정
  return true;
}

// 함수 반환 타입은 매개변수 괄호 뒤에 `:` 과 함께 작성
function addToCart2(productId: string, quantity: number): boolean {
  // 성공 했다고 가정
  return true;
}

// optional type 지정
// quantity 매개변수는 optional한 매개변수
function addToCart3(productId: string, quantity?: number): boolean {
  // 성공 했다고 가정
  return true;
}

// default value 지정
// quantity 매개변수가 넘어오지 않은 경우 숫자 1이 기본 값으로 할당됨
// function addToCart4(productId: string, quantity: number = 1): boolean {
function addToCart4(productId: string, quantity = 1): boolean {
  // 성공 했다고 가정
  return true;
}

// optional type 매개변수는 항상 매개변수의 마지막 순서에 자리해야 함
function addToCart5(productId: string, quantity?: number, price: number): boolean {
  // 성공 했다고 가정
  return true;
}
