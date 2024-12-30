import React, { useState, useEffect } from 'react';
import { bubbleSort } from '../algorithms/sorting/bubbleSort';

const Visualizer: React.FC = () => {
  const [array, setArray] = useState<number[]>([]);
  const [sorting, setSorting] = useState(false);

  // Generate a random array
  const generateArray = () => {
    const newArray = Array.from({ length: 10 }, () =>
      Math.floor(Math.random() * 100)
    );
    setArray(newArray);
  };

  // Start Bubble Sort
  const startSorting = async () => {
    setSorting(true);
    await bubbleSort(array, setArray, 500); // 500ms delay
    setSorting(false);
  };

  useEffect(() => {
    generateArray();
  }, []);

  return (
  <div className='flex flex-col items-center justify-center h-screen w-screen'>
    <div className="p-4">
      <h1 className="text-2xl font-bold text-center mb-4">Bubble Sort Visualizer</h1>
      <div className="flex justify-center mb-4">
        {array.map((value, index) => (
          <div
            key={index}
            style={{ height: `${value * 3}px` }}
            className="bg-blue-500 w-8 mx-1 text-center text-white"
          >
            {value}
          </div>
        ))}
      </div>
      <div className="flex justify-center gap-4">
        <button
          onClick={generateArray}
          disabled={sorting}
          className="px-4 py-2 bg-green-500 text-white rounded"
        >
          Generate New Array
        </button>
        <button
          onClick={startSorting}
          disabled={sorting}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Start Sorting
        </button>
      </div>
    </div>
    </div>
  );
};

export default Visualizer;
