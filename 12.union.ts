// 타입에 대한 or 연산: 타입이 둘 중에 하나일 때
// Type Narrowing(타입 좁히기): 넓은 타입을 더 구체적인 타입으로 좁히는 기법
// 객체 형태의 union 타입은 공통된 속성만 접근할 수 있음

// 1. optional property를 정의할 때 or 연산이 사용 됨
interface Product {
  id: string;
  name: string;
  price: number;
  isMemberOnly?: boolean; // boolean | undefined
}

const product: Product = {
  id: "c001",
  name: "바람막이",
  price: 129000,
  // isMemberOnly: true,
};

const isMemberOnly = product.isMemberOnly;

// Type Narrowing 예시
function checkMemberOnly(product: Product) {
  // const isMemberOnly: boolean | undefined
  const isMemberOnly = product.isMemberOnly;

  // 조건문: 만약 undefined가 아니라면
  if (isMemberOnly !== undefined) {
    // 이 블럭 안에서는 반드시 undefined가 아님
    console.log(isMemberOnly); // 따라서 boolean 타입으로 *타입이 좁혀지게 됨*
  } else {
    isMemberOnly; // undefined
  }
}

// 2. 튜플의 요소를 순회할 때 각 아이템에 union 타입이 사용됨
const mySizes: [number, number, string] = [105, 34, "xl"];

// size: string | number
mySizes.forEach((size) => {
  // Type Narrowing 예시: 원시타입은 typeof 연산자 활용
  if (typeof size === "string") {
    size; // string
  } else {
    size; // number
  }
});

// 3. interface union 타입
interface ClothingProduct extends Product {
  color: string;
}
interface ShoeProduct extends Product {
  size: string;
}

function printProduct(product: ClothingProduct | ShoeProduct) {
  // product는 공통된 속성만 가지고 있음 -> 아직 ClothingProduct인지, ShoeProduct인지 알 수 없기 때문
  console.log(product); // ClothingProduct | ShoeProduct

  // Type Narrowing 예시
  // 'color' 속성이 product에 존재한다면 -> ClothingProduct
  if ("color" in product) {
    product; // ClothingProduct
  }

  if ("size" in product) {
    product; // ShoeProduct
  }
}

// 4. literal union 타입 (enum과 취사선택으로 사용됨)
type Size = "S" | "M" | "L" | "XL";
const size1: Size = "S";
const size2: Size = "L";
const size3: Size = "XL";

type ShoeSize1 = 220 | 230 | 240;
type ShoeSize2 = `${1 | 2 | 3}${1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 0}0`;

// "as const"와 "typeof" 연산자를 활용한 방법
const routes = ["/", "/mypage", "/login", "register"] as const;

// type Route = "/" | "/mypage" | "/login" | "register"
type Route = (typeof routes)[number];
