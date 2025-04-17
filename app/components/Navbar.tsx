import React from 'react'
import Image from 'next/image'
import { AiOutlineMenu } from "react-icons/ai";
const Navbar = () => {
  return (
    <>
    <nav className="hidden md:flex justify-center items-center bg-[#171717] text-white font-bold h-16 w-full z-10">
        <div className="hidden md:flex">
            <div className='hidden md:flex p-4 space-x-4'>
                <a href="/" className="hover:text-[#F4CF8B]">Início</a>
                <a href="/" className="hover:text-[#F4CF8B]">História</a>
            </div>
            <div id='logo' className='relative w-[300px]'>
                <Image className='absolute top-0' src="/drakantos_logo.png" width={300} height={100} alt=""></Image>
            </div>
            <div className='hidden md:flex p-4 space-x-4'>
                <a href="/" className="hover:text-[#F4CF8B]">Galeria</a>
                <a href="/" className="hover:text-[#F4CF8B]">Sistemas</a>
            </div>
        </div>
    </nav>
    <div className='fixed top-0 flex justify-center items-center md:hidden w-full px-4 bg-[#171717] z-10'>
            <div className='mr-auto'>
            <AiOutlineMenu className='text-white text-3xl' />
            </div>
            <div className='flex justify-center items-center w-full'>
            <Image className='flex' src="/drakantos_logo2.png" width={250} height={50} alt=""></Image>
            </div>
    </div>
    </>
  )
}

export default Navbar