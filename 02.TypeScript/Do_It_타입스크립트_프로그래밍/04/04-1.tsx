//  함수 선언문
// function 함수 이름(매개 변수1: 타입1, 매개변수2: 타입2, [, ...]): 반환값 타입 {
//     함수 몸통
// }

function add(a: number, b: number): number {
    return a + b
}

let result = add(1, 2);

// void 타입 : 값을 반환하지 않는 함수의 반환 타입
function printMe(name: string, age: number) {
    console.log(`name: ${name}, age: ${age}`)
}

// 함수 시그니처 : 함수의 타입
// (매개변수1 타입, 매개변수2 타입[, ...]) => 반환값 타입

let printMe2: (string, number) => void = function (name: string, age: number): void {}

// type키워드로 타입 별칭 만들기
// 기존에 존재하는 타입을 단순히 이름만 바꿔서 사용할 수 있게
// type 새로운 타입 = 기존 타입

type stringNumberFunc = (string, number) => void;
let f: stringNumberFunc = function(a: string, b: number): void {};
let g: stringNumberFunc = function(c: string, d: number): void {};

// undefined 관련 주의 사항
// 매개변숫 값이 undefined인지 판변하는 코드 작성
interface INameable {
    name: string;
};

function getName(o: INameable) {
    return o != undefined ? o.name : 'unknown name'
}

let n = getName(undefined)
console.log(n);     // unkown name
console.log(getName({ name: 'Jack'}))   // Jack

interface IAgeable {
    age?: number;
};

function getAge(o: IAgeable) {
    return o!= undefined && o.age ? o.age : 0
}

console.log(getAge(undefined))      // 0
console.log(getAge(null))       // 0
console.log(getAge({age: 32}))      // 32


// 선택적 매개변수
// 매개함수에도 이름 뒤에 물음표를 붙일 수 있음
function fn(arg1: string, arg2?: number): void {};

function fn2(arg1: string, arg2?: number) {console.log(`arg2: ${arg2}`)}
fn2('hello', 1)   // 1
fn2("hello")    // undefined