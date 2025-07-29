'use client'
import React, { ChangeEvent, useEffect } from 'react'
import { characters } from '../characters'
import { useState } from 'react';
import artefato from '@/public/artefato.png'
import trofeu from '@/public/trofeu.png'
import type { Orbes } from '../characters';
import type { CharacterProps } from '../characters';
import { useRouter } from 'next/navigation';

const page = () => {
    const router = useRouter()
    type TrophysAndArtefact = {
        id: number,
        name: string,
        img: string,
        type: string
    }

    // type Build = {
    //     personagem: CharacterProps,
    //     orbesAtivos: Record<number, Orbes[]>,
    //     trofeusAtivos: Record<number, TrophysAndArtefact[]>,
    //     artefatosAtivos: Record<number, TrophysAndArtefact[]> 
    // }

    const [params, setParams] = useState<URLSearchParams | null>(null)
    const [activeTab, setActiveTab] = useState(1)
    const [skillActive, setSkillActive] = useState(1)
    const [artefatos, setArtefatos] = useState<TrophysAndArtefact[]>([])
    const [trofeus, setTrofeus] = useState<TrophysAndArtefact[]>([])
    const [orbeAtiva, setOrbeAtiva] = useState<Record<number, Orbes[]>>({})
    const [inputTrofeu, setInputTrofeu] = useState<string>('')
    const [inputArtefato, setInputArtefato] = useState<string>('') 
    // const [selectArtefatoId, setSelectArtefatoId] = useState<TrophysAndArtefact[]>([])
    // const [selectTrofeuId, setSelectTrofeuId] = useState<TrophysAndArtefact[]>([])
    // const [orbeSelected, setOrbeSelected] = useState<Record<number, Orbes[]>>({})
    const [character, setCharacter] = useState(characters[0]);

        useEffect(() => {
            //PERSONAGEM
        if(typeof window !== undefined){

            const searchParams = new URLSearchParams(window.location.search)
            setParams(searchParams)
            let personagemId = characters[0].id

            if(searchParams.has('character')){
                personagemId = Number(searchParams.get('character'))
                if(personagemId <= characters.length){
                    setCharacter(characters[personagemId - 1])
                } else {
                    setCharacter(characters[0])
                }
            }
            //ORBES
            for(const [key, value] of searchParams.entries()){
                const num = Number(value)
                if(key.startsWith('orbe')){
                    const skillId = Number(key.replace("orbe", ""))
                    const orbeId = Number(value)
                    const orbesDaSkill = character.skills[skillId]?.[0]?.orbes
                    const orbeEncontrada = orbesDaSkill?.find((o) => o.id === orbeId)
                    if (orbeEncontrada) {
                        orbeAtiva[skillId] = [orbeEncontrada]
                    }
                }
                if (key.startsWith("trofeu")) {
                    const trofeu = tabs.find(t => t.name === "Troféus")?.content.find(t => t.id === num)
                    if (trofeu) {
                        setTrofeus(prev => {
                            if(prev.some(t => t.id === trofeu.id)) return prev;
                            return [...prev, trofeu]
                        })
                    }
                    }

                    if (key.startsWith("artefato")) {
                    const artefato = tabs.find(t => t.name === "Artefatos")?.content.find(t => t.id === num)
                    if (artefato) {
                        setArtefatos(prev => [...prev, artefato])
                    }
                }
            }
            searchParams.set('character', personagemId.toString())
            router.push(`?${searchParams.toString()}`)
        }
    }, [])

    

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

    const handleAddCharacter = (character: CharacterProps) => {
            const currentParams = new URLSearchParams(window.location.search)
            const selecionado = currentParams.has("character")
            if(selecionado){
                currentParams.set("character", String(character.id))
                router.replace(`?${currentParams.toString()}`, {scroll: false})
            }
    }

    const handleAddArtefato = (artefato: TrophysAndArtefact) => {
        const isSelected = artefatos.some(item => item.id === artefato.id)
        const currentParams = new URLSearchParams(window.location.search)
        if(isSelected){
            

            for (const [key, value] of currentParams.entries()) {
                if (key.startsWith("artefato") && value === String(artefato.id)) {
                    currentParams.delete(key)
                }
            }
            router.replace(`?${currentParams.toString()}`, { scroll: false })
            // setSelectArtefatoId(prev => prev.filter(item => item.id !== artefato.id))
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
        currentParams.set(`artefato${artefatos.length}`, String(artefato.id))
        router.replace(`?${currentParams.toString()}`, {scroll: false})
        
        // setSelectArtefatoId(prev => [
        //     ...prev, newArtifact
        // ])

        setArtefatos(prev => [
            ...prev, newArtifact
        ])
    }


    // const handleRemoveArtefato = (idToRemove: number) => {
    //     setArtefatos(prev => prev.filter(artefato => artefato.id !== idToRemove));
    // }

    // const handleRemoveTrofeu = (idToRemove: number) => {
    //     setTrofeus(prev => prev.filter(artefato => artefato.id !== idToRemove));
    // }

    const handleAddTrofeu = (trofeu: TrophysAndArtefact) => {
        const isSelected = trofeus.some(select => select.id === trofeu.id)
        
        if(isSelected){
            setTrofeus(prev => prev.filter(item => item.id !== trofeu.id))
            // setSelectTrofeuId(prev => prev.filter(item => item.id !== trofeu.id))
            const currentParams = new URLSearchParams(window.location.search)
            if(currentParams.has(`trofeu${trofeus.length - 1}`)){
                currentParams.delete(`trofeu${trofeus.length - 1}`)
                router.replace(`?${currentParams.toString()}`, {scroll: false})
            }
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

        // setSelectTrofeuId(prev => [
        //     ...prev, newTrofeu
        // ])

        setTrofeus(prev => [
            ...prev, newTrofeu
        ])
        const currentParams = new URLSearchParams(window.location.search)
        currentParams.set(`trofeu${trofeus.length}`, String(trofeu.id))
        router.replace(`?${currentParams.toString()}`, {scroll: false})
        
    }

    const isItemSelected = (type: string, id: number) => {
        const list = type === "artefato" ? artefatos : trofeus;
        return list.some(item => item.id === id);
    }

    const handleAddOrbe = (skillId: number, orbe: Orbes) => {
        const totalOrbes = Object.values(orbeAtiva).reduce((acc, orbes) => {
            return acc + orbes.length
        }, 0)
        
        if(totalOrbes >= 6){
            return
        }
        const isOrbeSelected = Object.values(orbeAtiva).some((orbesArray)=> orbesArray.some(o => o.id === orbe.id))
        const currentParams = new URLSearchParams(window.location.search)

        if(isOrbeSelected){
            // setOrbeSelected(prev => {
            //     const novoRecord: Record<string, Orbes[]> = {}
            //     for(const [skillId, orbes] of Object.entries(prev)){
            //         novoRecord[skillId] = orbes.filter(o => o.id !== orbe.id)
            //     }
            //     return novoRecord
            // })
            
            setOrbeAtiva(prev => ({
                ...prev,
                [skillId]: [orbe]
            }))
            currentParams.delete(`orbe${skillId}`)
            router.replace(`?${currentParams.toString()}`, {scroll: false})
            handleRemoveOrbe(orbe)
            return
        }

        // setOrbeSelected(prev => {
        //     const currentOrbes = prev[skillId] || []
        //     const AlreadyExists = currentOrbes.some(o => o.id === orbe.id)
        //     if(AlreadyExists){
        //         return prev
        //     }

        //     return {
        //         ...prev, 
        //         [skillId]: [...currentOrbes, orbe]
        //     }
        // })

        setOrbeAtiva(prev => ({
            ...prev,
            [skillId]: [orbe]
        }))
        const orbeId = orbe.id
        if(orbeId){
            currentParams.set(`orbe${skillId}`, String(orbeId))
        }

        router.replace(`?${currentParams.toString()}`, {scroll: false})
    }

    const orbeIsSelected = (orbe: Orbes) => { 
        return Object.values(orbeAtiva).some((orbesArray)=> orbesArray.some(o => o.id === orbe.id))
    }

    const handleRemoveOrbe = (orbe: Orbes) => {
        setOrbeAtiva(prev => {
            const updated: Record<number, Orbes[]> = {}

            for(const [skillId, orbes] of Object.entries(prev)){
                const filtered = orbes.filter(o => o.id !== orbe.id)
                if(filtered.length > 0){
                    updated[Number(skillId)] = filtered
                }
            }
            return updated
        })
    }

    const gerarLink = () => {
        if(params){
            const url = window.location
            navigator.clipboard.writeText(String(url))
            alert("Link copiado com sucesso!")
        }
    }

    const handleChangeInputTrofeu = (e: ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        setInputTrofeu(e.target.value)
    }

    const handleChangeInputArtefato = (e: ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        setInputArtefato(e.target.value)
    }

  return (
          <div className="flex flex-col justify-center items-center w-full min-h-screen" >
            <div className="w-full min-h-screen bg-[url('/background_coliseu.png')] bg-cover bg-fixed md:bg-no-repeat sm:bg-fixed">
            <div className="flex flex-col items-center w-full p-2">
              <div>
                <h1 id="frase" className="text-center text-white text-3xl text-shadow-md lg:mt-[5rem] mt-[2rem]">WIP - Builder</h1>
              </div>
              <div className="flex flex-col sm:flex-row mt-4 text-white w-full gap-2 bg-black/65 min-h-screen justify-start sm:justify-center">
                <div className='flex flex-col justify-between p-2 md:px-10 md:w-full py-3 justify-start items-start gap-2'>
                    <div className='flex justify-center w-full'>
                        <div id='character' className='flex justify-center items-center gap-2'>
                    <div id='trofeus' className='flex flex-col justify-center items-center h-full gap-5'>
                        <div>
                            <h3 className='text-xl text-center'>T1</h3>
                            {trofeus.slice(0, 1).map(trofeu => (
                                <div key={trofeu.id} className='w-14 h-14'>
                                    <img src={`${trofeu ? trofeu.img : ''}`} alt="" />
                                </div>
                            ))}
                        </div>
                        <div>
                            <h3 className='text-xl text-center'>T2</h3>
                            {trofeus.slice(1, 2).map(trofeu => (
                                <div key={trofeu.id} className='w-14 h-14'>
                                    <img src={`${trofeu ? trofeu.img : ''}`} alt="" />
                                </div>
                            ))}
                        </div>
                    </div>
                        <div>
                            <div className='mb-5'>
                                <div className='text-center'>
                                    <label htmlFor="character">Escolha seu personagem:</label>
                                </div>
                                <select className='w-full text-center' onChange={handleCharacterChange} onClick={() => {handleAddCharacter(character)}} name="character" id="character" value={character.name}>
                                    {characters.map((char, index) => (
                                        <option key={index} value={char.name}>{char.name}</option>
                                    ))}
                                </select>
                            </div>
                            <h2 className='text-2xl text-center'>{character.name}</h2>
                        <div className='flex flex-col items-center min-h-full md:w-96 w-full'>
                            <img src={character.bigImg} alt={character.name}/>
                        </div>
                        </div>
                        <div id='artefatos' className='flex flex-col justify-center items-center h-full gap-5'>
                        <div>
                            <h3 className='text-xl text-center'>A1</h3>
                            {artefatos.slice(0, 1).map(artefato => (
                                <div key={artefato.id} className='w-14 h-14' >
                                    <img src={`${artefatos ? artefato.img : ''}`} alt="" />
                                </div>
                            ))}
                        </div>
                        <div>
                            <h3 className='text-xl text-center'>A2</h3>
                            {artefatos.slice(1, 2).map(artefato => (
                                <div key={artefato.id} className='w-14 h-14'>
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
                            {Object.entries(character.skills).map(([skillId, _]) => (
                                    <div key={skillId} onClick={() => {setSkillActive(Number(skillId))}} className={`p-5 w-full hover:gb-gray-500/30 hover:cursor-pointer ${skillActive === Number(skillId) ? `bg-gray-500/30` : ``}`}>
                                        <h2 className='tab text-2xl'>{skillId}</h2>
                                    </div>
                                    ))}
                    </div>
                    <div>
                        {character.skills[skillActive].filter(skill => skill.id === skillActive).map(skill => (
                            <div key={skill.id}>
                                {skill.name}
                                <div>
                                    <h2 className='text-center text-2xl'>Orbe ativa:</h2>
                                    {Object.entries(orbeAtiva).map(([skillId, skill]) => (
                                        Number(skillId) === skillActive ? (
                                            skill.map(orbe => (
                                            <div key={skillId} className='flex justify-center items-center'>
                                                <img src={orbe.img} alt={orbe.name} />
                                            </div>
                                        ))
                                        ): null
                                    ))  
                                    }
                                </div>
                                <div>
                                    <h2 className='text-center text-2xl'>Orbes disponíveis:</h2>
                                    <div className='flex'>
                                        {skill.orbes.map(orbe => (
                                            <div key={orbe.id} onClick={() => {handleAddOrbe(skill.id, orbe)}} className={`w-max p-3 hover:bg-gray-500/30 hover:cursor-pointer ${orbeIsSelected(orbe) ? `border-1 border-red-500` : ``}`}>
                                                <img src={orbe.img} alt=""/>
                                            </div>
                                    ))}
                                    </div>
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
                                            {tab.id === 1 ? ( 
                                                <input type="text" className='w-full p-3 outline-none text-xl' value={inputTrofeu} onChange={handleChangeInputTrofeu} placeholder={`Pesquise aqui seus troféus`} />
                                            ) : (
                                                <input type="text" className='w-full p-3 outline-none text-xl' value={inputArtefato} onChange={handleChangeInputArtefato} placeholder={`Pesquise aqui seus artefatos`} />
                                            )
                                            }
                                            
                                        </div>
                                        <div className='flex flex-wrap'>
                                            {tab.content.filter(item => {
                                                const currentInput = tab.id === 1 ? inputTrofeu : inputArtefato
                                                return (
                                                     currentInput === '' || item.name.toLowerCase().includes(currentInput.toLowerCase())
                                                )
                                            }
                                            ).map((item, idx) => (
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
              <button className='bg-gray-500/50 p-3 text-white mt-2 hover:cursor-pointer' onClick={gerarLink}>Copiar link</button>
              </div>
            </div>
          </div>
  )
}

export default page