import { useState } from 'react'

function TodoList() {
  const todos = ["sleep", "eat", "drink"];


  return (
    <>
   <div>
       <ul>
      {todos.map((todo) => (
        <li key={todo}>{todo}</li>
      ))}
    </ul>
   </div>
    </>
  )
}

export default TodoList