import { useState, useEffect } from 'react';
import { TodoList } from '../components/TodoList';
import { TodoForm } from '../components/TodoForm';

export default function Home() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/todo`);
      const data = await response.json();
      setTodos(data);
    } catch (error) {
      console.error('Error fetching todos:', error);
    }
  };

  const addTodo = async (title) => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/todo`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title }),
      });
      if (response.ok) {
        fetchTodos();
      }
    } catch (error) {
      console.error('Error adding todo:', error);
    }
  };

  const deleteTodo = async (id) => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/todo/${id}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        fetchTodos();
      }
    } catch (error) {
      console.error('Error deleting todo:', error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">ToDo App</h1>
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} deleteTodo={deleteTodo} />
    </div>
  );
}