import React from 'react'
import Image from 'next/image'
const Navbar = () => {
  return (
    <>
    <nav className="flex justify-center items-center bg-[#171717] text-white font-bold h-16 w-full z-10">
        <div className="md:flex">
            <div className='hidden md:flex p-4 space-x-4'>
                <a href="/" className="hover:text-gray-400">Início</a>
                <a href="/" className="hover:text-gray-400">História</a>
            </div>
            <div id='logo' className='relative w-[300px]'>
                <Image className='absolute top-0' src="/drakantos_logo.png" width={300} height={100} alt=""></Image>
            </div>
            <div className='hidden md:flex p-4 space-x-4'>
                <a href="/about" className="hover:text-gray-400">Galeria</a>
                <a href="/contact" className="hover:text-gray-400">Sistemas</a>
            </div>
        </div>
    </nav>
    </>
  )
}

export default Navbar