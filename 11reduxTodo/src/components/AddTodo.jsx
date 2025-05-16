import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../features/todo/todoSlice';

export const AddTodo = () => {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();

  const addTodoHandler = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    dispatch(addTodo(input));
    setInput('');
  };

  return (
    <form onSubmit={addTodoHandler} className="flex items-center gap-4 mb-8">
      <input
        type="text"
        className="flex-1 bg-white/10 backdrop-blur-md border border-white/10 text-white placeholder:text-white/60 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
        placeholder="Enter a Todo..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        type="submit"
        className="bg-indigo-500 hover:bg-indigo-600 text-white px-5 py-2 rounded-lg transition-all shadow"
      >
        Add
      </button>
    </form>
  );
};
