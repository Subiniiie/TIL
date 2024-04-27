- 참조 자료형에 속하며 모든 함수는 Function object
- 함수 구조
  - function 키워드
  - 함수 이름
  - 함수의 매개변수
  - 함수의 body를 구성하는 statements
- return 값이 없다면 undefinded를 반환
- 함수 정의 방법
  - 선언식
    ```javascript
    function funcName() {
        statements
    }
    ```
  - 표현식(사용 권장)
    ```javascript
    const funcName = function() {
        statement
    }
- 매개변수 정의 방법
  - 기본 함수 매개변수
    - 전달하는 인자가 업서간 undefined로 전달될 경우 이름 붙은 매개변수를 기본값으로 초기화
    ```javascript
    const greeting = function (name = 'Annoymous') {
        return `Hi ${name}`
    }
    greeting()
    ```
  - 나머지 매개변수
    - 임의의 수의 인자를 배열로 허용하여 가변 인자를 나타내는 방법
    - 작성 규칙
      - 함수 정의 시 나머지 매개변수는 하나만 작성할 수 있음
      - 나머지 매개변수는 함수 정의에서 매개변수 마지막에 위치해야 함
    ```javascript
    const myFunc = function(param1, param2, ...restParams) {
        return [param1, param2, restParams]
    }
    myFunc(1, 2, 3, 4, 5)
    ```

  - 화살표 함수
    - 함수 표현식의 간결한 표현법
  ```javascript
  const arrow = function(name) {
    return `Hello ${name}`
  }
  
  const arrow = name => `Hello ${name}`
  ```

  -화살표 함수 작성 과정
   ```javascript 
   const arrow = function(name) {
    return `Hello ${name}`
   }

   // 1. function 키워드 삭제 후 화살표 작성
   const arrow = (name) => {
    return `Hello ${name}`
   }

   // 2. 함수의 매개변수가 하나 뿐이라면, 매개변수의 () 제거 가능
   // 단, 제거하지 않는 것을 권장
   // 보통 1번까지만 함
   const arrow = name => {
    return `Hello ${name}`
   }

   // 3. 함수 본문의 표현식이 한 줄이라면 {}와 return 생략 가능
   const arrow = name =>
    `Hello ${name}`
   ```