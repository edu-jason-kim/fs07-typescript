// `타입` + `[]` = `타입[]` 형태로 배열의 타입을 지정
const cart: string[] = ["c001", "c002"];

cart.forEach(item => {
  console.log(item)
})

// 이중 배열
const carts: string[][] = [
  cart,
  ["c001", "c002"],
  ["d001", "d002"],
];

// 튜플 타입
const mySizes: [number, number, string] = [
  105, 34, 'xl'
]

const mySize1 = mySizes[0]
const mySize2 = mySizes[1]
const mySize3 = mySizes[2]
