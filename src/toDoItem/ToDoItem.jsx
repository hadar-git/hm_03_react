function getColor(done) {
  return done ?  'green':'red'
}

function TodoItem({ todo }) {
  const { title, done } = todo;

  return <li style={{ border: `5px solid ${getColor(done)}` }}>{title}</li>
}

export default TodoItem
