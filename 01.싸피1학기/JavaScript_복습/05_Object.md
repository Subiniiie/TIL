### 객체
- 키로 구분된 데이터 집합을 저장하는 자료형
- 
- 구조
  - 중괄호{}를 이용해 작성
  - 중괄호 안에는 `key: value` 쌍으로 구성된 속성을 여러 개 작성 가능
  - key는 문자형만 허용
  - value는 모든 자료형 허용
  ```javascript
  const user = {
    name: 'Alice',
    'key with space': true,
    greeting: function() {
        return 'Hello'
    }
  }
  ```

- 속성 참조
  - 점(.) 또는 대괄호[]로 객체 요소 접근
  - key 이름에 띄어쓰기 같은 구분자가 있으면 대괄호 접근만 가능
  ```javascript
  // 조회
  console.log(user.name)
  console.log(user['Key with space'])

  // 추가
  user.address = 'korea'
  console.log(user[address])

  // 수정
  user.name = 'Bella'
  console.log(user.name)

  // 삭제
  delete user.name
  console.log(user)
  ```

- in 연산자
  - 속성이 객체에 존재하는지 여부 확인
  ```javascript
  console.log('grreting' in user)
  console.log('country' in user)
  ```
  - 속성이랑 값은 다름


### Method 
- 객체 속성에 정의된 함수
- object.moethod() 방식으로 호출
- 매서드는 객체를 '행동' 할 수 있게 함
- `console.log(user.gretting())`
- this
  - this 키워드를 사용해 객체에 대한 특정한 작업을 수행 할 수 있음
  - 함수나 메서드는 호출한 객체를 가리키는 키워드
  ```javascript
  const person = {
    name: 'Alice',
    greeting: function () {
        return `Hello my name is ${this.name}`
    },
  }

  console.log(person.greeting())
  ```

- 추가 객체 문법
1. 단축 속성
   - 키 이름과 값으로 쓰이는 변수의 이름이 같은 경우, 단축 구문을 사용할 수 있음
```javascript
const name = 'Alice'
const age = 30
const user = {
    name: name,
    age: age,
}

// 단축 속성을 사용하면
const name = 'Alice'
const age = 30
const user = {
    name,
    age,
}
```
2. 단축 메서드
    - 메서드 선언 시 function 키워드 생략 가능
```javascript
const Obj1 = {
    myFunc: function () {
        return 'Hello'
    }
}

// 단축 메서드를 사용하면
const Obj2 = {
    myFunc() {
        return 'Hello'
    }
}
```

3. 계산된 속성
    - 키가 대괄호[]로 둘러싸여 있는 속성
    - 고정된 값이 아닌 변수 값을 사용할 수 있음
```javascript
const product = prompt('물건 이름을 대주세요')
const prefix = 'my'
const suffix = 'property'
const bag = {
    [product]: 5,
    [prefix + suffix]: 'value',
}

console.lg(bag)
```

4. 구조 분해 할당
    - 배열 또는 객체를 분해하여 객체 속성을 변수에 쉽게 할당할 수 있는 문법
```javascript
const userInfo = {
    firstName: 'Alice',
    userId: 'alice123',
    email: 'alice123@gmail.com'
}

const userName = userInfo.firstName
const userId = userInfo.userId
const email = userInfo.email

// 구조 분해 할당 사용 후
const userInfo = {
    firstName: 'Alice',
    userId: 'alice123',
    email: 'alice123@gmail.com'
}

const {firstName, userId, email} = userInfo
```
- 구조 분해 할당 적용
```javascript
const person = {
    name: 'Bob',
    age: 35,
    city: 'London',
}

function prtinInfo({name, age, city}) {
    console.log(`이름: ${name}, 나이: ${age}, 도시: ${city}`)
}

prtiInfo(person)
```

5. Object with '전개 구문'
    - 객체 복사
      - 객체 내부에서 객체 전개
    - 얕은 복사에 활용 가능
```javascript
const obj = {b: 2, c: 3, d: 4}
const newObj = {a: 1, ...obj, e: 5}
```

6. 유용한 객체 메서드
   - Object.keys()
   - Object.values()
```javascript
const proflile = {
    name: 'Alice',
    age: 30,
}

console.log(Object.keys(profile))
console.log(Object.values(profile))
```

7. Optional chaining
    - 속성이 없는 중첩 객체를 에러 없이 접근할 수 있는 방법
    - 만약 참조 대상이 null 또는 undefined라면 에러가 발생하는 것 대신 평가를 멈추고 undefined를 반환
```javascript
const user = {
    name: 'Alice',
    greeting: function () {
        return 'hello'
    }
}

console.log(user.address?.street)
console.log(user.address && user.address.street)
```