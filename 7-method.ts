// 메서드 타입 지정

function addToCart(productId: string, quantity = 1): boolean {
  // 성공 했다고 가정
  return true;
}

const codeitmall: {
  stock: {
    [id: string]: number;
  };
  cart: string[];
  // (매개변수: 타입) => 반환타입
  addToCart: (id: string, quantity?: number) => boolean;
  // void는 함수에서 아무런 값도 반환하지 않도록 명시적으로 사용해야 할 때 쓰는 타입
  addManyToCart: (...ids: string[]) => void;
} = {
  stock: {
    c001: 3,
    c002: 2,
  },
  cart: [],
  addToCart,
  addManyToCart: (...ids) => {},
};

// console.log의 내부 구현
// rest parameter 타입: `...data` 형태로 표현
console.log(1, 2, 3); // => data = [1, 2, 3]
console.log(1); // => data = [1]
