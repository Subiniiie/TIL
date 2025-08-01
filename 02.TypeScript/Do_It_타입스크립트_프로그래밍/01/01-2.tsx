// 타입스크립트 주요 문법 살펴보기

// (1) 비구조할당 : 객체와 배열에 적용
let person = { name: "Jane", age: 22};
let { name, age } = person; // name = "Jane", age = 22

let array = [1, 2, 3, 4];
let [head, ...rest] = array; //head = 1, rest = [2, 3, 4];

let a = 1, b = 2;
[a, b] = [b, a];    // a = 2, b = 1;


// (2) 화살표 함수
function add(a, b) {return a + b}; // 자바스크립트에서 사용
const add2 = (a, b) => a + b;

// (3) 클래스
// 객체지향 프로그래밍 / 캡슐화, 상속, 다형성 지원
// abstract class Animal {
//     constructor(public name?: string, age?: number) {}
//     abstract say() : string;
// }

// class Cat extends Animal {
//     say() {return '야옹'};
// };

// class Dog extends Animal {
//     say() {return '멍멍'};
// };

// let animals: Animal[] = [new Cat('야옹이', 2), new Dog('멍멍이', 3)]
// let sounds = animals.map(a => a.say());

// console.log(sounds)

// (4) 모듈
// 코드를 여러 파일로 분할해서 작성 / 변수, 함수, 클래스 등에 export 사용 / 가져오고 싶을 때는 import

// (5) 생성기
// yiled 문을 이용해 반복기 제공자인 생성기를 만듦
// 생성기를 이용해 반복기를 얻음
function* gen() {
    yield* [1, 2]
}

for (let value of gen()) {console.log(value)} //1, 2

// (6) Promise와 async / await 구문
// Promise를 이용해 비동기 콜백 함수를 쉽게 구현
// async/await 구문을 빌려서 여러 개의 Promise 호출을 결합

async function get() {
    let value = [];
    value.push(await Promise.resolve(1));
    value.push(await Promise.resolve(2));
    value.push(await Promise.resolve(3));
    return value
};

get().then(values => console.log(values));  // [1, 2, 3]


// 타입스크립트 고유 문법
// (1) 타입 주석과 타입 추론
// 콜론(:)과 타입 이름 -> 타입 주석
// 타입 부분을 생략할 시 대입 연산자의 오른쪽 값을 분석해 왼쪽 변수의 타입 결정 -> 타입 추론
let n: number = 1;
let m = 2;

// (2) 인터페이스
interface Person {
    name: string;
    age?: number;
}

let person2: Person = {name: 'Jane'};

// (3) 튜플
// 배열에 저장되는 아이템의 데이터 타입이 다름
let numberArray: number[] = [1, 2, 3]   // 배열
let tuple: [boolean, number, string] = [true, 1, 'ok']  // 튜플

// (4) 제네릭 타입
// 다양한 타입을 한꺼번에 취급
class Container<T> {
    constructor(public value: T) {}
}

let numberContainer: Container<number> = new Container<number>(1);
let stringContainer: Container<string> = new Container<string>('Hello world');

// (5) 대수 타입
// 다른 자료형의 값을 가지는 자룧ㅇ
// 합집합(|) 또는 교집합(&)
type NumberOrString = number | string;
type NumberAndString = number & string;
