import { useState } from 'react'


export default function TodoForm({ onAdd }) {
const [newTodo, setNewTodo] = useState("");

const handleSubmit = (e) => {
  e.preventDefault();
  onAdd(newTodo);
  setNewTodo("");
};

  return (
    <form onSubmit={handleSubmit}>
  <input
    value={newTodo}
    onChange={(e) => setNewTodo(e.target.value)}
  />
  <button type="submit">אישור</button>
</form>
  )
}
