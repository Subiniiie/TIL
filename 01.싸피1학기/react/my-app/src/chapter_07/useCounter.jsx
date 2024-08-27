import React, { useState} from "react";

function useCounter(initialValue) {
    const [count, setCount] = useState(initialValue)

    const increateCount = () => setCount((count) => count + 1)
    const decreateCount = () => setCount((count) => Math.max(count - 1, 0))

    return [count, increateCount, decreateCount]
}

export default useCounter;