import React from 'react'

interface ChildProps {
    todo: { changedTodo: string};
}

const Child = ({ todo }: ChildProps) => {
    console.log('i am child.');
  return (
    <div>Child:{todo.changedTodo}</div>
  )
}

// 컴포넌트를 통째로 기억
export default React.memo(Child);
