'use client'

import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { AiOutlineMenu } from "react-icons/ai";
import Link from 'next/link';

const Navbar = () => {
    
    const [isFixed, setIsFixed] = useState(false)
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const  menuRef = useRef<HTMLDivElement>(null)
    const buttonRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                menuRef.current && !menuRef.current.contains(event.target as Node) &&
                buttonRef.current && !buttonRef.current.contains(event.target as Node)
            ) {
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
                <Link className='hover:text-[#F4CF8B]' href="/" onClick={handleMenu}>Início</Link>
                <Link className='hover:text-[#F4CF8B]' href="/historia" onClick={handleMenu}>História</Link>
            </div>
            <div id='logo' className='relative w-[300px]'>
                <Image className='absolute top-0' src="/drakantos_logo.png" width={300} height={100} alt=""></Image>
            </div>
            <div className='hidden md:flex p-4 space-x-4'>
                <Link className='hover:text-[#F4CF8B]' href="/galeria" onClick={handleMenu}>Galeria</Link>
                <Link className='hover:text-[#F4CF8B]' href="/sistemas" onClick={handleMenu}>Sistemas</Link>
            </div>
        </div>
    </nav>
    <div className={`${isFixed ? 'fixed top-0' : 'static'} flex justify-center items-center md:hidden w-full px-4 bg-[#171717] z-11`}>
            <div className='mr-auto' ref={buttonRef}>
            <AiOutlineMenu className='text-white text-3xl'  onClick={handleMenu} />
            </div>
            <div className='flex justify-center items-center w-full'>
            <Image className='flex' src="/drakantos_logo2.png" width={250} height={50} alt=""></Image>
            </div> 
                <div ref={menuRef} className={`fixed top-12 z-10 w-full bg-[#171717] transform transition-all duration-300 ease-in-out ${isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'}`}>
                    <ul className='flex flex-col text-white'>
                        <Link className='py-2 px-4 border-b border-white w-full' href="/" onClick={handleMenu}>Início</Link>
                        <Link className='py-2 px-4 border-b border-white w-full' href="/historia" onClick={handleMenu}>História</Link>
                        <Link className='py-2 px-4 border-b border-white w-full' href="/galeria" onClick={handleMenu}>Galeria</Link>
                        <Link className='py-2 px-4 border-b border-white w-full' href="/sistemas" onClick={handleMenu}>Sistemas</Link>
                    </ul>
                </div>
    </div>
    
    </>
  )
}

export default Navbar