// 클래스 메서드
// function 키워드로 만든 함수에는 this 키워드 사용 가능, 화살표 함수에서는 사용 불가

// 메서드 : function으로 만든 함수 표현식을 담고 있는 속성
class A {
    value: number = 1;
    method: () => void = function(): void {
        console.log(`value: ${this.value}`)
    }
}

let a: A = new A();
a.method()

// 위 코드는 구현하기도 번거롭고 가독성도 떨어져서 타입스크립트는 단축 구문 제공
class B {
    constructor(public value: number = 1) {}
    method(): void {
        console.log(`value: ${this.value}`)
    }
}

let b = new B();
b.method()


// 정적 메서드
// 이름 앞에 static을 붙여 만듦
// 호출할 땐 클래스이름.정적 메서드()
class C {
    static whoAreYou(): string {
        return `I'm class C`
    }
}

class D {
    static whoAreYou(): string {
        return `I'm class D`
    }
}

console.log(C.whoAreYou())
console.log(D.whoAreYou())

// 메서드 체인 : 객체의 메서드를 이어서 계속 호출하는 방식
class calculator {
    constructor(public value: number = 0) {}
    add(value: number) {
        this.value += value
        return this
    }
    multiply(value: number) {
        this.value *= value
        return this
    }
}

let cal = new calculator
let result = cal.add(1).add(2).multiply(3).multiply(4).value
console.log(result)