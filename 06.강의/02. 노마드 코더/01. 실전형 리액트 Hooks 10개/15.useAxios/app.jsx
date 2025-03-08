import { useState, useEffect, useRef } from "react";
import "./styles.css";
import useAxios from "./useAxios/useAxios";

export default function App() {
  const { loading, data, error, refetch } = useAxios({
    url: "https://yts.mx/api/v2/list_movies.json",
  });

  console.log(
    `Loading: ${loading}, Error: ${error}, Data: ${JSON.stringify(data)}`
  );

  return (
    <div className="App">
      <h1>{data && data.status}</h1>
      <h2>{loading && "Loading"}</h2>
      <button onClick={refetch}>refetch</button>
    </div>
  );
}
