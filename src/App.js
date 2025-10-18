import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to My React App! 🚀</h1>
        
        <div className="counter-section">
          <h2>Counter: {count}</h2>
          <div className="button-group">
            <button onClick={() => setCount(count + 1)}>+</button>
            <button onClick={() => setCount(count - 1)}>-</button>
            <button onClick={() => setCount(0)}>Reset</button>
          </div>
        </div>

        <div className="greeting-section">
          <h2>Say Hello!</h2>
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="name-input"
          />
          {name && <p className="greeting">Hello, {name}! 👋</p>}
        </div>

        <div className="info-section">
          <p>This is a simple React app with interactive features!</p>
          <p>Built with React and deployed to GitHub 🎉</p>
          <div className="broken-section">
            <h3>This will cause an error!</h3>
            <p>Missing closing tag and malformed JSX
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
