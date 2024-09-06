import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  // Problème : Nous avons une erreur dans la fonction handleIncrement
  const handleIncrement = () => {
    setTimeout(() => {
      setCount(count + 1); // Erreur : Nous utilisons une ancienne valeur de count
    }, 1000);
  };

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
}

export default Counter;
