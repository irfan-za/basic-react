"use client";

import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div className="flex flex-col items-center gap-2 md:gap-4 p-8 justify-center mx-auto">
      <h2 className="text-2xl font-bold mb-4">Counter</h2>
      <div className="text-4xl font-bold mb-4">{count}</div>
      <div className="flex gap-4">
        <button
          disabled={count <= 0}
          onClick={decrement}
          className={`${
            count <= 0
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-red-500 hover:bg-red-600"
          } px-4 py-2  text-white rounded transition-colors font-medium`}
        >
          Decrement
        </button>
        <button
          onClick={increment}
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors font-medium"
        >
          Increment
        </button>
      </div>
    </div>
  );
}
