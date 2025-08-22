const product: {
  id: string;
  name: string;
  price: number;
  isMemberOnly?: boolean; // optional
} = {
  id: "c001",
  name: "바람막이",
  price: 129000,
  // isMemberOnly: true,
};

product.isMemberOnly; // boolean | undefined

// 같은 타입의 속성을 제한없이 할당하는 경우
const stock: {
  // [키의 이름: 키의 타입]: 값의 타입
  [productId: string]: number;
} = {
  c001: 4,
  c002: 2,
  // ...
};
