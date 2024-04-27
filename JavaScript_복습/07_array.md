### 배열
- 순서가 있는 데이터 집합을 저장하는 자료구조
- 대괄호[]를 이용해 작성
- 요소 자료형은 제약 없음
- length 속성을 사용해 배열에 담긴 요소가 몇 개인지 알 수 없음
- `const names = ['Alice', 'Bella', 'Cathy']`
- `console.log(names.length)`

- 배열 메서드
  |메서드|역할|
  |-|-|
  |push|배열 끝 요소를 추가|
  |pop|배열 끝 요소를 제거|
  |unshift|배열 앞 요소를 추가|
  |shift|배열 앞 요소를 제거|


### Array Helper Methods
- 배열 조작을 보다 쉽게 수행할 수 있는 특별한 메서드 모음
- ES6에 도입
- 배열의 각 요소를 순회하며 각 요소에 대해 함수(콜백함수)를 호출
  - forEach(), map(), filter(), every(), some(), reduce() 등
  - 메서드 호출 시 인자로 함수(콜백함수)를 받는 것이 특징
- 콜백 함수
  - 다른 함수에 인자로 전달되는 함수
  - 외부 함수 내에서 호출되어 일종의 루틴이나 특정 작업을 진행
```javascript
const number1 = [1, 2, 3]

number1.forEach(function(num) {
    console.log(num ** 2)
})

const number2 = [1, 2, 3]

const callBackFunction = function (num) {
    console.log(num ** 2)
}

number2.forEach(callBackFunction)
```
- 주요 Arrat Helper Methods  

|메서드|역할|
|-|-|
|forEach|배열 내의 모든 함수 각각에 대해 함수(콜백함수)를 호출|
||반환 값 없음|
|map|배열 내의 모든 요소 각각에 대해 함수(콜백함수)를 호출|
||함수 호출 결과를 모아 새로운 배열을 반환|

### forEach()
  - 배열의 각 요소를 반복하며 모든 요소에 대해 함수를 호출
  - 구조 `arr.forEach(callback(item[, index[, array]]))`
  - 콜백함수는 3가지 매새변수로 구성
    1. item: 처리할 배열의 요소
    2. index: 처리할 배열 요소의 인덱스(선택 인자)
    3. array: forEach를 호출한 배열(선택 인자)
  - 반환 값 : undefined
    ```javascript
    array.forEach(function (item, index, array) {
        // do something
    })
    ```
    - 예시
    ```javascript
    const names = ['Alice', 'Bella', 'Cathy']

    // 일반 함수 표기
    names.forEach(function (name) {
        console.log(name)
    })

    // 화살표 함수 표기
    names.forEach((name) => {
        console.log(name)
    })
    ```
    - 활용
    ```javascript
    const names = ['Alice', 'Bella', 'Cathy']

    names.forEach(function (name, index, array) {
        console.log(`${name} / ${index} / ${array}`)
    })
    ```

### map()
- 배열의 모든 요소에 대해 함수를 호출하고, 반환된 호출 결과 값을 모아 새로운 배열을 반환  
- 구조 : `arr.map(callback(item[, index[, array]]))`
  - forEach의 매개 변수와 동일
  - 반환 값
    - 배열의 각 요소에 대해 실행한 callback의 결과를 모은 새로운 배열
    - const 새로운 변수
    - forEach 동작 원리와 같지만 forEach와 달리 새로운 배열을 반환함
```javascript
const newArr = array.map(function (item, index, array) {
    // do something
})
```
- 예시
  - 배열을 순회하며 각 객체의 name 속성을 추출하기
  ```javascript
  const persons = [
    {name: 'Alice', age: 20},
    {name: 'Bella', age: 21}
  ]

  let result1 = []
  for (const person of persons) {
    result1.push(person.name)
  }

  const result2 = persons.map(function (person) {
    return person.name
  })
  ```

  - 활용
  ```javascript
  const names = ['Alice', 'Bella', 'Cathy']

  const result3 = names.map(function (name) {
    return name.length
  })

  const result4 = names.map((name) => {
    return name.legth
  })


  const numbers = [1, 2, 3]
  
  const doubleNumber = numbers.map((number) => {
    return number * 2
  })
  ```

- 기타 Array Helper Methods  

|메서드|역할|
|-|-|
|filter|콜백 함수의 반환 값이 참인 요소들만 모아서 새로운 배열을 반환|
|find|콜백 함수의 반환 값이 참이면 해당 요소를 반환|
|some|배열의 요소 중 적어도 하나라도 콜백 함수를 통과하지 못하면 true를 반환하며 즉시 배열 사용 중지 반면에 모두 통과하지 못하면 false를 반환|
|every|배열의 모든 요소가 콜백 함수를 통과하면 true를 반환 반면에 하나라도 통과하지 못하면 즉시 false를 반환하고 배열 순회 중지|  