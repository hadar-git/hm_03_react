import TodoItem from '../toDoItem/ToDoItem'
import { useState } from 'react'
import TodoForm from '../TodoForm/TodoForm'


function TodoList() {

const [todos, setToDo] = useState([
  { id: 1, title: "sleep", done: false },
  { id: 2, title: "eat", done: true },
  { id: 3, title: "drink", done: false },
])

const addTodo  = (title ) => {
if(!title){
  return 
}
 const  newT={
    id: Date.now(), 
  title: title, 
  done: false, 

  }
 
  setToDo([...todos, newT]);

};

const markDone = (id) => {
  setToDo(todos.map((todo) =>
    todo.id === id ? { ...todo, done: true } : todo
  ));
};

  return (
    <div>
      <ul>
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} onDone={markDone} />
        ))}
      </ul>

<TodoForm onAdd={addTodo} />

    </div>
  )
}

export default TodoList
