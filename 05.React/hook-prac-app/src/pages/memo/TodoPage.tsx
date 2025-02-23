import React, { useMemo, useState } from 'react'
import Child from './Child';

export default function TodoPage() {

    const [todo, setTodo ] = useState<number>(0);
    const [ something, setSomething ] = useState<number>(0);
    const customTodo = useMemo(() => {
        return { changedTodo: todo + "hate" };
    }, [todo]);

    console.log("i am Todopage")

    const changeTodo = () => {
        setTodo(Math.random() * 100);
    };

    const changeSomethingElse = () => {
        setSomething((prev) => prev + 1);
    };

  return (
    <div>
        <p>Todopage: {todo}</p>
        <p>something: {something}</p>
        <button onClick={changeTodo}>change Todo value</button>
        <button onClick={changeSomethingElse}>change something else</button>
        <Child todo={customTodo}/>
    </div>
  )
}
