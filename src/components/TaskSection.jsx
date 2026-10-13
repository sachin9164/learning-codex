import React from 'react';

function TodoList({ todos, onToggle, onDelete }) {
  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <li className={todo.done ? 'todo-row completed' : 'todo-row'} key={todo.id}>
          <button
            className="check-button"
            type="button"
            aria-label={todo.done ? `Mark ${todo.title} active` : `Complete ${todo.title}`}
            onClick={() => onToggle(todo.id)}
          >
            {todo.done && <span aria-hidden="true">✓</span>}
          </button>
          <span className="todo-title">{todo.title}</span>
          <button
            className="delete-button"
            type="button"
            aria-label={`Delete ${todo.title}`}
            onClick={() => onDelete(todo.id)}
          >
            ×
          </button>
        </li>
      ))}
    </ul>
  );
}

function EmptyState({ hasTodos, filter }) {
  return (
    <div className="empty-state">
      <span className="empty-icon" aria-hidden="true">{hasTodos ? '✓' : '☼'}</span>
      <p>{!hasTodos ? 'A fresh page.' : filter === 'active' ? 'No tasks left to do.' : 'Nothing to see here yet.'}</p>
      <span>{!hasTodos ? 'Add a task above and get started.' : 'Your list will show up here.'}</span>
    </div>
  );
}

export default function TaskSection({
  remaining,
  todos,
  visibleTodos,
  filter,
  onFilterChange,
  onToggle,
  onDelete,
}) {
  return (
    <>
      <div className="list-heading">
        <div>
          <h2>Today’s tasks</h2>
          <p>{remaining === 0 ? 'Everything is taken care of' : `${remaining} ${remaining === 1 ? 'thing' : 'things'} on your list`}</p>
        </div>
        <div className="filters" role="group" aria-label="Filter tasks">
          {['all', 'active', 'completed'].map((item) => (
            <button
              key={item}
              className={filter === item ? 'filter active' : 'filter'}
              onClick={() => onFilterChange(item)}
              type="button"
            >
              {item[0].toUpperCase() + item.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {visibleTodos.length > 0
        ? <TodoList todos={visibleTodos} onToggle={onToggle} onDelete={onDelete} />
        : <EmptyState hasTodos={todos.length > 0} filter={filter} />}
    </>
  );
}
