
"use client"
import React from 'react'
import Image from 'next/image'
import { FaShieldAlt } from "react-icons/fa";
import { FaQuestion } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { GiCrossedSwords } from "react-icons/gi";
import Tooltip from './Tooltip';

export type CharacterProps = {
  id: number,
  name: string,
  src: string,
  alt: string,
  type: "support" | "tank" | "dps" | "none",
  OpenModal: (character: CharacterProps) => void
}

const Character = ({id, name, src, alt, type, OpenModal}: CharacterProps) => {

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
          <div key={id} className="flex flex-col justify-center items-center h-40 w-40 bg-black/30 rounded p-2 hover:bg-white/30 transition ease-in-out hover:cursor-pointer" onClick={() => OpenModal({ id, name, src, alt, type, OpenModal })}>
            <div className='flex flex-col justify-center items-center h-full min-h-24 max-h-24'>
              <Image src={src} width={55} height={70} priority alt={alt} />
              <div className='flex flex-col items-center justify-center h-full'>
                <div className='relative'>
                    <Tooltip label={type}>
                    {renderIcon()}
                    </Tooltip>
                </div>
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