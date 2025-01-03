import React, { useRef, useEffect } from 'react'
import './NewTodo.css';

type NEwTodoProps = {
    onAddTodo: (todoText: string) => void;
}

const NewTodo: React.FC<NEwTodoProps> = props => {
    const textInputRef = useRef<HTMLInputElement>(null);

    const todoSubmitHandler = (event: React.FormEvent) => {
        event.preventDefault();
        const enteredText = textInputRef.current!.value;
        props.onAddTodo(enteredText);
    };

    return (
        <form onSubmit={todoSubmitHandler}>
            <div>
                <label htmlFor='todo-text'>Todo Text</label>
                <input type='text' id='todo-text' ref={textInputRef}></input>
            </div>
            <button type='submit'>ADD TODO</button>
        </form>
    )

};

export default NewTodo;