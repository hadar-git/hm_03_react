import TodoItem from '../toDoItem/ToDoItem'
import { useState } from 'react'


function TodoList() {

const [todos, setToDo] = useState(["sleep", "eat", "drink"])
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
          <TodoItem key={todo} todo={todo} />
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
