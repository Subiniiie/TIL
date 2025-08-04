// 선언형 프로그래밍과 배열
// 선언형 프로그래밍은 명령형 프로그래밍처럼 for문을 사용하지 않고 모든 데이터를 배열에 담음
// 그리고 문제가 해결될 때까지 끊임없이 또 다른 형태의 배열로 가공하는 방식으로 구현

// 1부터 100까지 더하기 문제 풀이
// 명령형
let sum = 0
for (let val = 1; val <= 100;) {
    sum += val++
}

console.log(sum)

// 선언형
const range = (from: number, to: number): number[] =>
    from < to ? [from, ...range(from + 1, to)] : []
let numbers: number[] = range(1, 100 + 1)
console.log(numbers)    //[1, 2, 3, 4, 5, ... , 100]

// fold : 배열 데이터 접기
function fold<T>(array: T[], callback: (result: T, val: T) => T, initValue:T) {
        let result: T = initValue
        for (let i = 0; i < array.length; ++i) {
            const value = array[i]
            result = callback(result, value)
        } 
        return result
    }

let numbers2: number[] = range(1, 100 + 1)
let result = fold(numbers, (result, value) => result + value, 0)
console.log(result)


// 1에서 100까지 홀수의 합 구하기
let oddSum = 0
for (let val = 1; val <= 100; val += 2) {
    oddSum += val
}
console.log(oddSum)

// filter 조건에 맞는 아이템만 추려내기
function filter <T>(array: T[], callback: (value: T, index?: number) => boolean) {
    let result: T[] = []
    for (let index: number = 0; index < array.length; ++index) {
        const value = array[index]
        if (callback(value, index)) {
            result = [...result, value]
        }
    }
    return result
}

let numbers3: number[] = range(1, 100 + 1)
const isOdd = (n: number): boolean => n % 2 != 0
let result2 = fold(
    filter(numbers2, isOdd),
    (result, value) => result + value, 0
)

console.log(result2)