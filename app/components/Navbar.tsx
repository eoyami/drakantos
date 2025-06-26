'use client'

import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
    
    const [isFixed, setIsFixed] = useState(false)
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const  menuRef = useRef<HTMLDivElement>(null)

    useEffect(() => {

        const handleClickOutside = (event: MouseEvent) => {
            if(menuRef.current && !menuRef.current.contains(event.target as Node)){
                setIsMenuOpen(false)
            }
        }


        const handleScroll = () => {
        setIsFixed(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    window.addEventListener('mousedown', handleClickOutside)

    return () => {
        window.removeEventListener('scroll', handleScroll)
        window.removeEventListener('mousedown', handleClickOutside)
    }
    }, [])


    function handleMenu () {
        setIsMenuOpen(!isMenuOpen)
    }

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
    <div className={`${isFixed ? 'fixed top-0' : 'static'} flex justify-center items-center md:hidden w-full px-4 bg-[#171717] z-11`}>
            <div className='mr-auto'>
            <AiOutlineMenu className='text-white text-3xl' onClick={handleMenu} />
            </div>
            <div className='flex justify-center items-center w-full'>
            <Image className='flex' src="/drakantos_logo2.png" width={250} height={50} alt=""></Image>
            </div> 


            {isMenuOpen ? (
                <div ref={menuRef} className='absolute top-12 z-10 w-full bg-[#171717] fixed'>
                    <ul className='text-white'>
                        <li className='py-2 px-4 border-b-1 border-white'>Início</li>
                        <li className='py-2 px-4 border-b-1 border-white'>História</li>
                        <li className='py-2 px-4 border-b-1 border-white'>Galeria</li>
                        <li className='py-2 px-4'>Sistemas</li>
                    </ul>
                </div>
            ) : null}
    </div>
    
    </>
  )
}

export default Navbar