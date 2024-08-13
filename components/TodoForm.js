import { useState } from 'react';

export function TodoForm({ addTodo }) {
  const [title, setTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    addTodo(title);
    setTitle('');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="新しいタスクを入力"
        className="border p-2 mr-2"
      />
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">
        追加
      </button>
    </form>
  );
}