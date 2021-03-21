import React from 'react';
import './App.css';
import Todo from './components/Todo';

const App = () => (
  <div className="App">
    <h2>PomodoerTime</h2>
    <br />
    <Todo description="Do the thing" />
    <Todo description="Make this awesome" />
    <Todo description="Do some other awesome thing" />
  </div>
);

export default App;