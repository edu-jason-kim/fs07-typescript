// 타입 별칭
// `type 타입이름 = 할당할 타입` 형태로 작성

// Primary Type
type IsMemberOnly = boolean;
const isMemberOnly: IsMemberOnly = false;

// Array Type
type Cart = string[];
const cart: Cart = [];

// Function Type: function statement로는 타입 할당이 어려워 보통 화살표 함수로 타입을 지정
type AddToCart = (productId: string, quantity: number) => boolean;
const addToCart: AddToCart = (productId, quantity) => {
  // 성공 했다고 가정
  return true;
};

// Object Type
type Product = {
  id: string;
  name: string;
  price: number;
  isMemberOnly?: boolean; // optional
}

const product: Product = {
  id: "c001",
  name: "바람막이",
  price: 129000,
  // isMemberOnly: true,
};
