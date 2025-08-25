import type { Product } from "./9.interface-export.js";

// Generic은 타입을 파라미터화하여 사용하는 방법
const shoeSizes: number[] = [220, 230, 240];
shoeSizes.forEach((shoeSize) => {
  console.log(shoeSize);
});

const clothingSizes: string[] = ["M", "L", "XL"];
clothingSizes.forEach(
  // 정의한 함수를 모든 아이템에 대해서 실행
  (clothingSize) => {
    console.log(clothingSize);
  }
);

// generic 함수 만들기
// 1. <T>: T라는 타입 파라미터를 사용할 것에 대한 정의
// 2. T 파라미터를 함수에서 어떻게 사용할 것인지 정의
// 3. 보통 T,U,V를 많이 씀
function printArray<T>(items: T[]) {
  for (const item of items) {
    console.log(item);
  }
}

// 타입을 추론해서 Generic 타입을 지정하는 방법: T[]에 추론하고 싶은 배열 할당
const emptyArr = []; // any[]
printArray(emptyArr); // T 자리가 any가 됨

const stringArr: string[] = [];
printArray(stringArr); // T자리가 string이 됨

// 타입을 명시하여 Generic 타입을 지정하는 방법: <T> 자리에 원하는 타입 할당
printArray<number>([123, 234]);
printArray<Product>([]); // Product만 올 수 있음

// 실습: Generic 개념을 활용하여 forEach 함수 만들기
// forEach: 정의한 callback을 모든 아이템에 대해서 실행하는 함수
function forEach<T>(items: T[], callback: (item: T) => void) {
  for (const item of items) {
    callback(item);
  }
}

// T[]에 string[] 값을 넣음으로서 T를 string으로 추론
const clothingSizes2: string[] = ["M", "L", "XL"];
forEach(clothingSizes2, (size) => {
  console.log(size);
});

// <T>에 number타입을 할당함으로서 T를 number 타입으로 명시적으로 선언
const shoeSizes2 = [220, 230, 240] as any[];
forEach<number>(shoeSizes2, (size) => {
  console.log(size);
});
