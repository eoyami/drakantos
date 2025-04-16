import React from 'react'
import Image from 'next/image'


type ModalProps = {
    isOpen: boolean,
    onClose: () => void,
    character: {
        id: number,
        name: string,
        description: string,
        type: string,
        image: string,
    } | null
}

const Modal = ({isOpen, onClose, character}: ModalProps) => {
    if (!isOpen) return null
  return (
    <div id="modal" className="fixed top-0 left-0 w-full h-screen z-10">
        <div className="flex flex-col justify-center items-center bg-black/30 h-full">
          <div className="relative flex justify-center items-center h-96 w-96 bg-black text-white">
          <button className='absolute top-0 right-0 text-white' onClick={() => {onClose()}}>X</button>
          {character && (
            <>
            <h1>{character.name}</h1>
            <h1>{character.description}</h1>
            <h1>{character.type}</h1>
            <Image src={character.image} width={200} height={100} alt=''/>
            </>
          )}
          </div>
          
        </div>
        
      </div>
  )
}

export default Modal