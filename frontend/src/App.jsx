import Todos from "../components/Todos";
import "./App.css";
import CreateTodo from "../components/CreateTodo";
import { useEffect, useState } from "react";
function App() {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/todos").then(async function (res) {
      const json = await res.json();
      setTodos(json.todos);
    });
  }, [todos]);
  return (
    <>
      <h2>Tasks</h2>
      <CreateTodo />
      <Todos todos={todos} />
    </>
  );
}

export default App;
