function getColor(done) {
  return done ?  'green':'red'
}

function TodoItem({ todo, onDone }) {
  const {id,  title, done } = todo;

  return (
    <li style={{ border: `5px solid ${getColor(done)}` }}>
      {title}
      {!done && <button onClick={() => onDone(id)}>המשימה בוצעה</button>}
    </li>
  )
}

export default TodoItem
