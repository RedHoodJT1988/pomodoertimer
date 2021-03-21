import React from 'react';
import './App.css';
import TodoList from './components/todo/TodoList'

const App = () => (
  <div className="App">
    <h2>PomodoerTime</h2>
    <br />
    <TodoList />
  </div>
);

export default App;