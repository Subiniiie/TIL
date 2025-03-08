import { useState, useEffect, useRef } from "react";
import "./styles.css";

const useNotification = (title, options) => {
  if (!("Notification" in window)) {
    return;
  }

  const fireNotification = () => {
    if (Notification.permission !== "granted") {
      Notification.requestPermission().then((permission) => {
        if (permission === "granted") {
          new Notification(title, options);
        } else {
          return;
        }
      });
    } else {
      new Notification(title, options);
    }
  };

  return fireNotification;
};

export default function App() {
  const triggerNofig = useNotification("Can I steal your kimchi?", {
    body: "I love kimchi, don't you?",
  });

  return (
    <div className="App">
      <h1>Hello</h1>
      <button onClick={triggerNofig}>Click!!</button>
    </div>
  );
}
