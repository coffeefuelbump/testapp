import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');

  const triggerConfetti = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#FF6B6B', '#4ECDC4', '#45B7D1', '#FFA07A', '#98D8C8', '#F7DC6F', '#BB8FCE']
    });
  };

  const handleIncrement = () => {
    setCount(count + 2);
    triggerConfetti();
  };

  const handleDecrement = () => {
    setCount(count - 2);
    triggerConfetti();
  };

  // Calculate circular progress based on count
  const maxCount = 100;
  const progress = Math.min((Math.abs(count) / maxCount) * 100, 100);
  const circumference = 2 * Math.PI * 45; // radius = 45
  const strokeDasharray = circumference;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <div className="App">
      <header className="App-header">
        <h1>democratize developing</h1>
        
        <div className="counter-section">
          <h2>Counter: {count}</h2>
          
          <div className="circular-chart-container">
            <div className="circular-chart-label">Progress Visualization</div>
            <div className="circular-chart-wrapper">
              <svg className="circular-chart" width="120" height="120">
                {/* Background circle */}
                <circle
                  cx="60"
                  cy="60"
                  r="45"
                  fill="none"
                  stroke="rgba(168, 85, 247, 0.2)"
                  strokeWidth="10"
                />
                {/* Progress circle */}
                <circle
                  cx="60"
                  cy="60"
                  r="45"
                  fill="none"
                  stroke={count >= 0 ? "#a855f7" : "#ec4899"}
                  strokeWidth="10"
                  strokeLinecap="round"
                  strokeDasharray={strokeDasharray}
                  strokeDashoffset={strokeDashoffset}
                  className="progress-circle"
                />
                {/* Center text */}
                <text
                  x="60"
                  y="60"
                  textAnchor="middle"
                  dominantBaseline="middle"
                  className="circular-value"
                >
                  {count}
                </text>
                {/* Percentage text */}
                <text
                  x="60"
                  y="75"
                  textAnchor="middle"
                  dominantBaseline="middle"
                  className="circular-percentage"
                >
                  {Math.round(progress)}%
                </text>
              </svg>
            </div>
            <div className="circular-chart-info">
              <span className="chart-status">
                {count >= 0 ? "🚀 Rising" : "🔥 Falling"}
              </span>
            </div>
          </div>

          <div className="button-group">
            <button onClick={handleIncrement}>+</button>
            <button onClick={handleDecrement}>-</button>
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
        </div>
      </header>
    </div>
  );
}

export default App;
