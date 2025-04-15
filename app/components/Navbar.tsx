import React from 'react'
import Image from 'next/image'
const Navbar = () => {
  return (
    <>
    <nav className="flex justify-center items-center bg-[#171717] text-white font-bold w-full z-10">
        <div className="flex">
            <div className='p-4 space-x-4'>
                <a href="/" className="hover:text-gray-400">Início</a>
                <a href="/" className="hover:text-gray-400">História</a>
            </div>
            <div id='logo' className='relative w-[300px]'>
                <Image className='absolute' src="/drakantos_logo.png" width={300} height={100} alt=""></Image>
            </div>
            <div className='p-4 space-x-4'>
                <a href="/about" className="hover:text-gray-400">Galeria</a>
                <a href="/contact" className="hover:text-gray-400">Sistemas</a>
            </div>
        </div>
    </nav>
    </>
  )
}

export default Navbar