// 함수 표현식

// 함수 호출 연산자 : 어떤 변수가 함수 표현식을 담고 있다면 변수 이름 뒤에 함수 호출 연산자()를 붙여 함수를 실행할 수 있음
let functionExpression = function(a, b) {return a + b};
let value = functionExpression(1, 2);

// 함수는 const로 선언