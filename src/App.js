import React, {useState} from 'react';
import './App.css';
import {Message} from './Message';

function App() {
 
  let [count,setCount] = useState(0);
  let [isMorning,setMorning] = useState(false);

  return (
    <div className={`box ${isMorning ? 'dayLight': ''}`}>
      <h1 className="header">Counter App</h1>
      <Message classN={"title"} counter={count} />
      <button onClick={() => setCount(count+1)}>Increment</button> <br />
      <button onClick={() =>setCount(count-1)}>Decrement</button> <br />
      <button onClick={() =>setMorning(!isMorning)}>Day / Night</button>
    </div>
  );
}

export default App;
