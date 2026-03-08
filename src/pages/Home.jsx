import { useState, useEffect } from "react";
import TodoForm from "../components/TodoForm.jsx";
import TodoList from "../components/TodoList.jsx";

export default function Home() {
  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem("todos");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text) => {
    const newTodo = { id: Date.now(), text, completed: false, isEditing: false };
    setTodos([...todos, newTodo]);
  };

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const toggleEdit = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  };

  const updateTodoText = (id, newText) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, text: newText, isEditing: false } : todo
      )
    );
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-5 bg-gray-50 rounded-xl shadow-md">
  <h1 className="text-4xl font-bold text-center mb-6 text-black-600">Yapılacaklar Listesi</h1>
  <TodoForm addTodo={addTodo} />
  <TodoList
    todos={todos}
    removeTodo={removeTodo}
    toggleComplete={toggleComplete}
    toggleEdit={toggleEdit}
    updateTodoText={updateTodoText}
  />
</div>
  );
}