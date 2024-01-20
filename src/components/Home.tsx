import React from 'react';
import { useStore } from '../store';

const Home: React.FC = () => {
  const { counter, increaseCounter } = useStore();

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Welcome to My React App!</h1>
      <p className="mb-4">This is a simple home page component.</p>
      
      <div>
        <p className="mb-2">Counter: {counter}</p>
        <button onClick={increaseCounter} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Increase Counter
        </button>
      </div>
    </div>
  );
};

export default Home;
