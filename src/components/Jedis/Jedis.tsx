import React, { useCallback, useEffect, useMemo, useState } from 'react';
import Button from 'components/Button/Button';
import Jedi from './Jedi/Jedi';

type Cause = {
  name: string;
};

export interface IJedis {
  name: string;
  birth_year: string;
  height: number;

  // Arrays
  films: Array<string>;
  url: string;
  causes: Array<Cause>;
  starships?: string[];
}


export default function Jedis({ count }) {
  const [jedis, setJedis] = useState<IJedis[] | []>([]);

  const fetchJedi = async (): Promise<IJedis> => {
    const jediCount = jedis.length;

    const response = await fetch(
      `https://swapi.dev/api/people/${jediCount + 1}`
    );

    const jedi: IJedis = (await response.json()) as IJedis;

    return jedi;
  };

  const getJedi = async () => {
    const newJedi = await fetchJedi();
    setJedis([...jedis, newJedi]);
  };

  const hasJedis = useMemo(() => jedis.length > 0, [jedis]);

  // Use Memo so that 
  const renderJedis = useMemo(() => {
    console.log('Rendering the Jedi JSX List');
    return jedis.map((jedi) => <Jedi key={jedi.url} jedi={jedi} />);
  }, [jedis]);

  // Re-evaulates on component render 
  // const renderJedis = () => {
  //   console.log('Rendering the Jedi JSX List');
  //   return jedis.map((jedi) => <Jedi key={jedi.url} jedi={jedi} />);
  // }


  // Use A callback so that the values inside of the function do not change. Not causing useEffect to fire
  const getCurrentCount = useCallback(() => {
    return count;
  }, [count]);


  // Every time this count changes, this function has to be rre-evaluated because of the component rerender. Meaning it's referentially different now. 
  // const getCurrentCount = () => {
    // return count;
  // }
  
  useEffect(() => {
    console.log('Get Current Count Changed');
 
    // Clears Jedis and forces the component to re-render 
    // setJedis([]);
  }, [getCurrentCount]);

  return (
    <div>
      {hasJedis ? (
        <Button action={getJedi}> More Jedis </Button>
      ) : (
        <Button action={getJedi}> Get Jedi </Button>
      )}

      <div className="">{renderJedis}</div>
    </div>
  );
}
