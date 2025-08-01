// 객체의 비구조화 할당문

// 구조화 : 인터페이스나 클래스를 사용해 관련 정보를 묶음
export interface IPerson {
    name: string;
    age: number;
}

export interface ICompany {
    name: string;
    age: number;
}

let jack: IPerson = {name: "Jack", age: 32},
    jane: IPerson = {name: "Jane", age: 32}

let apple: ICompany = {name: "Apple Computer, Inc", age: 43},
    ms: ICompany ={name: "Microsoft", age: 44}


// 비구조화 : 구조화된 데이터를 분해
let name2 = jack.name, age2 = jack.age;

// 비구조화 할당
let {name, age} = jack;
console.log(name, age, name2, age2) // Jack 32 Jack 32

// 잔여 연산자 or 전개 연산자 (...)
let address: any = {
    country: 'Korea',
    city: 'Seoul',
    address1: 'Gangnam-Gu',
    address2: 'Sinsa-dong 123-456',
    address3: '789 street, 2 Floor ABC Building'
}

const {country, city, ...detail} = address;
console.log(detail)
// 실행 결과
// {
//   address1: 'Gangnam-Gu',
//   address2: 'Sinsa-dong 123-456',
//   address3: '789 street, 2 Floor ABC Building'
// }

// 점 3개 연산자가 비구조화 할당문이 아닌 곳에서 사용될 때 : 전개 연산자(통합)
let coord = {...{x: 0}, ...{y: 0}}
console.log(coord)  // { x: 0, y: 0 }

let part1 = {name: 'jane'}, part2 = {age: 22}, part3 = {city: 'Seoul', country: 'Korea'}
let merged = {...part1, ...part2, ...part3}
console.log(merged) // { name: 'jane', age: 22, city: 'Seoul', country: 'Korea' }


