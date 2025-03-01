import { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  const sayHello = () => {
    console.log("hello");
  };

  const [number, setNumber] = useState(0);
  const [aNumber, setANumber] = useState(0);

  useEffect(sayHello, [number]);

  return (
    <div className="App">
      <h1>Hello</h1>
      <button onClick={() => setNumber(number + 1)}>{number}</button>
      <button onClick={() => setANumber(aNumber + 1)}>{aNumber}</button>
    </div>
  );
}
