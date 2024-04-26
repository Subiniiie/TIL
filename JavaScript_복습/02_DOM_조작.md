# 1. 속성 조작
## 1.  클래스 속성 조작
- `element.classList.add()` 지정한 클래스 값을 추가
- `element.classList.remove()` 지정한 클래스 값을 제거
- `element.classList.toggle()` 클래스가 존재한다면 제거하고 false를 반환하고 클래스가 없으면 추가하고 true를 반환
## 2. 일반 속성 조작
- `Element.getAttribute()` 해당 요소에 지정된 값을 반환(조회)
- `Elment.setAttribute(name, value)`   
  - 지정된 요소의 속성 값을 설정
  - 속성이 이미 있으면 기존 값을 갱신 (그렇지 않으면 지정된 이름과 값으로 새 속성 추가)
- `Element.removeAttribute()`
  - 요소에서 지정된 이름을 가진 속성 제거
  
# 2. HTML 콘텐츠 조작
- `textContent`
  
# 3. DOM 요소 조작
- `document/createElement(tagName)` 작성한 tagName의 HTML 요소를 생성하여 반환  
- `Node.appendChild()` 
  - 한 Node를 특정 부모 Node의 자식 NodeList 중 마지막 자식으로 삽입
  - 추가된 Node 객체를 반환
- `Node.removeChild()` 
  - DOM에서 자식 Node를 제거
  - 제거된 Node를 반환
  - 
# 4. 스타일 조작
- 해당 요소의 모든 style 속성 목록을 포함하는 속성
```javascript
const pTag = codument.querySelector('p')

pTag.style.color = 'crimson'
pTag.style.fontsize = '2rem'
pTag.style.border = '1px solid black'
```
```javascript
pTag.style.cssText = `color: crimson; font-size: 2rem; border: 1px solid black`
```


## 참고
### 1. Node
- DOM은 기본 구성 단위
- DOM 트리의 각 부분은 Node라는 객체로 표현됨
  - Document Node => HTML 문서 전체를 나타내는 노드
  - Element Node => HTML 요소를 나타내는 노드 (예를 들어 p)
  - Text Node => HTML 텍스트 (Element Node 내의 텍스트 컨텐츠를 나타냄)
  - Attribute Node => HTML 요소의 속성을 나타내는 노드

### 2. NodeList
- DOM 메서드를 사용해 선택한 Node의 목록
- 배열과 유사한 구조를 가짐
- Index만으로 각 항목에 접근 가능
- Javascript의 배열 메서드 사용 가능
- querySelectAll()에 의해 반환되는 NodeList는 DOM의 변경사항을 실시간으로 반영하지 않음
  - DOM이 나중에 변경되더라도 이전에 이미 선택한 NodeList 값은 변하지 않음

### 3. Element
- Node의 하위 유형
- Element는 DOM 트리에서 HTML 요소를 나타내는 특별한 유형의 Node
- 예를 들어 `<p>` `<div>` `<span>` `<body>` 등의 HTML 태그들이 Element 노드를 생성
- Node의 속성과 메서드를 모두 가지고 있으며 추가적으로 요소 특화된 기능 (예. className, innerHTML, id 등)을 가지고 있음
- 모든 Element는 Node지만 모든 Node가 Element인 것은 아님