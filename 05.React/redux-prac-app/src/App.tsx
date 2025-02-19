import React, { useState } from 'react';
import { Todo } from './todo.model';
import TodoList from './components/TodoList';
import NewTodo from './components/NewTodo';
import { Route } from 'react-router-dom';
import './App.css'

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const todoAddHandler = (text: string) => {
    setTodos(prevTodos => [
      ...prevTodos,
      {id: Math.random().toString(), text: text}
    ]);
  };

  const todoDeleteHandler = (todoId: string) => {
    setTodos(prevTodos => {
      return prevTodos.filter(todo => todo.id !== todoId);
    });
  };

  return (
    <>
      <NewTodo onAddTodo = {todoAddHandler} />
      <TodoList items={todos} onDeleteTodo= {todoDeleteHandler} />
    </>
  )
}

export default App
