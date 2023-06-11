import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { AddTodoActions, RemoveTodoActions, EditTodoActions } from "./actions/TodoActions";
import "./App.css";


function App() {
  const [todo, setTodo] = useState("");
  const [editingTodo, setEditingTodo] = useState(null);

  const dispatch = useDispatch();
  const Todo = useSelector((state) => state.Todo);
  const { todos } = Todo;

   const handleEdit = (t) => {
    setEditingTodo(t);
    setTodo(t.todo);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingTodo) {
      dispatch(EditTodoActions({ ...editingTodo, todo }));
      setEditingTodo(null);
    } else {
      dispatch(AddTodoActions(todo));
    }
    setTodo("");
  };

  const handleDelete = (t) => {
    dispatch(RemoveTodoActions(t));
  };

  return (
    <div className="App" >
      <header className="App-header">
        <h1>Todo List in Redux</h1>

        <form className="search" onSubmit={handleSubmit}>
          <input
            placeholder="Enter a List"
            className="box"
            onChange={(e) => setTodo(e.target.value)}
            value={todo}
          />

          <button type="submit" className="addBtn">
            {editingTodo ? "Save" : "Add"}
          </button>
        </form>
        <ul className="allTodos">
          {todos &&
            todos.map((t) => (
              <li key={t.id} className="singleTodo">
                <span className="todoText">{t.todo}</span>
                <button className="editBtn" onClick={() => handleEdit(t)}>
                  Edit
                </button>
                <button className="delBtn" onClick={() => handleDelete(t)}>
                  Delete
                </button>
              </li>
            ))}
        </ul>
      </header>
    </div>
  );
}
export default App;