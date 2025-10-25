import React, { useState } from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Counter />
      </header>
    </div>
  );
}


function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h2>React Counter</h2>
      <h3>Current Count: {count}</h3>
      <button onClick={increment} style={{ marginRight: '10px' }}>
        Increment
      </button>
      <button onClick={decrement}>
        Decrement
      </button>
    </div>
  );
}

export default App;