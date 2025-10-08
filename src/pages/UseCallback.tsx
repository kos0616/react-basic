import { useState, useCallback } from "react";

function TodoInput({ onAdd }: { onAdd: (text: string) => void }) {
  // console.log("Render TodoInput");
  const [value, setValue] = useState("");
  return (
    <div>
      <input value={value} onChange={(e) => setValue(e.target.value)} />
      <button onClick={() => onAdd(value)}>Add</button>
    </div>
  );
}

function TodoList({ todos }: { todos: string[] }) {
  return (
    <ul>
      {todos.map((t, i) => (
        <li key={i}>{t}</li>
      ))}
    </ul>
  );
}

export default function App() {
  const [todos, setTodos] = useState(["Learn React"]);
  const [count, setCount] = useState(0);

  const handleAdd = useCallback(
    (text: string) => setTodos((prev) => [...prev, text]),
    []
  );

  // const handleAdd = (text: string) => setTodos((prev) => [...prev, text]);

  return (
    <>
      <h2>UseCallback</h2>
      <div>
        <button onClick={() => setCount((c) => c + 1)}>Count: {count}</button>
        <TodoInput onAdd={handleAdd} />
      </div>
      <TodoList todos={todos} />
    </>
  );
}
