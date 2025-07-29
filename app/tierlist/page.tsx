'use client'
import { characters } from '../characters'
import { useState } from 'react';
import { DndContext, DragEndEvent } from '@dnd-kit/core';
import type { CharacterProps } from '../characters';
import Droppable from './components/Droppable';
import Draggable from './components/Draggable';


type CharacterTier = Omit<CharacterProps, 'skills' | 'description' | 'type' | 'bigImg'>

type Container = {
    id: number
    title: string
    color: string
    chars: CharacterTier[]
}

type TierState = {
  bench: CharacterTier[];
  containers: {
    id: number;
    title: string;
    color: string;
    chars: CharacterTier[];
  }[];
};

const page = () => {

    const [tierState, setTierState] = useState<TierState>({
        bench: characters.map(({skills, description, type, bigImg, ...rest }) => rest),
        containers: [
            { id: 1, title: "SSS", color: "#e83336", chars: [] },
            { id: 2, title: "SS", color: "#eb6769", chars: [] },
        ],
    });

const handleDragEnd = (event: DragEndEvent) => {
  const { active, over } = event;
  if (!over) return;

  const activeId = active.id.toString();
  const overId = over.id.toString();

  setTierState((prev) => {
    // Cópia profunda dos containers para evitar mutação
    const containersCopy = prev.containers.map(c => ({ ...c, chars: [...c.chars] }));
    let movedChar: CharacterTier | undefined;

    // 1. Procurar origem: bench ou container
    const sourceContainer = containersCopy.find(c =>
      c.chars.some(char => char.id.toString() === activeId)
    );

    if (sourceContainer) {
      // Remove do container origem
      const idx = sourceContainer.chars.findIndex(char => char.id.toString() === activeId);
      [movedChar] = sourceContainer.chars.splice(idx, 1);
    } else {
      // Remove do bench
      const idx = prev.bench.findIndex(char => char.id.toString() === activeId);
      if (idx !== -1) {
        movedChar = prev.bench[idx];
      }
    }

    if (!movedChar) {
      // Não achou personagem para mover
      return prev;
    }

    // 2. Destino bench
    if (overId === "bench") {
      return {
        bench: [...prev.bench.filter(char => char.id.toString() !== activeId), movedChar],
        containers: containersCopy,
      };
    }

    // 3. Destino container
    const destContainer = containersCopy.find(c => `container-${c.id}` === overId);
    if (!destContainer) return prev;

    destContainer.chars.push(movedChar);

    // Se veio do bench, remove do bench
    const newBench = prev.bench.filter(char => char.id.toString() !== activeId);

    return {
      bench: newBench,
      containers: containersCopy,
    };
  });
};

    const handleAddColumn = () => {
        alert('Isso nem funciona (por enquanto), assim como os servidores atuais de Drakantos')
    }



  return (
          <div className="flex flex-col justify-center items-center w-full min-h-screen" >
            <div className="w-full min-h-screen bg-[url('/background_coliseu.png')] bg-cover bg-fixed md:bg-no-repeat sm:bg-fixed">
            <div className="flex flex-col items-center w-full p-2">
              <div>
                <h1 id="frase" className="text-center text-white text-3xl text-shadow-md lg:mt-[5rem] mt-[2rem]">WIP - TIERLIST</h1>
              </div>
              <div className="flex flex-col sm:flex-row mt-4 text-white w-full gap-2 bg-black/65 min-h-screen justify-start sm:justify-center">
                <DndContext onDragEnd={handleDragEnd}>
                    <div className='flex flex-col justify-between p-2 md:px-10 md:w-full py-3 justify-start items-start gap-2'>
                        <div className='flex flex-col justify-center w-full'>
                                {tierState.containers.map((container) => (
                                    <Droppable key={container.id} id={`container-${container.id}`} title={container.title} color={container.color}>
                                        {container.chars.map((character) => (
                                        <Draggable key={character.id} id={character.id.toString()} src={character.smallImg} alt={character.alt}/>
                                        ))}    
                                    </Droppable>
                                ))}
                        </div>
                        <div className='flex w-full justify-center items-center '>
                            <button className='bg-gray-700 p-3 border-1 border-white rounded-lg hover:bg-gray-500 hover:cursor-pointer' onClick={handleAddColumn}>Adicione mais colunas</button>
                        </div>
                    </div>
                    <div id='miscellaneous' className='flex flex-col gap-2 w-full bg-gray-500/30'>
                            <Droppable id='bench'>
                                {tierState.bench.map((character) => (
                                    <Draggable key={character.id} id={character.id.toString()} src={character.smallImg} alt={character.alt}/>
                                ))}
                            </Droppable>
                    </div>
                </DndContext>
              </div>
              </div>
            </div>
          </div>
  )
}

export default page