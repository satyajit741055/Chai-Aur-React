import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeTodo, updateTodo } from '../features/todo/todoSlice';

function Todos() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const [currentlyEditingId, setCurrentlyEditingId] = useState(null);
  const [editedText, setEditedText] = useState('');

  return (
    <>
      <ul className="list-none space-y-4">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="flex items-center justify-between bg-white/10 backdrop-blur-md rounded-lg px-4 py-3 shadow-md"
          >
            <input
              type="text"
              className={`w-full bg-transparent text-white mr-4 rounded px-2 py-1 outline-none border transition ${
                currentlyEditingId === todo.id
                  ? 'border-indigo-400'
                  : 'border-transparent'
              }`}
              value={currentlyEditingId === todo.id ? editedText : todo.text}
              onChange={(e) => setEditedText(e.target.value)}
              readOnly={currentlyEditingId !== todo.id}
            />

            <div className="flex gap-2">
              <button
                onClick={() => dispatch(removeTodo(todo.id))}
                className="bg-red-500 hover:bg-red-600 text-white p-2 rounded-lg transition"
              >
                🗑️
              </button>

              <button
                onClick={() => {
                  if (currentlyEditingId === todo.id) {
                    dispatch(updateTodo({ id: todo.id, text: editedText }));
                    setCurrentlyEditingId(null);
                  } else {
                    setCurrentlyEditingId(todo.id);
                    setEditedText(todo.text);
                  }
                }}
                className="bg-yellow-400 hover:bg-yellow-500 text-white p-2 rounded-lg transition"
              >
                {currentlyEditingId === todo.id ? '💾' : '✏️'}
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Todos;
