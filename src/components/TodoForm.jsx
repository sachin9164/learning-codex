import React from 'react';

export default function TodoForm({ value, onChange, onSubmit }) {
  return (
    <form className="add-form" onSubmit={onSubmit}>
      <label className="sr-only" htmlFor="new-todo">Add a task</label>
      <span className="input-plus" aria-hidden="true">+</span>
      <input
        id="new-todo"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="What would you like to get done?"
        maxLength={120}
      />
      <button className="add-button" type="submit" disabled={!value.trim()}>Add task</button>
    </form>
  );
}
