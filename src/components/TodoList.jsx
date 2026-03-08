import TodoItem from "./TodoItem.jsx";

export default function TodoList({ todos, removeTodo, toggleComplete, toggleEdit, updateTodoText }) {
  return (
    <div className="space-y-2">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          removeTodo={removeTodo}
          toggleComplete={toggleComplete}
          toggleEdit={toggleEdit}
          updateTodoText={updateTodoText}
        />
      ))}
    </div>
  );
}