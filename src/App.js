import React from 'react';
import './style.css';

import React, { useState, useEffect } from 'react';

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`You clicked ${count} times`);
  });

  const handleUpdate = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <div>You have clicked {count} times</div>
      <button onClick={handleUpdate}>Click me</button>
    </div>
  );
}

export default App;
