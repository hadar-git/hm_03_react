import TodoItem from '../toDoItem/ToDoItem'

function TodoList() {
  const todos = ["sleep", "eat", "drink"];

  return (
    <div>
      <ul>
        {todos.map((todo) => (
          <TodoItem key={todo} todo={todo} />
        ))}
      </ul>
    </div>
  )
}

export default TodoList
