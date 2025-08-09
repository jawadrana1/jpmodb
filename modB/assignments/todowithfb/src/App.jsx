import React, { useState, useEffect } from 'react';
import TodoForm from './components/TodoForm/TodoForm';
import TodoItem from './components/TodoItem/TodoItem';
import './App.css';

import {
  fetchTodos,
  addTodoToFirebase,
  deleteTodoFromFirebase,
  updateTodoInFirebase,
} from './Firebase/TodoService';

const App = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const loadTodos = async () => {
      const data = await fetchTodos();
      setTodos(data);
    };
    loadTodos();
  }, []);

  const addTodo = async (text) => {
    const newTodo = await addTodoToFirebase(text);
    setTodos([newTodo, ...todos]);
  };

  const deleteTodo = async (id) => {
    await deleteTodoFromFirebase(id);
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const updateTodo = async (id, newText) => {
    await updateTodoInFirebase(id, newText);
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, text: newText } : todo))
    );
  };

  return (
    <div className="container mt-5">
      <div className="todo-container">
        <h2 className="text-center mb-4">React ToDo App</h2>
        <TodoForm addTodo={addTodo} />
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            deleteTodo={deleteTodo}
            updateTodo={updateTodo}
          />
        ))}
      </div>
    </div>
  );
};

export default App;




