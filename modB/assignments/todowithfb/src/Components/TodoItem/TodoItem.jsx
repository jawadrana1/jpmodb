import React, { useState } from 'react';

const TodoItem = ({ todo, deleteTodo, updateTodo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(todo.text);

  const handleUpdate = () => {
    updateTodo(todo.id, newText);
    setIsEditing(false);
  };

  return (
    <div className="card mb-2">
      <div className="card-body d-flex justify-content-between align-items-center">
        {isEditing ? (
          <input
            type="text"
            className="form-control me-2"
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
          />
        ) : (
          <span>{todo.text}</span>
        )}

        <div>
          {isEditing ? (
            <button className="btn btn-success btn-sm me-2" onClick={handleUpdate}>Save</button>
          ) : (
            <button className="btn btn-warning btn-sm me-2" onClick={() => setIsEditing(true)}>Edit</button>
          )}
          <button className="btn btn-danger btn-sm" onClick={() => deleteTodo(todo.id)}>Delete</button>
        </div>
      </div>
    </div>
  );
};

export default TodoItem;