export function TodoList({ todos, deleteTodo }) {
    return (
      <ul>
        {todos.map((todo) => (
          <li key={todo.id} className="flex items-center mb-2">
            <span className="flex-grow">{todo.title}</span>
            <button
              onClick={() => deleteTodo(todo.id)}
              className="bg-red-500 text-white p-1 rounded"
            >
              削除
            </button>
          </li>
        ))}
      </ul>
    );
  }