import React from 'react';
import Navigation from '../components/navigation';


const Index: React.FunctionComponent = () => {

  return (
    <div className='h-screen bg-red-500'>
      <Navigation />
      <div className='flex flex-wrap justify-center'>
        <div className='w-screen text-7xl text-center font-extrabold pt-16'>
          Lesson Plans
        </div>
        <div className='text-3xl italic text-indigo-700'>
          demo
        </div>
      </div>
    </div>
  )
}

export default Index;
