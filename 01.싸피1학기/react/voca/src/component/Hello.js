import { useState } from "react";

import World from "./World";
import styles from "./Hello.module.css"

const Hello = function(props) {
    const [name, setName] = useState("Mike")
    const [age, setAge] = useState(props.age)

    function changeName() {
        const newName = name === "Mike" ? "Jane" : "Mike"
        setName(newName)
        setAge(age + 1)
    }
    return (
        <>
            <h1>State</h1>
            <h2>{name} ({age}세)</h2>
            <button onClick={changeName}>Change</button>
        </>
    )
}

export default Hello;