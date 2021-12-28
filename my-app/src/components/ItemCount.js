import React, { useState } from "react";

export const ItemCount = () => {
  const [count, setCount] = useState(0);

  const sum = () => {
    setCount(count + 1);
  }

  const minus = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <button className='btn m-2 btn-success' onClick={minus}> - </button>
      {count}
      <button className='btn m-2 btn-success' onClick={sum}> + </button>
    </div>
  );
};
