import React from 'react';

export const Navigation = () => {
  return (
    <header>
      <nav className='w-full fixed text-white space-x-4 p-8 flex h-[12vh] top-0 justify-center items-center'>
        <h1 className='mr-auto text-2xl max-md:text-xl font-extrabold'>Brain <i className='text-purple-300'>Ease</i></h1>
        <ul className='flex gap-4'>
          <li className='font-bold border-2 max-md:text-[1.5vh] border-purple-300 p-2 hover:bg-slate-800 text-purple-300 rounded-lg shadowBtn'>Sign-in</li>
          <li className='font-bold max-md:text-[1.5vh] bg-purple-300 text-[#070C24] p-2 border-2 hover:bg-purple-200 border-purple-300 rounded-lg shadowBtn'>Sign-up</li>
        </ul>
      </nav>
    </header>
  );
};
