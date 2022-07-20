import { Navbar } from 'components';
import Button from 'components/Button/Button';
import Jedis from 'components/Jedis/Jedis';
import { useState } from 'react';

const App = () => {
  const [first, setfirst] = useState<number>(0);

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <Navbar />
      <div className="max-w-screen-xl px-4 py-16 mx-auto sm:py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="my-3 text-4xl font-bold text-gray-800 sm:text-5xl sm:tracking-tight lg:text-8xl dark:text-gray-200">
            SWAPI
          </h1>
          <p className="max-w-screen-md mx-auto text-xl text-gray-600 dark:text-gray-400">
            A simple TypeScript Demo!
          </p>
          <Button action={() => setfirst(first + 1)}>Clear Jedis</Button>
          <Jedis count={first} />
        </div>
      </div>
    </div>
  );
};

export default App;
