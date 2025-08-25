interface Product {
  id: string;
  name: string;
  price: number;
}

// Generic interface
interface SizedProduct<T> extends Product {
  sizes: T[]; // 신발: 숫자, 옷: 문자
}

// 'M', 'L', 'XL'
enum ClothingSize {
  S = "S",
  M = "M",
  L = "L",
  XL = "XL",
}

// T 파라미터 자리에 ClothingSize enum 전달
type ClothingProduct = SizedProduct<ClothingSize>;
const clothingProduct: ClothingProduct = {
  id: "c001",
  name: "바람막이",
  price: 129_000,
  sizes: [ClothingSize.L],
};

// T 파라미터 자리에 number 타입 전달
type ShoeProduct = SizedProduct<number>;
const shoeProduct: ShoeProduct = {
  id: "s001",
  name: "코드잇 신발",
  price: 109_000,
  sizes: [220, 230],
};
