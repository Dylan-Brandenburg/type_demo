import React from 'react';
import { IJedis } from '../Jedis';

// interface INewJedi extends IJedis {
//   mass: number | string;
// }

type Props = {
  jedi: IJedis
}


export default function Jedi( {jedi}: Props) {

  return (
    <div className='container-lg mx-auto min-w-full text-xl text-gray-600 dark:text-gray-400 my-2'>
      <div className='text-left'>
        Name: {jedi.name} {jedi.birth_year}
      </div>
      {/* <div>Mass: {jedi.mass}</div> */}
      <div className='text-left'>Height: {jedi.height}</div>
      <div className='text-left'>Ships: {jedi.starships?.map((ship) => ship)}</div>
    </div>
  );
}
