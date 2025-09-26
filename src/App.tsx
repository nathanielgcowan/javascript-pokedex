import { useState } from "react";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import "./App.css";

function App() {
  return (
    <>
      Todo App <AddTodo /> <TodoList />
    </>
  );
}

export default App;
