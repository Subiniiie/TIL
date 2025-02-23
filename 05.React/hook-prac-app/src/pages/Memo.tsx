import React, { useState, useMemo } from 'react'

const expansiveCalculate = (numbers: number[]) => {
    console.log("Calculating sum...");
    // 시간이 엄청 오래 걸리는 식
    for (let i = 0; i < 10000000000; i++) {}
    return numbers.reduce((acc: number, curr: number) => acc + curr, 0);
};

export default function Memo() {
    const [ numbers, setNumbers ] = useState([1, 2, 3, 4, 5]);
    const [ addNumber, setAddNumber ] = useState("");
    // 실행이 오래 걸리는 식을 useMemo로 실행
    // return하는 값을 저장할거임임
    // numbers가 바뀌면 다시 계산
    // addNumber가 바뀌면 기존에 저장되어 있던 값임
    const sum = useMemo(() => expansiveCalculate(numbers), [numbers]);
    
    const handleAddNumber = () => {
        setNumbers([...numbers, parseInt(addNumber)]);
        setAddNumber("");
    };

  return (
    <div>
        <input
            type='text'
            value={addNumber}
            onChange={(e) => setAddNumber(e.target.value)}
        />
        <button onClick={handleAddNumber}>Add Number</button>
        <h2>Numbers: {numbers.join(", ")}</h2>
        <h2>Sum: {sum}</h2>
    </div>
  )
}
