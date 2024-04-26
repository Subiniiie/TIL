# 1. 속성 조작
## 1.  클래스 속성 조작
### classList
- `element.classList.add()` 지정한 클래스 값을 추가
- `element.classList.remove()` 지정한 클래스 값을 제거
- `element.classList.toggle()` 클래스가 존재한다면 제거하고 false를 반환하고 클래스가 없으면 추가하고 true를 반환
### 일반 속성 조작
- `Element.getAttribute()` 해당 요소에 지정된 값을 반환(조회)
- `Elment.setAttribute(name, value)`   
  - 지정된 요소의 속성 값을 설정
  - 속성이 이미 있으면 기존 값을 갱신 (그렇지 않으면 지정된 이름과 값으로 새 속성 추가)
- `Element.removeAttribute()`
  - 요소에서 지정된 이름을 가진 속성 제거
# 2. HTML 콘텐츠 조작
- `textContent`
# 3. DOM 요소 조작
# 4. 스타일 조작