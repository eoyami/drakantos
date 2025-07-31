'use client'
import React from 'react'
import Link from 'next/link'
import { useState } from 'react'
import { characters } from '../characters'
import Character from '../components/Character'
import ModalHistory from './components/ModalHistory'

type CharacterHistory = {
    name: string,
    history: string[],
    smallImg: string
}

const page = () => {

        const [isModalOpen, setIsModalOpen] = useState(false);
        const [selectedCharacter, setSelectedCharacter] = useState<CharacterHistory | null>(null);
      
        const handleCloseModal = () => {
          setIsModalOpen(false);
        }
      
        const handleOpenModal = (character: CharacterHistory) => {
            setSelectedCharacter({ ...character})
            setIsModalOpen(true);
          }

  return (
          <div className="flex flex-col justify-center items-center w-full min-h-screen" >
            <ModalHistory isOpen={isModalOpen} onClose={handleCloseModal} character={selectedCharacter}/>
            <div className="w-full min-h-screen bg-[url('/background_coliseu.png')] bg-cover bg-fixed md:bg-no-repeat sm:bg-fixed">
            <div className="flex flex-col items-center w-full p-2">
              <div>
                <h1 id="frase" className="text-center text-white text-3xl text-shadow-md lg:mt-[5rem] mt-[2rem]">WIP - História</h1>
              </div>
              <div className="flex mt-4 text-white w-full gap-0 sm:gap-2">
              <div className='flex flex-col p-2 md:px-5 bg-black/65 w-full md:w-[80%] py-3'>
                <div className='flex flex-col flex-wrap gap-2 paragrafo'>
                  <div id='jogaveis'>
                    <div className='title'>
                      <h3 className='text-2xl'>Personagens Jogáveis</h3>
                      <hr />
                      </div>
                  </div>
                  <div className='flex flex-wrap justify-center items-center gap-2'>
                    {characters.map(character => (
                  <Character key={character.id} name={character.name} smallImg={character.smallImg} alt={character.alt} onClick={() => {handleOpenModal(character)}}/>
                ))}
                  </div>
                </div>
                <div className='flex justify-end'>Contribuidores: Kazu</div>
              </div>
              <div className='relative flex indice'>
                <div className='hidden md:flex flex-col h-max bg-[#242424]/50 p-3 fixed w-full'>
                    <h3 className='text-2xl'>Índice</h3>
                    <hr className='mb-2' />
                  <ul>
                    <li><Link href={'#jogaveis'} className='hover:text-gray-500'>Personagens Jogáveis</Link></li>
                  </ul>
                </div>
              </div>
              </div>
              </div>
            </div>
          </div>
  )
}

export default page