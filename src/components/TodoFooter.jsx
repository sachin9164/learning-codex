import React from 'react';

export default function TodoFooter({ todos, onClearCompleted }) {
  const hasCompletedTodos = todos.some((todo) => todo.done);

  return (
    <footer className="list-footer">
      <span><span className="status-dot" /> Saved on this device</span>
      <button type="button" onClick={onClearCompleted} disabled={!hasCompletedTodos}>Clear completed</button>
    </footer>
  );
}
