import { useState, useEffect, useRef } from "react";
import "./styles.css";

const useFullScreen = (callback) => {
  const element = useRef();

  const triggerFullScreen = () => {
    if (element.current) {
      element.current.requestFullScreen();
      if (callback && typeof callback === "function") {
        callback(true);
      }
    }
  };

  const exitFullScreen = () => {
    document.exitFullscreen();
    if (callback && typeof callback === "function") {
      callback(false);
    }
  };
  return { element, triggerFullScreen, exitFullScreen };
};

export default function App() {
  const callback = (isFull) => {
    console.log(isFull ? "We are full" : "We are small");
  };
  const { element, triggerFullScreen, exitFullScreen } =
    useFullScreen(callback);

  return (
    <div className="App" style={{ height: "1000vh" }}>
      <div ref={element}>
        <img src="https://i.ibb.co/R6RwNxx/grape.jpg" />
        <button onClick={exitFullScreen}>Make fullscreen</button>
      </div>
      <button onClick={triggerFullScreen}>Make fullscreen</button>
    </div>
  );
}
