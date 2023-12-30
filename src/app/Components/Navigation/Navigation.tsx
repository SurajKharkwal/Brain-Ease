import React from 'react'

export const Navigation = () => {
  return (
    <ul className='w-full fixed space-x-4 p-8 flex h-[12vh] top-0 justify-center items-center'>
        <li className='mr-auto text-2xl font-extrabold'>Brain <i className='text-purple-300'>Ease</i></li>
        <li className='font-bold border-2 border-purple-300 p-2 hover:bg-slate-800 text-purple-300 rounded-lg shadowBtn'>Sign-in</li>
        <li className='font-bold bg-purple-300 text-[#070C24] p-2 border-2 hover:bg-purple-200 border-purple-300 rounded-lg shadowBtn'>Sign-up</li>
    </ul>
  )
}
