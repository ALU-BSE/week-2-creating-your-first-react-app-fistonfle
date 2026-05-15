import { useState } from 'react';
import MyComponent from './MyComponent';
import './App.css';

function App() {
  const [count, setCount] = useState<number>(0);

  const increment = (): void => {
    setCount(count + 1);
  };

  const decrement = (): void => {
    setCount(count - 1);
  };

  return (
    <div className="App">
      <MyComponent title="Hello from MyComponent!" />
      
      <div className="counter-section">
        <h2>Counter Application</h2>
        <div className="counter-display">
          <p>Current Count: <span className="count-value">{count}</span></p>
        </div>
        <div className="button-group">
          <button onClick={decrement} className="btn btn-decrement">
            Decrement
          </button>
          <button onClick={increment} className="btn btn-increment">
            Increment
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
