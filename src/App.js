import React, { useState } from "react";

import "./styles.css";

export default function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [Editid, setEditid] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Editid) {
      const edittodo = todos.find((i) => i.id === Editid);
      const updatedTodos = todos.map((t) =>
        t.id === Editid ? (t = { id: t.id, todo }) : { id: t.id, todo: t.todo }
      );
    }
    if (todo !== "") {
      setTodos([{ id: `${todo}-${Date.now()}`, todo }, ...todos]);
    }
    setTodo("");
  };
  const handleDelete = (id) => {
    const deleteTodo = todos.filter((to) => to.id !== id);
    setTodos([...deleteTodo]);
  };

  const handleEdit = (id) => {
    const editTodo = todos.find((i) => i.id === id);
    setTodo(editTodo.todo);
    setEditid(id);
  };
  return (
    <div className="App">
      <div className="container">
        <h3>To-do List App</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter text"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
          />
          <button>{Editid ? "Edit" : "Go"}</button>
        </form>
        <ul className="allTodos">
          {todos.map((t) => (
            <li className="singleTodo">
              <span className="todoText" key={t.id}>
                {t.todo}
              </span>
              <button className="edit" onClick={() => handleEdit(t.id)}>
                edit
              </button>
              <button className="delete" onClick={() => handleDelete(t.id)}>
                delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
