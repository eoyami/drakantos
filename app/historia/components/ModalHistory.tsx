import React from 'react'
import Image from 'next/image'
import { MdClose } from "react-icons/md";

type CharacterHistory = {
    name: string,
    history: string[],
    smallImg: string
}

type ModalProps = {
    isOpen: boolean,
    onClose: () => void,
    character: CharacterHistory | null
}


const ModalHistory = ({isOpen, onClose, character}: ModalProps) => {
    if (!isOpen) return null

  return (
    <div id="modal" className="fixed top-0 left-0 w-full h-screen z-10">
        <div className="flex flex-col justify-center items-center bg-black/50 h-full p-4" onClick={() => {onClose()}}>
          <div className="relative flex justify-center items-center bg-black/80 text-white" >
          <button className='absolute top-0 right-0 text-white text-4xl hover:cursor-pointer' onClick={() => {onClose()}}><MdClose /></button>
          {character && (
            <div className='flex flex-col justify-center items-center h-full w-96 p-2 md:w-full rounded' onClick={(e) => {e.stopPropagation()}}>
              <div className="relative w-24 max-w-full aspect-square mx-auto">
                <Image
                  src={character.smallImg}
                  alt={character.name}
                  fill
                  style={{ objectFit: 'contain' }}
                  sizes="(max-width: 200px) 100vw, 224px"
                  priority
                />
              </div>
              <div className='flex flex-col justify-center items-center h-full sm:h-96'>
                <h1 className='text-3xl'>{character.name.toUpperCase()}</h1>
                
                <div className='flex flex-col overflow-y-auto max-h-96 flex-1 px-2 border-1 border-white space-y-3 paragrafo'>
                    {character.history.map((paragrafo, i) => (
                    <p key={i} className='text text-left mt-2'>{paragrafo}</p>
                ))}
                </div>
              </div>
            </div>
          )}
          </div>
          
        </div>
        
      </div>
  )
}

export default ModalHistory