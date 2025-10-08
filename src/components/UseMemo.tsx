import React from "react";
import { useState } from "react";

// 問題：點 Count 時，其實只改變 count，但整個 TodoList 重新 render。
// 👉 點 Count 時，TodoItem 不會重 render。
const TodoItem = React.memo(function TodoItem({ text }: { text: string }) {
  // console.log("Render:", text);
  return <li>{text}</li>;
});

function TodoList({ todos }: { todos: string[] }) {
  return (
    <ul>
      {todos.map((t, i) => (
        <TodoItem key={i} text={t} />
      ))}
    </ul>
  );
}

export default function App() {
  const [todos, setTodos] = useState(["Learn React", "Study Hooks"]);
  const [count, setCount] = useState(0);

  return (
    <>
      <h2>UseMemo</h2>
      <div style={{ display: "flex", gap: "10px", padding: "5px 0px" }}>
        <button
          onClick={() => setCount((c) => c + 1)}
          style={{
            padding: "2px 10px",
            border: "1px solid #ccc",
            borderRadius: "4px",
          }}
        >
          Count: {count}
        </button>
        <button
          onClick={() => setTodos([...todos, "New Todo"])}
          style={{
            padding: "2px 10px",
            border: "1px solid #ccc",
            borderRadius: "4px",
          }}
        >
          Add Todo
        </button>
      </div>
      <TodoList todos={todos} />
    </>
  );
}
