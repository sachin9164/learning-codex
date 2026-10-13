import React, { useState } from 'react';
import BrandHeader from './components/BrandHeader.jsx';
import PageIntro from './components/PageIntro.jsx';
import TaskSection from './components/TaskSection.jsx';
import TodoFooter from './components/TodoFooter.jsx';
import TodoForm from './components/TodoForm.jsx';
import { useTodos } from './hooks/useTodos.js';

export default function App() {
  const [text, setText] = useState('');
  const {
    todos,
    remaining,
    visibleTodos,
    filter,
    setFilter,
    addTodo,
    toggleTodo,
    deleteTodo,
    clearCompleted,
  } = useTodos();

  function handleAddTodo(event) {
    event.preventDefault();
    if (addTodo(text)) setText('');
  }

  return (
    <main className="page-shell">
      <section className="todo-card" aria-labelledby="page-title">
        <BrandHeader />
        <PageIntro />
        <TodoForm value={text} onChange={setText} onSubmit={handleAddTodo} />
        <TaskSection
          remaining={remaining}
          todos={todos}
          visibleTodos={visibleTodos}
          filter={filter}
          onFilterChange={setFilter}
          onToggle={toggleTodo}
          onDelete={deleteTodo}
        />
        <TodoFooter todos={todos} onClearCompleted={clearCompleted} />
      </section>
      <p className="page-note">Small steps still move you forward <span aria-hidden="true">✦</span></p>
    </main>
  );
}
