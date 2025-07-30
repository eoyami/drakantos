"use client"
import React from 'react'
import Image from 'next/image'
import { FaShieldAlt } from "react-icons/fa";
import { FaQuestion } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { GiCrossedSwords } from "react-icons/gi";
import Tooltip from './Tooltip';

export type CharacterProps = {
  id?: number,
  name: string,
  smallImg: string,
  bigImg?: string,
  alt?: string,
  type?: "support" | "tank" | "dps" | "none",
  description?: string,
  onClick?: () => void
}

const Character = ({id, name, smallImg, alt, type, onClick}: CharacterProps) => {

  const renderIcon = () => {
    switch(type){
      case "tank":
        return <FaShieldAlt className="text-white text-2xl" />;
      case "support":
        return <FaPlus className="text-white text-2xl" />;
      case "dps":
        return <GiCrossedSwords className="text-white text-2xl" />;
      default:
        return <FaQuestion className="text-white text-2xl" />;
    }
  }

  return (
    <>
          <div key={id} className="flex flex-col justify-center items-center h-36 w-36 bg-black/30 rounded p-2 hover:bg-[#F4CF8B]/30 transition ease-in-out hover:cursor-pointer" onClick={onClick}>
            <div className='flex flex-col justify-center items-center h-full min-h-24 max-h-24'>
              <Image src={smallImg} width={55} height={70} priority alt={alt!} />
              <div className='flex flex-col items-center justify-center h-full'>
                {type ? (
                  <div className='relative'>
                    <Tooltip label={type!}>
                    {renderIcon()}
                    </Tooltip>
                </div>
                ): null}
              </div>
              <div className="flex flex-col justify-center pt-2 h-full">
                <h3>{name.toUpperCase()}</h3>
              </div>
            </div>
          </div>
    </>
  )
}

export default Character