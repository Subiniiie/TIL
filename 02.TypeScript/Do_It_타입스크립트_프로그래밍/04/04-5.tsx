// 매개변수 기본값 지정하기
// (매개변수: 타입 = 매개변수 기본값)

type Person = {
    name: string,
    age: number
}
const makePerson = (name: string, age: number = 10): Person => {
    const person = {name: name, age: age}
    return person
};

console.log(makePerson('Jack'))
console.log(makePerson('Jane', 32))

// 매개변수의 이름과 똑같은 이름의 속성을 가진 객체를 만들 때 속성값 부분은 생략 가능
const makePerson2 = (name: string, age: number = 10): Person => {
    const person = { name, age}
    return person
};

console.log(makePerson2("Jack", 32))

// 객체를 반환하는 화살표 함수
const makePerson3 = (name: string, age: number = 10) => ({name, age})
console.log(makePerson3('Jane', 32))

// 매개변수에 비구조화 할당문 사용하기
const printPerson = ({name, age}: Person): void => 
    console.log(`name: ${name}, age: ${age}`)

console.log({name: "Jack", age: 32})

// 색인 키와 값으로객체 만들기
type KeyType = {
    [key: string]: string;
};

const makeObject = (key: string, value: string): KeyType => ({[key]: value})

console.log(makeObject('name', 'Jack'))     // {name: 'Jack}
