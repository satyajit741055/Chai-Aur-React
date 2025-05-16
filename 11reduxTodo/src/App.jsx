import { AddTodo } from './components/AddTodo';
import Todos from './components/Todos';
import './index.css';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white font-sans flex items-center justify-center">
      <div className="w-full max-w-2xl p-6 bg-white/5 rounded-xl shadow-xl backdrop-blur-sm border border-white/10">
        <h1 className="text-3xl font-bold text-center mb-8 text-indigo-400">🌟 Todo App</h1>
        <AddTodo />
        <Todos />
      </div>
    </div>
  );
}

export default App;
