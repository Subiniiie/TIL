import { useState, useEffect } from "react";
import "./styles.css";

const useScroll = () => {
  const [state, setState] = useState({
    x: 0,
    y: 0,
  });
  const onScroll = (event) => {
    console.log("y: " + window.scrollY, "x: " + window.scrollX);
  };
  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    () => window.removeEventListener("scroll", onScroll);
  }, []);
  return state;
};

export default function App() {
  const { y } = useScroll();

  return (
    <div className="App" style={{ height: "1000vh" }}>
      <h1 style={{ position: "fixed", color: y > 100 ? "red" : "blue" }}>
        Hello
      </h1>
    </div>
  );
}
