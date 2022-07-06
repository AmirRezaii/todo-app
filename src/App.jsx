import { useState } from 'react';
import './App.css';
import Form from './components/Form'
import TodoList from './components/TodoList';

const App = () => {
  const [todos, setTodos] = useState([])

  return (
    <div className="App">
      <h1>Todo App</h1>
      <Form todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
