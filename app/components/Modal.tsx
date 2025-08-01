import React from 'react'
import Image from 'next/image'
import { CharacterProps } from './Character'
import { FaShieldAlt, FaPlus, FaQuestion } from "react-icons/fa";
import { GiCrossedSwords } from "react-icons/gi";
import { MdClose } from "react-icons/md";

type ModalProps = {
    isOpen: boolean,
    onClose: () => void,
    character: CharacterProps | null
}

const Modal = ({isOpen, onClose, character}: ModalProps) => {
    if (!isOpen) return null

    const renderIcon = () => {
        switch(character?.type){
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
    <div id="modal" className="fixed top-0 left-0 w-full h-screen z-10">
        <div className="flex flex-col justify-center items-center bg-black/50 h-full p-4" onClick={() => {onClose()}}>
          <div className="relative flex justify-center items-center bg-black/80 text-white" >
          <button className='absolute top-0 right-0 text-white text-4xl hover:cursor-pointer' onClick={() => {onClose()}}><MdClose /></button>
          {character && (
            <div className='flex flex-col md:flex-row overflow-hidden justify-center items-center h-full w-80 md:w-full rounded'>
              <div className="relative w-96 max-w-full aspect-square mx-auto">
                <Image
                  src={character.bigImg!}
                  alt={character.alt!}
                  fill
                  style={{ objectFit: 'contain' }}
                  sizes="(max-width: 640px) 100vw, 224px"
                  priority
                />
              </div>
              <div className='flex flex-col justify-center items-center h-full md:w-96 w-full p-4 gap-3'>
                <h1 className='text-3xl'>{character.name.toUpperCase()}</h1>
                <h1 className='text-center'>{character.description}</h1>
                <div className='flex flex-col justify-center items-center'>
                <h1>{character.type!.toUpperCase()}</h1>
                {renderIcon()}
                </div>
              </div>
            </div>
          )}
          </div>
          
        </div>
        
      </div>
  )
}

export default Modal