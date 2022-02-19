import axios from "axios";
import { useState } from "react";
import { Todo } from "./Todo";
import "./styles.css";

export default function App() {
  const [todos, setTodos] = useState<any>([]);
  const onClickFetchData = () => {
    axios("https://jsonplaceholder.typicode.com/todos").then((res) => {
      console.log(res.data);
      setTodos(res.data);
    });
  };
  return (
    <div className="App">
      <button onClick={onClickFetchData}>データ取得</button>
      {todos.map((todo) => (
        <Todo title={todo.title} userId={todo.userId} />
      ))}
    </div>
  );
}
