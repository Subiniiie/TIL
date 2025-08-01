// 객체와 클래스
// 클래스 선언문
// class 클래스이름 {
//     [private | protected | public] 속성이름[?] : 속성 타입[...]
// }

class Person1 {
    name: string;
    age?: number;
}

let jack1: Person1 = new Person1();
jack1.name = 'Jack', jack1.age = 32;
console.log(jack1)  // Person1 { name: 'Jack', age: 32}

// 접근 제한자(public, private, protect)
// 생성자(constructor)

class Person2 {
    constructor(public name: string, public age?: number) {}
}

let jack2: Person2 = new Person2('jack', 32)
console.log(jack2)  // Person2 { name: 'jack', age: 32 }

// 인터페이스 구현
// class 클래스 이름 implements 인터페이스 이름 {
//     ...
// }

interface IPerson4 {
    name: string;
    age?: number;
};

class Person4 implements IPerson4 {
    constructor(public name: string, public age?: number) {}
}

let jack4: IPerson4 = new Person4('Jack', 32)
console.log(jack4)  // Person4 { name: 'Jack', age: 32 }


// 추상 클래스
// abstract를 class 앞에 붙여서
// 나를 상속하는 다른 클래스에서 이 속성이나 메서드 구현
// abstract class 클래스 이름 {
//     abstract 속성 이름: 속성 타입
//     abstract 메서드 이름() {}
// }
// new 연산자를 이용해 객체를 만들 수 없음

abstract class AbstractPerson5 {
    abstract name: string
    constructor(public age?: number) {}
}


// 클래스의 상속
// class 상속 클래스 extends 부모 클래스 {...}
// 부모 클래스의 생성자를 super로 호출
class Person5 extends AbstractPerson5 {
    constructor(public name: string, age?: number) {
        super(age)
    }
}

let jack5 : Person5 = new Person5("Jack", 32)
console.log(jack5)  // Person5 { age: 32, name: 'Jack' }

// static(정적) 속성
// class 클래스 이름 {
//     static 정적 속성 이름 : 속성 타입
// }

class A {
    static initValue = 1;
}

let initVal = A.initValue
console.log(initVal)    // 1