import React from 'react';
import Dinner from './dinner';
import './App.css';

function App() {
  const name = "Huzaifa";
  return (
    // <h1>Hello World from Huzaifa</h1>
    <div className="App">
      <h1>Hello, My Name is {name}</h1>
      <Dinner dishName="Biryani" sweetDish="Zarda" />
      <Dinner dishName="Qourma" sweetDish="Kheer" />
      <Dinner dishName="Chicken Karhai" sweetDish="Zarda"/>
    </div>
  );
}

export default App;
