import { useEffect, useState } from "react";
import "./styles.css";

const useTitle = (initialTitle) => {
  const [title, setTitle] = useState(initialTitle);
  const updateTitle = () => {
    // head에 있는 <title>을 말하는 거임
    const htmlTitle = document.querySelector("title");
    htmlTitle.innerText = title;
  };
  useEffect(updateTitle, [title]);
  return setTitle;
};

export default function App() {
  // setTitle과 동일
  const titleUpdater = useTitle("Loading...");
  setTimeout(() => titleUpdater("Home"), 50000);
  return (
    <div className="App">
      <h1>Hello</h1>
    </div>
  );
}
