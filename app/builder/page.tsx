'use client'
import React from 'react'
import { characters } from '../characters'
import { useState } from 'react';

const page = () => {
    const [character, setCharacter] = useState(characters[0]); // Default to the first character

    const handleCharacterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedCharacter = characters.find(char => char.name === event.target.value);
        if (selectedCharacter) {
            setCharacter(selectedCharacter);
        }
    };
  return (
          <div className="flex flex-col justify-center items-center w-full min-h-screen" >
            <div className=" w-full min-h-screen bg-[url('/background_coliseu.png')] bg-cover bg-no-repeat sm:bg-fixed">
            <div className="flex flex-col items-center w-full p-2">
              <div>
                <h1 id="frase" className="text-center text-white text-3xl text-shadow-md lg:mt-[5rem] mt-[2rem]">WIP - Builder</h1>
              </div>
              <div className="flex mt-4 text-white w-full gap-2 bg-black/65 min-h-screen justify-center">
                <div className='flex justify-between p-5 md:px-10 md:w-full py-3 justify-center items-start gap-2'>
                        <div id='character' className='flex flex-col justify-center items-center gap-2'>
                        <div>
                        <label htmlFor="character">Escolha seu personagem:</label>
                        <select onChange={handleCharacterChange} name="character" id="character">
                            {characters.map((char, index) => (
                                <option key={index} value={char.name}>{char.name}</option>
                            ))}
                        </select>
                    </div>
                        <h2 className='text-2xl'>{character.name}</h2>
                        <div className='flex flex-col items-center h-full md:w-96 w-full'>
                            <img src={character.bigImg} alt={character.name} className=" rounded-full" />
                        </div>
                    </div>
                </div>
              <div id='miscellaneous' className='flex flex-col gap-2 w-full bg-gray-500/30'>
                    <div className='flex justify-between items-center tabs text-center'>
                        <div className='p-5 hover:bg-gray-500/30 w-full hover:cursor-pointer'>
                            <h2 className='tab text-2xl'>Troféus</h2>
                        </div>
                        <div className='p-5 hover:bg-gray-500/30 w-full hover:cursor-pointer'>
                            <h2 className='tab text-2xl'>Artefatos</h2>
                        </div>
                        <div className='p-5 hover:bg-gray-500/30 w-full hover:cursor-pointer'>
                            <h2 className='tab text-2xl'>Orbes</h2>
                        </div>
                    </div>
                </div>
              </div>
              </div>
            </div>
          </div>
  )
}

export default page