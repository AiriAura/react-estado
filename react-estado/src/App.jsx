// src/App.jsx
import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const incrementCount = () => setCount(count + 1);
  const decrementCount = () => setCount(count - 1);

  return (
    <div className="app-container">
      <div className="card">
        <h1>CONTADOR DE AIRI AURA 🌸</h1>
        <p className="count">{count}</p>
        <div className="buttons">
          <button onClick={incrementCount}>Incrementar</button>
          <button onClick={decrementCount}>Decrementar</button>
        </div>
      </div>
    </div>
  );
}

export default App;
