import type { Product } from "./9.interface-export.js";

// Type Alias
type Pair<T> = [T, T];
const point: Pair<number> = [1, 2];
const fullname: Pair<string> = ["홍", "길동"];

// Map, Set
const map = new Map<string, Product>();
const set = new Set<number>();
set.add(123);
set.add("123"); // X

// 기타 Generic을 활용한 Typescript utilities

// 객체 타입 정의
const obj: Record<string, number> = {
  a: 123, // O
  b: "234", // X
};

interface User {
  name: string;
  password: string;
  gender: "M" | "W";
  birth: number;
}

// Pick: 객체 타입에서 내가 원하는 속성만 골라서 새로운 타입을 생성
type UserDTO = Pick<User, "name" | "gender" | "birth">;

// Omit: 객체 타입에서 내가 원하는 속성을 빼고 새로운 타입을 생성 (속성 자동완성 X)
type UserDTO2 = Omit<User, "password">;

// Exclude: Union에서 아이템 제거
type ShoeSize = 220 | 230 | 240 | 250;
type ShoeSize2 = Exclude<ShoeSize, 220 | 230>;

// Parameters: 함수의 파라미터 타입 가져오기
function addToCart(id: string, quantity: number) {}
type AddToCartParameters = Parameters<typeof addToCart>;

// ReturnType: 함수의 반환 타입을 가져오기
function addToCart2(id: string, quantity: number): boolean {
  return false;
}
type AddToCartResult = ReturnType<typeof addToCart2>;

// #######

// 타입 삼항연산 "조건문 ? 참인경우 타입 : 거짓인 경우 타입"
// 타입 삼항연산에서 조건문은 generic T가 어떤 타입을 확장하는지(어떤 타입과 같은지)를 보고 판단한다.
// 예시) T가 숫자를 확장한다면?(= 숫자라면)
type IsNumber<T> = T extends number ? User : Product;
type Result1 = IsNumber<number>;
type Result2 = IsNumber<string>;

// infer: 해당하는 위치의 타입을 가르킴 
// 예시) ReturnType

// `<T extends 함수>`: 이 타입은 함수에서만 사용한다는 의미, *T의 타입을 함수로 강제*
// `T extends (...args: any) => infer R`: 만약에 T가 함수라면 infer R 부분의 타입을 추론한다.
type ReturnType<T extends (...args: any) => any> = T extends (...args: any) => infer R ? R : any;

// Parameters의 경우는 추론해서 가지고 오는 타입이 ...args 부분이기 때문에 해당부분에 infer를 사용
type Parameters<T extends (...args: any) => any> = T extends (...args: infer P) => any ? P : any;

// 실습1) infer를 활용해서 배열의 아이템 타입을 가져오는 util type을 만드시오.
// type ArrayElement<T extends any[]> = T extends Item[] ? Item : any;
type ArrayElement<T extends any[]> = T extends (infer U)[] ? U : any;

type NumberArr = number[];
type NumberItem = ArrayElement<NumberArr> // number

// 실습2) infer를 활용해서 Promise객체의 resolve 된 값의 타입을 가져오는 util type을 만드시오.
type UnwrapPromise<T extends Promise<any>> = T extends Promise<infer U> ? U : any

type PromiseString = Promise<string>
type PromiseResult = UnwrapPromise<PromiseString> // string
