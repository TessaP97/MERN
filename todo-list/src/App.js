import React, { useState } from 'react';
import Input from './components/Input';
import Task from './components/Task';
import './App.css';

function App() {
  const [list, setList] = useState([]);

  return (
    <div className="App container" style={{ width:'800px' }}>
      {list.map((task, i ) => (
        <Task task={task} setList={setList} index={i} list={list} />
      ))}
      <Input list={list} setList={setList} />
    </div>
  );
}

export default App;
