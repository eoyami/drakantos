'use client'
import React from 'react'
import { characters } from '../characters'
import { useState } from 'react';
import artefato from '@/public/artefato.png'
import trofeu from '@/public/trofeu.png'
import orbe from '@/public/orbe.png'

const page = () => {
    const [character, setCharacter] = useState(characters[0]); // Default to the first character
    const [activeTab, setActiveTab] = useState(1)
    const [skillActive, setSkillActive] = useState(1)

    const tabs = [
        {   id: 1,
            name: "Troféus",
            content: [
                {
                    name: "Troféu maneiro",
                    img: trofeu.src
                }
            ]
        },
        {   
            id: 2,
            name: "Artefatos",
            content: [
                {
                    name: "Artefato maneiro",
                    img: artefato.src
                }
            ]
        },
        {
            id: 3,
            name: "Orbes",
            content: [
                {
                    name: "Orbe do Syleumamou",
                    img: orbe.src
                }
            ]
        },
    ]
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
              <div className="flex flex-col sm:flex-row mt-4 text-white w-full gap-2 bg-black/65 min-h-screen justify-start sm:justify-center">
                <div className='flex flex-col justify-between p-5 md:px-10 md:w-full py-3 justify-start items-start gap-2'>
                    <div className='flex justify-center w-full'>
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
                    <div className='flex justify-between w-full tabs text-center'>
                            {character.skills.map(skill => (
                            <div key={skill.id} onClick={() => {setSkillActive(skill.id)}} className={`p-5 w-full hover:cursor-pointer ${skillActive  === skill.id ? `bg-gray-500/30` : `hover:bg-gray-500/30`}`}>
                                <h2 className='tab text-2xl'>{skill.id}</h2>
                            </div>
                        ))}
                    </div>
                    <div>
                        {character.skills.filter(skill => skill.id === skillActive).map(skill => (
                            <div key={skill.id}>
                                {skill.name}
                            </div>
                        ))}
                    </div>
                </div>
              <div id='miscellaneous' className='flex flex-col gap-2 w-full bg-gray-500/30'>
                    <div className='flex justify-between items-center tabs text-center'>
                        {/* <div id='trofeu' className={`p-5 w-full hover:cursor-pointer ${activeTab ? 'bg-gray-500/30' : ''}`} onClick={() => {setActiveTab(!activeTab)}}>
                            <h2 className='tab text-2xl'>Troféus</h2>
                        </div>
                        <div id='artefato' className={`p-5 w-full hover:cursor-pointer ${activeTab ? 'bg-gray-500/30' : ''}`} onClick={() => {setActiveTab(!activeTab)}}>
                            <h2 className='tab text-2xl'>Artefatos</h2>
                        </div>
                        <div id='orbe' className='p-5 hover:bg-gray-500/30 w-full hover:cursor-pointer'>
                            <h2 className='tab text-2xl'>Orbes</h2>
                        </div> */}
                        {tabs.map((tab) => (
                            <div key={tab.id} className={`p-5 w-full hover:cursor-pointer ${activeTab === tab.id ? 'bg-gray-500/30' : ''}`} onClick={() => {setActiveTab(tab.id)}}>
                                <h2 className='tab text-2xl'>{tab.name}</h2>
                            </div>
                        ))}
                    </div>
                    <div className='flex justify-start'>
                        {
                            tabs.filter(tab => tab.id === activeTab)
                                .map(tab =>
                                    <div key={tab.id}>
                                        {tab.content.map((item, idx) => (
                                            <div key={idx} className="flex flex-col items-center p-2 hover:bg-gray-500/30">
                                                <img src={item.img} alt={item.name} className="w-24 h-24 mb-2" />
                                                <span className="text-lg">{item.name}</span>
                                            </div>
                                        ))}
                                    </div>
                                )
                        }
                    </div>
                </div>
              </div>
              </div>
            </div>
          </div>
  )
}

export default page