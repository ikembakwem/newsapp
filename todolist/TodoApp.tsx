// Dependencies
import { useState, useEffect, useMemo, useCallback } from 'react';

// Components
import List, { Todo } from './List';

const initialTodos = [
  { id: 1, task: 'Go to the gym' },
  { id: 2, task: 'Go shopping' },
];

function TodoApp() {
  const [todoList, setTodoList] = useState(initialTodos);
  const [task, setTask] = useState('');

  useEffect(() => {
    console.log('Rendering </TodoApp>');
  });

  const handleCreate = () => {
    const newTodo = {
      id: Date.now(),
      task,
    };

    // Pushing the new todo to the list
    setTodoList([...todoList, newTodo]);

    // Reset the input value
    setTask('');
  };

  return (
    <>
      <input
        className="border-2 border-indigo-600 rounded-lg"
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />

      <button
        className="ml-2 border-2 border-indigo-700 rounded-lg "
        onClick={handleCreate}
      >
        Create
      </button>

      <List todoList={todoList} />
    </>
  );
}

export default TodoApp;
