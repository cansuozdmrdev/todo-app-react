import { useState } from "react";
import { FaTrash, FaEdit, FaCheck } from "react-icons/fa";

export default function TodoItem({ todo, removeTodo, toggleComplete, toggleEdit, updateTodoText }) {
  const [editText, setEditText] = useState(todo.text);

  
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      updateTodoText(todo.id, editText);
    }
  };

  return (
    <div className="flex items-center justify-between bg-white p-3 rounded-lg shadow hover:shadow-md transition-shadow duration-200">
      
      {!todo.isEditing ? (
        <span
          onClick={() => toggleComplete(todo.id)}
          className={`cursor-pointer flex-1 ${
            todo.completed ? "line-through text-gray-400 opacity-70" : "text-gray-800"
          }`}
        >
          {todo.text}
        </span>
      ) : (
        <input
          type="text"
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
          onKeyDown={handleKeyDown}
          className="border p-2 rounded flex-1 mr-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          autoFocus
        />
      )}

      
      <div className="flex gap-2">
        {!todo.isEditing ? (
          <button
            className="flex items-center gap-1 bg-pink-400 text-white px-3 py-1 rounded hover:bg-pink-600 transition"
            onClick={() => toggleEdit(todo.id)}
          >
            <FaEdit /> Güncelle
          </button>
        ) : (
          <button
            className="flex items-center gap-1 bg-purple-300 text-white px-3 py-1 rounded hover:bg-pink-450 transition"
            onClick={() => {
              updateTodoText(todo.id, editText);
            }}
          >
            <FaCheck /> Kaydet
          </button>
        )}

        <button
          className="flex items-center gap-1 bg-red-400 text-white px-3 py-1 rounded hover:bg-red-600 transition"
          onClick={() => removeTodo(todo.id)}
        >
          <FaTrash /> Sil
        </button>
      </div>
    </div>
  );
}