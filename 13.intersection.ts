// 여러개의 타입을 하나의 타입으로 만드는 & 연산자
// 주로 객체의 속성을 합치기 위해 사용함

interface Id {
  id: string;
}

interface Timestamp {
  createdAt: number;
  updatedAt: number;
}

// type alias에서 사용
type Product = Id & Timestamp & {
  name: string;
};

const product: Product = {
  id: "c001",
  name: "코드잇 바람막이",
  createdAt: Date.now(),
  updatedAt: Date.now(),
};

// 기술적으로는 동일함
interface User extends Id, Timestamp {
  name: string
  birth: number
}
