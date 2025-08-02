// 일등 함수 살펴보기
// 콜백 함수 : 매개변수로 동작하는 함수
const init = (callback: () => void): void => {
    console.log('default initialzation finished')
    callback()
    console.log('all initiallization finished')
}

init(() => console.log('custom initialization fisnished'))


// 중첩 함수 : 함수 안에 또 다른 함수
const calc = (value: number, cb: (number) => void): void => {
    let add = (a, b) => a + b;
    function multiply(a, b) {return a*b}

    let result = multiply(add(1, 2), value)
    cb(result)
}

calc(30, (result: number) => console.log(`result is ${result}`))    // result is 90

// 고차 함수 : 또 다른 함수를 반환하는 함수
const add1 = (a: number, b: number): number => a + b;   // 보통함수
const add2 = (a: number): (number) => number => (b: number): number => a + b;   // 교차함수

type NumberToNumberFunc = (number) => number;
const add3 = (a: number): NumberToNumberFunc => {
    const add4: NumberToNumberFunc = (b: number): number => {
        return a + b;
    }
    return add4;
}

console.log(add3(1)(2)) // 3
