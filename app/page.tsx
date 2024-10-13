'use client';

import { useState } from "react";

export default function Home() {
  const [todos, setTodos] = useState<string[]>([]);
  const [newTodo, setNewTodo] = useState("");

  const addTodo = () => {
    if (newTodo.trim()) {
      setTodos([...todos, newTodo.trim()]);
      setNewTodo("");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8">
      <h1 className="text-2xl font-bold mb-4">Simple Todo App</h1>
      
      <div className="flex mb-4">
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          className="border border-gray-300 rounded-l px-4 py-2"
          placeholder="Enter a new todo"
        />
        <button
          onClick={addTodo}
          className="bg-blue-500 text-white px-4 py-2 rounded-r"
        >
          Add
        </button>
      </div>

      <ul className="w-full max-w-md">
        {todos.map((todo, index) => (
          <li key={index} className="bg-gray-100 mb-2 p-2 rounded">
            {todo}
          </li>
        ))}
      </ul>
    </div>
  );
}
