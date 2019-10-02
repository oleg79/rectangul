import React from 'react';

const Counter = ({initialCount, setNewCount}) => {
  const [count, setCount] = React.useState(initialCount);
  React.useEffect(() => {
    setCount(initialCount);
  }, [initialCount]);

  const increment = () => {
    const newCount = count + 1;
    setCount(newCount);
    setNewCount({newCount});
  };

  const decrement = () => {
    const newCount = count - 1;
    setCount(newCount);
    setNewCount({newCount});
  };

  return (
    <>
      <button onClick={increment}>+</button>
      <span>{count}</span>
      <button onClick={decrement}>-</button>
    </>
  );
};

export default Counter;
