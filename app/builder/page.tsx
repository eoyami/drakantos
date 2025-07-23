'use client'
import React from 'react'
import { characters } from '../characters'
import { useState } from 'react';
import artefato from '@/public/artefato.png'
import trofeu from '@/public/trofeu.png'

const page = () => {
    type TrophysAndArtefact = {
        id: number,
        name: string,
        img: string,
        type: string
    }
    const [character, setCharacter] = useState(characters[0]); // Default to the first character
    const [activeTab, setActiveTab] = useState(1)
    const [skillActive, setSkillActive] = useState(1)

    const [artefatos, setArtefatos] = useState<TrophysAndArtefact[]>([])
    const [trofeus, setTrofeus] = useState<TrophysAndArtefact[]>([])
    const [selectArtefatoId, setSelectArtefatoId] = useState<TrophysAndArtefact[]>([])
    const [selectTrofeuId, setSelectTrofeuId] = useState<TrophysAndArtefact[]>([])

    const tabs = [
        {   id: 1,
            name: "Troféus",
            content: [
                {
                    id: 1,
                    name: "Troféu maneiro",
                    img: trofeu.src,
                    type: "trofeu"
                },
                {
                    id: 2,
                    name: "Troféu Demais",
                    img: trofeu.src,
                    type: "trofeu"
                },
                {
                    id: 3,
                    name: "Troféu Dêloco",
                    img: trofeu.src,
                    type: "trofeu"
                }
            ]
        },
        {   
            id: 2,
            name: "Artefatos",
            content: [
                {   
                    id: 1,
                    name: "Artefato maneiro",
                    img: artefato.src,
                    type: "artefato"
                },
                {   
                    id: 2,
                    name: "Artefato Bolado",
                    img: artefato.src,
                    type: "artefato"
                },
                {   
                    id: 3,
                    name: "Artefato do Flamengo",
                    img: artefato.src,
                    type: "artefato"
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

    const handleAddArtefato = (artefato: TrophysAndArtefact) => {
        const isSelected = selectArtefatoId.some(item => item.id === artefato.id)

        if(isSelected){
            setSelectArtefatoId(prev => prev.filter(item => item.id !== artefato.id))
            setArtefatos(prev => prev.filter(item => item.id !== artefato.id))
            return
        }

        if(artefatos.length >= 2){
            return
        }

        const newArtifact = {   
                id: artefato.id,
                name: artefato.name, 
                img: artefato.img,
                type: artefato.type
            }

        setSelectArtefatoId(prev => [
            ...prev, newArtifact
        ])

        setArtefatos(prev => [
            ...prev, newArtifact
        ])
    }


    const handleRemoveArtefato = (idToRemove: number) => {
        setArtefatos(prev => prev.filter(artefato => artefato.id !== idToRemove));
    }

    const handleRemoveTrofeu = (idToRemove: number) => {
        setTrofeus(prev => prev.filter(artefato => artefato.id !== idToRemove));
    }

    const handleAddTrofeu = (trofeu: TrophysAndArtefact) => {
        const isSelected = selectTrofeuId.some(select => select.id === trofeu.id)
        
        if(isSelected){
            setTrofeus(prev => prev.filter(item => item.id !== trofeu.id))
            setSelectTrofeuId(prev => prev.filter(item => item.id !== trofeu.id))
            return
        }
        if(trofeus.length >= 2){
            return
        }

        const newTrofeu = {   
                id: trofeu.id,
                name: trofeu.name, 
                img: trofeu.img,
                type: trofeu.type
            }

        setSelectTrofeuId(prev => [
            ...prev, newTrofeu
        ])

        setTrofeus(prev => [
            ...prev, newTrofeu
        ])
    }

    const isItemSelected = (type: string, id: number) => {
        const list = type === "artefato" ? artefatos : trofeus;
        return list.some(item => item.id === id);
    }
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
                        <div id='character' className='flex justify-center items-center gap-2'>
                    <div id='trofeus' className='flex flex-col justify-center items-center h-full gap-5'>
                        <div>
                            <h3>Troféu 1</h3>
                            {trofeus.slice(0, 1).map(trofeu => (
                                <div key={trofeu.id} className='w-14 h-14' onClick={() => {handleRemoveTrofeu(trofeu.id)}}>
                                    <img src={`${trofeu ? trofeu.img : ''}`} alt="" />
                                </div>
                            ))}
                        </div>
                        <div>
                            <h3>Troféu 2</h3>
                            {trofeus.slice(1, 2).map(trofeu => (
                                <div key={trofeu.id} className='w-14 h-14' onClick={() => {handleRemoveTrofeu(trofeu.id)}}>
                                    <img src={`${trofeu ? trofeu.img : ''}`} alt="" />
                                </div>
                            ))}
                        </div>
                    </div>
                        <div>
                            <div className='mb-5'>
                                <label htmlFor="character">Escolha seu personagem:</label>
                                <select onChange={handleCharacterChange} name="character" id="character">
                                    {characters.map((char, index) => (
                                        <option key={index} value={char.name}>{char.name}</option>
                                    ))}
                                </select>
                            </div>
                            <h2 className='text-2xl text-center'>{character.name}</h2>
                        <div className='flex flex-col items-center h-full md:w-96 w-full'>
                            <img src={character.bigImg} alt={character.name} className=" rounded-full" />
                        </div>
                        </div>
                        <div id='artefatos' className='flex flex-col justify-center items-center h-full gap-5'>
                        <div>
                            <h3>Artefato 1</h3>
                            {artefatos.slice(0, 1).map(artefato => (
                                <div key={artefato.id} className='w-14 h-14' onClick={() => {handleRemoveArtefato(artefato.id)}}>
                                    <img src={`${artefatos ? artefato.img : ''}`} alt="" />
                                </div>
                            ))}
                        </div>
                        <div>
                            <h3>Artefato 2</h3>
                            {artefatos.slice(1, 2).map(artefato => (
                                <div key={artefato.id} className='w-14 h-14' onClick={() => {handleRemoveArtefato(artefato.id)}}>
                                    <img src={`${artefatos ? artefato.img : ''}`} alt="" />
                                </div>
                            ))}
                        </div>
                    </div>
                    </div>
                    </div>
                    <div id='skills' className='w-full'>
                        <div className='flex justify-center items-center'>
                            <h2 className='text-2xl'>Skills</h2>
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
                                <div>
                                    <h2 className='text-center text-2xl'>Orbes disponíveis:</h2>
                                    {skill.orbes.map(orbe => (
                                            <div key={orbe.id} className='w-max p-3 hover:bg-gray-500/30'>
                                                <img src={orbe.img} alt=""/>
                                            </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                    </div>
                </div>
              <div id='miscellaneous' className='flex flex-col gap-2 w-full bg-gray-500/30'>
                    <div className='flex justify-between items-center tabs text-center'>
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
                                    <div key={tab.id} className='flex flex-col w-full p-3'>
                                        <div className='flex w-full border-1 border-gray-500'>
                                            <input type="text" className='w-full p-3 outline-none text-xl' placeholder={`Pesquise aqui seus ${activeTab === tab.id ? tab.name : ''}`} />
                                        </div>
                                        <div className='flex'>
                                            {tab.content.map((item, idx) => (
                                            <div key={idx} className={`flex flex-col items-center p-2 hover:bg-gray-500/30 hover:cursor-pointer ${isItemSelected(item.type, item.id) ? `border-1 border-red-500` : ''}`} onClick={() => { item.type === "trofeu" ? handleAddTrofeu(item) : handleAddArtefato(item); }}>
                                                <img src={item.img} alt={item.name} className="w-24 h-24 mb-2" />
                                            </div>
                                        ))}
                                        </div>
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