import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, onDelete, onToggle }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          <TodoItem todo={todo} onDelete={onDelete} onToggle={onToggle} />
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
