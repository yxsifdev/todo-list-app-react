import React, { useState } from "react";
import Form from "./Form";
import { v4 as uuidv4 } from "uuid";
import Todo from "./Task";

const TodoList = () => {
  const [todoValue, setTodoValue] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  const createTodo = (todo) => {
    const newTodo = {
      id: uuidv4(),
      task: todo,
      isEditing: false,
    };
    const updatedTodos = [...todoValue, newTodo];
    setTodoValue(updatedTodos);
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
  };

  const updateTodo = (id, updatedTask) => {
    const updatedTodos = todoValue.map((todo) =>
      todo.id === id ? { ...todo, task: updatedTask } : todo
    );
    setTodoValue(updatedTodos);
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
  };

  const deleteTodo = (id) => {
    const updatedTodos = todoValue.filter((todo) => todo.id !== id);
    setTodoValue(updatedTodos);
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
  };

  return (
    <div className="bg-white/5 p-5 rounded-md w-[500px]">
      <Form createTodo={createTodo} />
      {todoValue.map((todo) => (
        <Todo
          key={todo.id}
          task={todo}
          deleteTodo={() => deleteTodo(todo.id)}
          updateTodo={(updatedTask) => updateTodo(todo.id, updatedTask)}
        />
      ))}
    </div>
  );
};

export default TodoList;
