// 배열 이해하기
// 선언
// let 배열이름 = new Array(배열 길이)

let array = new Array
array.push(1); array.push(2); array.push(3);
console.log(array)

// [] 단축 구문
let numbers = [1, 2, 3]
let strings = ['Hello', 'World']

// 자바스크립트에서 배열은 객체
// Array.isArray는 배개변수가 배열인지 객체인지 알려줌
console.log(Array.isArray(strings))     // true


// 배열의 타입
// 아이템 타입[]
let numberArray: number[] = [1, 2, 3]
let strArray: string[] = ["Hello", "World"]

type IPerson = {name: string, age?: number}
let personArray: IPerson[] = [{name: "Jack"}, {name: "Jane", age: 32}]

// 문자열과 배열 간 변환
// 타입스크립트는 문자 타입이 없고 문자열의 내용 또한 변경할 수 없음 => 문자열을 배열로 먼저 전환
// .split메서드를 통해 문자열을 쪼개는 기준을 입력받아 배열로 변환

const split = (str: string, delim: string= ''): string[] => str.split(delim);
console.log(split("hello"), split('h_e_l_l_o', '_'))    // ['h', 'e', 'l', 'l', 'o'] ['h', 'e', 'l', 'l', 'o']

// 다시 합치기 위해서 join 메서드 사용
const join = (strArray: string[], delim: string=''): string => strArray.join(delim)
console.log(join(['h', 'e', 'l', 'l', 'o']), join(['h', 'e', 'l', 'l', 'o'], '_'))  // hello h_e_l_l_o


// 인덱스 연산자 : 배열이 담고 있는 아이템 중 특정 위치에 있는 아이템을 얻고자 할 때
const numbers2: number[] = [1, 2, 3, 4, 5]
for (let index = 0; index < numbers2.length; index++) {
    const item: number = numbers2[index]
    console.log(item)
}


// 배열의 비구조화 할당
// [] 사용
let array2: number[] = [1, 2, 3, 4, 5]
let [ first, second, third, ...rest ] = array2
console.log(first, second, third, rest)     // 1 2 3 [4, 5]

// for ...in 문
let names = ["Jack", "Jane", "Steve"]

for (let index in names) {
    const name = names[index]
    console.log(`[${index}] : ${name}`)
}

// for ...of 문
for (let name of ['Jack', "Jane", "Steve"]) {
    console.log(name)
}


// 제네릭 방식 타입
function arrayLength<T> (array: T[]) {
    return array.length
}

function isEmpty<T> (array: T[]) {
    return arrayLength<T>(array) == 0;
}

let numArray2: number[] = [1, 2, 3]
let strArray2: string[] = ['Hello', 'World']

type IPerson2 = {
    name: string,
    age?: number
}
let personArray2: IPerson2[] = [{name: "Jack"}, {name: 'Jane', age: 32}]

console.log(
    arrayLength(numArray2),     // 3
    arrayLength(strArray2),     // 2
    arrayLength(personArray2),      // 2
    isEmpty([]),        // true
    isEmpty([0])        // false
)

// 전개 연산자
let array3: number[] = [1]
let array4: number[] = [2, 3]
let mergedArray: number[] = [...array3, ...array4, 4]
console.log(mergedArray)        // [1, 2, 3, 4]

// range 함수 구현
const range = (from: number, to: number): number[] => 
    from < to ? [from, ...range(from + 1, to)]: []

let number2: number[] = range(1, 9 + 1)     // [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(number2)