- JavaScript Object Notation
- Key-Value 형태로 이루어진 자료 표기법
- JavaScript의 Object와 유사한 구조를 가지고 있지만 JSON은 형식이 있는 문자열
- JavaScript에서 JSON을 사용하기 위해서는 Object 자료형으로 변경해야 함
- Object <-> JSON 변환하기
```javascript
const jsObj = {
    coffee: 'Americano',
    iceCream: 'Cookie and Cream',
}

// Object -> JSON
const objToJson = JSON.stringify(jsObj)

// JSON -> Object
const jsonToObj = JSON.parse(objToJson)
```
- new연산자
  - 사용자 정의 객체 타입을 생성
```javascript
function Member(name, age, sId) {
    this.name = name,
    this.age = age,
    this.sId = sId,
}

const member3 = new Member('Bella', 21, 20226543)
```