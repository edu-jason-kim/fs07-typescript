// 객체의 타입을 지정할 때 interface를 사용한다.

enum Size {
  S = "S",
  M = "M",
  L = "L",
  XL = "XL",
}

interface BaseEntity {
  id: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Product extends BaseEntity {
  name: string;
  price: number;
  isMemberOnly?: boolean; // optional
}

// class에서 사용하는 extends(상속 키워드)를 통해 interface 간의 상속 가능
interface ClothingProduct extends Product {
  sizes: Size[];
}

const product: ClothingProduct = {
  id: "c001",
  name: "바람막이",
  price: 129000,
  sizes: [],
  createdAt: new Date(),
  updatedAt: new Date(),
  // isMemberOnly: true,
};
