import { useState, useRef } from "react";
import "./styles.css";

export default function App() {
  //   reference는 기본적으로 우리 component의 어떤 부분을 선택할 수 있는 방법
  // document.getElementByID()를 사용하는 것과 동등
  const potato = useRef();
  setTimeout(() => potato.current.focus(), 5000);

  return (
    <div className="App">
      <h1>Hello</h1>
      <input ref={potato} placeholder="la" />
    </div>
  );
}
