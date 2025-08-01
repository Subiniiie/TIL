// 객체와 인터페이스
// object 타입은 다른 객체를 모두 담을 수 있음

// 인터페이스 선언문
// 객체의 타입을 정의하는 게 목적
// interface 인터페이스 이름 {
//     속성 이름[?]: 속성타입[,...]
// }

interface IPerson {
    name: string;
    age: number;
};

// name과 age라는 이름의 속성이 둘 다 있는 겍체만 유효하도록

let good: IPerson = {name: "Jack", age: 32};

// 선택 속성 구문
// 있어도 되고 없어도 되는 속성
interface IPerson2 {
    name: string;
    age: number;
    etc?: boolean;
};

let good1: IPerson2 = {name: "Jack", age: 32};
let good2: IPerson2 = {name: "Jane", age: 25, etc: false};

// 익명 인터페이스
// interface 키워드, 이름 사용x
// 주로 함수를 구현할 때 사용
let ai : {
    name: string
    age: number
    etc?: boolean
} = {name:  "Jack", age: 32}

function printMe(me: { name: string, age: number, etc?: boolean}) {
    console.log(
        me.etc ?
        `${me.name} ${me.age} ${me.etc}` :
        `${me.name} ${me.age}`
    )
}

printMe(ai);