import React from 'react'

function Header() {
  return (
    <header className='w-screen h-[10vh] flex fixed top-0 items-center justify-center px-8 border-b-2 border-black bg-primary z-20'>
        <a href='/' className='flex items-center gap-4'>
            <figure className='w-8 h-8 bg-secondary rounded-full'/>
            <h1 className='text-2xl font-semibold text-secondary font-great-vibes'>Red Velvet</h1>
        </a>
    </header>
  )
}

export default Header
