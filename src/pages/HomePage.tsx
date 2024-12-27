
import React from 'react';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-8">Algorithm Visualizer</h1>
      <Link to="/bubble-sort" className="px-4 py-2 bg-blue-500 text-white rounded">
        Go to Bubble Sort Visualizer
      </Link>
    </div>
  );
};

export default HomePage;
