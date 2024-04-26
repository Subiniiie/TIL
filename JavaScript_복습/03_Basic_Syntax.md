### 변수명 작성 규칙
1. 문자, 달러($), 밑줄(_)로 시작
2. 대소문자 구분
3. 예약어 사용 불가 for, if, function 등
4. Naming case
    1. 카멜 케이스(camelCase)
        - 변수, 객체, 함수에 사용
    2. 파스칼 케이스(PascalCase)
        - 클래스, 생성자에 사용
    3. 대문자 스네이크 케이스(SNAKE_CASE)
        - 상수(constants)에 사용
### let
- 블록 스코프(block scope)를 갖는 지역 변수 선언
- 재할당 가능
- 재선언 불가능
- ES6에 추가

### const 
- 블록 스코프를 갖는 지역 변수 선언
- 재할당 불가능
- 재선언 불가능
- ES6에 추가

- const 사용을 권장하나 재할당이 필요하다면 그때 let으로 변경해서 사용

### 블록 스코프(block scope)
- if, for, 함수 등의 중괄호{} 내부
- 블록 스코프를 가지는 변수는 블록 바깥에서 접근 불가능

### Template Literals (템플릿 리터럴)
- 내장된 표현식을 허용하는 문자열 작성 방식
- Backtick(``)을 이용하며, 여러 줄에 걸쳐 문자열을 정의할 수 있고 JavaScript의 변수를 문자열 안에 바로 연결할 수 있음
- 표현식은 $와 중괄호로 표시 `${}`
- ES6+부터 지원

`null` 변수의 값이 없음
`undefined` 선언된 변수에 값이 할당되지 않음

### 자동형변환
데이터 타입|false|true|
-|-|-|
undefined|항상 false|x|
null | 항상 false | x |
Number | 0, -0, NaN | 나머지 모든 경우 |
String | ''(빈 문자열) | 나머지 모든 경우 |

### 삼항 연산자
`condition ? expression1 : expression2`
- condition
  - 평가할 조건(true or false)
- expression1
  - 조건이 true일 경우 반환할 값 또는 표현식
- expression2
  - 조건이 false일 경우 반환할 값 또는 표현식

### for
- 특정한 조건이 거짓으로 판별될 때까지 반복
```javascript
for ([초기문]; [조건문]; [증감문]) {
<!-- do something -->
}
```

### for...in
- 객체의 열거 가능한 속성에 대해 반복
```javascript
for (variable in object) {
    statement
}
```

### for...of
- 반복 가능한 객체(배열, 문자열 등)에 대해 반복
```javascript
for (variable of iterable) {
    sattement
}