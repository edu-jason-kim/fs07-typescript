let productName1 = '코드잇 블랙 후드'
const productName2 = '코드잇 텀블러'

let small = 95
const large = 100

function printSize (size: number) {
  console.log('Size is: ', size)
}

printSize(small) // 숫자 타입이 잡힌 변수, 당연히 됨
printSize(large) // 리터럴 타입이나, 숫자 타입에 속하기 때문에 숫자 타입으로서 활용 가능

// 리터럴을 활용하여 값 자체를 고정하는 tuple도 만들 수 있음
const tuple: [1,2,3] = [1,2,3]

// "as const" 키워드를 참조형 값 뒤에 붙여서 literal 타입 표현 가능
const routes = [
  '/',
  '/mypage',
  '/login',
  // ...
] as const

const obj = { a: 1, b: 2, c: 3 } as const
