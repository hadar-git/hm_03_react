function TodoItem({ todo }) {
  const { title, done } = todo;

  return <li style={{ border: "5px solid red" }}>{title}</li>
}

export default TodoItem
