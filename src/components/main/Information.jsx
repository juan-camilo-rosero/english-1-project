import React from 'react'

function Information({unit}) {
  return (
    <figure className='w-full p-6 md:px-16 md:border-x-0 border-2 border-black mt-8 md:h-auto md:py-4 md:items-center md:flex md:w-screen md:bottom-0 md:left-0 bg-primary'>
      <div className='w-full flex flex-col gap-1'>
        <h4 className='text-black/40 font-medium w-full'>Members:</h4>
        <p className='w-full text-lg'>Juan  Camilo  Rosero,  Michael  Daniel  Villalba,  Juliana  Pinilla,  Miguel  Cardona</p>
      </div>
      <div className='w-full flex flex-col gap-1 mt-12 md:mt-0'>
        <h4 className='text-black/40 font-medium w-full text-right'>Unit:</h4>
        <p className='w-full text-lg text-right'>{unit}</p>
      </div>
    </figure>
  )
}

export default Information