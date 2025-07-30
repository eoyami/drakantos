'use client'
import { characters } from '../../characters'
import { useState } from 'react';
import { DndContext, DragEndEvent, useSensors, useSensor, TouchSensor, MouseSensor } from '@dnd-kit/core';
import type { CharacterProps } from '../../characters';
import Droppable from './Droppable';
import Draggable from './Draggable';
import { SortableContext, arrayMove } from '@dnd-kit/sortable';
import { toPng } from 'html-to-image';
import { useRef } from 'react';


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

export default function TierlistClient () {

    const [columnNumber, setColumnNumber] = useState<number>(1)
    const [tierState, setTierState] = useState<TierState>({
        bench: characters.map(({skills, description, type, bigImg, ...rest }) => rest),
        containers: [
            { id: 1, title: "S", color: "#FF7F7F", chars: [] },
            { id: 2, title: "A", color: "#FFBF7F", chars: [] },
            { id: 3, title: "B", color: "#FFDF7F", chars: [] },
            { id: 4, title: "C", color: "#FFFF7F", chars: [] },
            { id: 5, title: "D", color: "#BFFF7F", chars: [] }
        ],
    });

const handleDragEnd = (event: DragEndEvent) => {
  const { active, over } = event;
  if (!over) return;

  const activeId = active.id.toString();
  const overId = over.id.toString();

  setTierState((prev) => {
    const containersCopy = prev.containers.map(c => ({ ...c, chars: [...c.chars] }));
    const findContainer = (id: string) => {
      if (id === "bench") return "bench";
      const c = containersCopy.find(cont => `container-${cont.id}` === id);
      return c ? c : null;
    };
    const sourceContainer = findContainer(
      containersCopy.find(c => c.chars.some(char => char.id.toString() === activeId))
        ? `container-${containersCopy.find(c => c.chars.some(char => char.id.toString() === activeId))!.id}`
        : (prev.bench.some(char => char.id.toString() === activeId) ? "bench" : "")
    );
    const destinationContainer = findContainer(overId);
    if (!destinationContainer) return prev;
    if (sourceContainer === destinationContainer) {
      if (sourceContainer === "bench") {
        const oldIndex = prev.bench.findIndex(c => c.id.toString() === activeId);
        const newIndex = prev.bench.findIndex(c => c.id.toString() === overId);
        return {
          ...prev,
          bench: arrayMove(prev.bench, oldIndex, newIndex)
        };
      } else {
        const cont = destinationContainer as Container;
        const oldIndex = cont.chars.findIndex(c => c.id.toString() === activeId);
        const newIndex = cont.chars.findIndex(c => c.id.toString() === overId);
        cont.chars = arrayMove(cont.chars, oldIndex, newIndex);
        return { ...prev, containers: containersCopy };
      }
    }
    let movedChar: CharacterTier | undefined;
    if (sourceContainer === "bench") {
      const idx = prev.bench.findIndex(c => c.id.toString() === activeId);
      movedChar = prev.bench[idx];
    } else if (sourceContainer) {
      const cont = sourceContainer as Container;
      const idx = cont.chars.findIndex(c => c.id.toString() === activeId);
      [movedChar] = cont.chars.splice(idx, 1);
    }
    if (!movedChar) return prev;
    if (destinationContainer === "bench") {
      return {
        ...prev,
        bench: [...prev.bench.filter(c => c.id.toString() !== activeId), movedChar],
        containers: containersCopy
      };
    } else {
      (destinationContainer as Container).chars.push(movedChar);
      return {
        ...prev,
        bench: prev.bench.filter(c => c.id.toString() !== activeId),
        containers: containersCopy
      };
    }
  });
};
    const downloadRef = useRef<HTMLDivElement>(null)
    const handleDownload = async () => {
        if(!downloadRef.current) return
        const dataUrl = await toPng(downloadRef.current)
        const link = document.createElement("a")
        link.download = "tierlist_drakantos.png"
        link.href = dataUrl
        link.click()
    }

    const handleAddTier = () => {
      if(columnNumber >= 5) return
      setColumnNumber((prev) => (prev + 1))
    }

    const handleRemoveTier = () => {
      if(columnNumber <= 1) return
      setColumnNumber((prev) => (prev - 1))
    }


    //SENSORS

    const touchSensor = useSensor(TouchSensor, {
      activationConstraint: {
        delay: 250,
        tolerance: 5
      }
    })

    const mouseSensor = useSensor(MouseSensor, {
      activationConstraint: {
        delay: 0,
        tolerance: 5
      }
    })

    const sensors = useSensors(touchSensor, mouseSensor)



  return (
          <div className="flex flex-col justify-center items-center w-full min-h-screen" >
            <div className="w-full min-h-screen bg-[url('/background_coliseu.png')] bg-cover bg-fixed md:bg-no-repeat sm:bg-fixed">
            <div className="flex flex-col items-center w-full p-2">
              <div>
                <h1 id="frase" className="text-center text-white text-3xl text-shadow-md lg:mt-[5rem] mt-[2rem]">WIP - TIERLIST</h1>
              </div>
              <div className="flex flex-col sm:flex-row mt-4 text-white w-full gap-2 bg-black/65 min-h-screen justify-start sm:justify-center">
                <DndContext onDragEnd={handleDragEnd} sensors={sensors}>
                    <div className='flex flex-col justify-between p-2 md:px-10 md:w-full py-3 justify-start items-start gap-2'>
                            <div className='flex flex-col justify-center w-full' ref={downloadRef}>
                                {tierState.containers.slice(0,columnNumber).map((container) => (
                                    <SortableContext key={container.id} items={container.chars.map(c => c.id.toString())}>
                                        <Droppable id={`container-${container.id}`} title={container.title} color={container.color}>
                                        {container.chars.map((character) => (
                                            <Draggable
                                            key={character.id}
                                            id={character.id.toString()}
                                            src={character.smallImg}
                                            alt={character.alt}
                                            />
                                        ))}
                                        </Droppable>
                                    </SortableContext>
                                    ))}
                        </div>
                        <div className='flex flex-col gap-2 w-full justify-center items-center'>
                          <div className='flex'>
                            {columnNumber < 5 ? (
                              <button className='bg-gray-700 p-3 border-1 border-white rounded-lg hover:bg-gray-500 hover:cursor-pointer' onClick={handleAddTier}>Adicionar coluna</button>
                            ) : null}
                            {columnNumber > 1 ? (
                              <button className='bg-gray-700 p-3 border-1 border-white rounded-lg hover:bg-gray-500 hover:cursor-pointer' onClick={handleRemoveTier}>Remover coluna</button>
                            ) : null}
                          </div>
                            <div className='flex'>
                              <button className='bg-gray-700 p-3 border-1 border-white rounded-lg hover:bg-gray-500 hover:cursor-pointer' onClick={handleDownload}>Baixar Tierlist</button>
                            </div>
                        </div>
                    </div>
                    <div id='miscellaneous' className='flex flex-col gap-2 w-full bg-gray-500/30'>
                            <SortableContext items={tierState.bench.map(c => c.id.toString())}>
                                <Droppable id="bench">
                                    {tierState.bench.map((character) => (
                                    <Draggable
                                        key={character.id}
                                        id={character.id.toString()}
                                        src={character.smallImg}
                                        alt={character.alt}
                                    />
                                    ))}
                                </Droppable>
                            </SortableContext>
                    </div>
                </DndContext>
              </div>
              </div>
            </div>
          </div>
  )
}