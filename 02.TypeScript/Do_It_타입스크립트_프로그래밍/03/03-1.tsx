// 타입스크립트 변수 선언문
// 타입주석
// let 변수 이름: 타입 [=초깃값]
// const 변수 이름: 타입 = 초깃값

let n: number = 1;
let b: boolean = true;
let s: string = 'hello';
let o: Object = {};

// 타입 추론 / 타입주석 생략 가능
let n1 = 1;

// any 타입
// 어떤 종류의 값도 저장 가능
// 최상위 타입
let a: any = 0;
a = 'hello';
a = true;
a = {};

// undefined 타입(값도 가능)
// 최하위 타입
let u: undefined = undefined;

// 템플릿 문자열
//  `${변수 이름}`
let count = 10, message = 'Your count';
let result = `${message} is ${count};`
console.log(result) // Your count is 10