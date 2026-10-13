import { useEffect, useMemo, useState } from 'react';

const STORAGE_KEY = 'daylist-todos';

function readTodos() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
    return Array.isArray(saved) ? saved : [];
  } catch {
    return [];
  }
}

export function useTodos() {
  const [todos, setTodos] = useState(readTodos);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
    } catch {
      // Persistence is best effort; the in-memory todo list remains usable.
    }
  }, [todos]);

  const remaining = todos.filter((todo) => !todo.done).length;
  const visibleTodos = useMemo(() => todos.filter((todo) => {
    if (filter === 'active') return !todo.done;
    if (filter === 'completed') return todo.done;
    return true;
  }), [todos, filter]);

  function addTodo(value) {
    const title = value.trim();
    if (!title) return false;
    setTodos((current) => [{ id: crypto.randomUUID(), title, done: false }, ...current]);
    return true;
  }

  function toggleTodo(id) {
    setTodos((current) => current.map((todo) => todo.id === id ? { ...todo, done: !todo.done } : todo));
  }

  function deleteTodo(id) {
    setTodos((current) => current.filter((todo) => todo.id !== id));
  }

  function clearCompleted() {
    setTodos((current) => current.filter((todo) => !todo.done));
  }

  return {
    todos,
    remaining,
    visibleTodos,
    filter,
    setFilter,
    addTodo,
    toggleTodo,
    deleteTodo,
    clearCompleted,
  };
}
