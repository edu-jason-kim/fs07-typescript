interface Product {
  id: string;
  name: string;
  price: number;
  salePrice: number;
  memberOnly?: boolean;
}

// keyof: 객체의 키로 union type을 만드는 연산자
const productTableKeys: (keyof Product)[] = [
  "id",
  "name",
  "price",
  "memberOnly",
  "salePrice",
];

const product: Product = {
  id: "c001",
  name: "코드잇 후드",
  price: 129_000,
  memberOnly: false,
  salePrice: 109_000,
};

for (const key of productTableKeys) {
  console.log(`${key} | ${product[key]}`);
}

// #########

// 기존 JS의 typeof: 기본타입(string, number, boolean, object 등)을 구분할 수 있는 연산자
// - 값이 있는 표현식 -> JS에서 사용
console.log(typeof product);

// TS의 typeof: typeof 뒤의 값의 타입을 가지고 온다.
let product2: typeof product;

// 예시
interface ClothingProduct extends Product {
  color: string;
}
interface ShoeProduct extends Product {
  size: string;
}

function printProduct(product: ClothingProduct | ShoeProduct) {
  // typeof를 조건문에서 활용할 수 없는 이유
  // 1. JS typeof 연산자는 기본타입만 구분 가능
  // 2. type 정보는 컴파일 시점에만 존재, JS로 변환되면서 타입정보가 사라지기 때문에 조건문에서 사용불가
  if (typeof product === ClothingProduct) {
    product;
  }
}

// #####

const product3: Product = {
  id: "c001",
  name: "코드잇 후드",
  price: 129_000,
  memberOnly: false,
  salePrice: 109_000,
};

// Product 타입의 객체를 통해서 만든 key임에도, keyof Product 타입이 잡히지 않고 string 타입으로 잡힘
Object.keys(product3).forEach((_key) => {
  // 따라서 keyof 연산자를 활용해서 Product의 key로 타입을 강제해서 활용 가능
  const key = _key as keyof Product;
  const value = product3[key];

  // const value = product3[_key as keyof Product];
});
