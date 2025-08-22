// any: JS와 타입을 동일하게 동작하게 만드는 타입
let product;

// 1. any 타입의 변수는, 모든 타입의 값을 할당 받을 수 있다.
let product2: any = "123";

// 2. any 타입의 값은, 모든 타입의 변수에 할당될 수 있다.
// - JSON.parse는 any 타입을 반환하는 함수
const localStorageData: { a: number } = JSON.parse('{"a": "123"}');

// 3. 외부의 API를 사용을 해서 타입의 대한 정보를 알기 어려운 경우
// 예) https://postcode.map.daum.net/guide
new (window as any).daum.Postcode({
  oncomplete: function (data: { address: string }) {
    console.log(data);
  },
}).open();
