import TodoItem from '../toDoItem/ToDoItem'
import { useState } from 'react'


function TodoList() {

const [todos, setToDo] = useState([
  { id: 1, title: "sleep", done: false },
  { id: 2, title: "eat", done: true },
  { id: 3, title: "drink", done: false },
])
const [newTodo, setNewTodo] = useState("");

const handleSubmit = (e) => {
  e.preventDefault();
  setToDo([...todos, newTodo]);
  setNewTodo("");
};

  return (
    <div>
      <ul>
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
  <input
    value={newTodo}
    onChange={(e) => setNewTodo(e.target.value)}
  />
  <button type="submit">אישור</button>
</form>
    </div>
  )
}

export default TodoList
