import React from 'react';
import './App.css';
import Todo from './components/Todo';

const App = () => (
  <div className="App">
    <h2>PomodoerTime</h2>
    <br />
    <Todo description="Play some SMITE" />
    <Todo description="Play Star Wars Squadrons" />
    <Todo description="Play Marvel's Avengers" />
  </div>
);

export default App;