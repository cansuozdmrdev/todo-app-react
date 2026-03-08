import { useState } from "react";

export default function TodoForm({ addTodo }) {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    addTodo(text);
    setText("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
    <input
      type="text"
      placeholder="Yeni görev ekle"
      value={text}
      onChange={(e) => setText(e.target.value)}
      className="flex-1 border-2 border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 transition"
    />
    <button
      type="submit"
      className="bg-green-300 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition"
    >
      Ekle
    </button>
  </form>
  );
}