// Enum (열거형)
// - 값이 상수이며, 나열할 수 있는 경우 사용
// - 값으로서 활용가능한 타입 객체
// - JS에 존재 X

// 기본적으로 index 값이 할당됨
enum Size {
  S, // 0
  M, // 1
  L, // 2
  XL, // 3
}

console.log(Size.L); // 2

// 열거형은 값을 할당해서 사용하도록 권장이 됨
enum Size2 {
  S = "S",
  M = "M",
  L = "L",
  XL = "XL",
}

console.log(Size2.L); // "L"

// 객체 타입에서 enum을 활용
const product: {
  id: string;
  price: number;
  size: Size2;
} = {
  id: "c001",
  price: 129_000,
  size: Size2.L,
};

// 객체 타입에서 enum을 활용222
const stockItem: {
  // 사이즈별로 재고를 담는 속성
  stock: {
    [size in Size2]: number;
  };
} = {
  stock: {
    S: 0,
    M: 0,
    L: 123,
    XL: 0,
  },
};

const stockItemOptionalSize: {
  stock: {
    // ?를 넣어서 optional하게 enum을 할당할 수 있음
    [size in Size2]?: number;
  };
} = {
  stock: {
    S: 0,
  },
};

const stockItemUseEnumKey: {
  stock: {
    [size in Size2]?: number;
  };
} = {
  stock: {
    // enum을 키로 활용
    [Size2.L]: 0,
  },
};
