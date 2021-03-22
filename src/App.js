import { getByTitle } from '@testing-library/dom';
import React from 'react';
import './App.css';
import TodoList from './components/todo/TodoList';

const details = {
  header: "PomodoerTimer",
  headerColor: "teal"
}

const moreDetails = {
  ...details,
  header: "Best PomodoerTimer",
  background: "black"
};

const headerDisplay = ({ 
  header: title = "Todo List", 
  headerColor: color = "blue",
  background: background = "none" 
}) => (
  <h1 style={{ color: color, background: background }}>{title}</h1>
);

const App = () => (
  <div className="App">
    <h1>{headerDisplay(moreDetails)}</h1>
    <br />
    <TodoList />
  </div>
);

export default App;