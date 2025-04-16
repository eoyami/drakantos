"use client"

import { GoChevronUp } from "react-icons/go";
import Character from "./components/Character";
import Modal from "./components/Modal";
import { useState } from "react";
import {characters} from "./characters"

export interface Character {
  id: number,
  name: string,
  description: string,
  type: string,
  image: string,
}

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(null);

  const handleCloseModal = () => {
    setIsModalOpen(false);
  }

  const handleOpenModal = () => {
    setIsModalOpen(true);
  }

  return (
    <main className="bg-black pb-4">
      <Modal isOpen={isModalOpen} character={selectedCharacter} onClose={handleCloseModal} />
      <div className="flex flex-col justify-center items-center w-full bg-[url('/background_coliseu.png')] bg-cover bg-center bg-no-repeat" >
        <div className="flex flex-col h-screen justify-center items-center bg-linear-to-t from-black to-transparente w-full p-2">
          <h1 className="text-center text-white text-2xl text-shadow-md">Um MMORPG pixel art brasileiro com heróis únicos e ação em tempo real</h1>
          <div className="flex justify-center items-center mt-4 bg-black/30 p-4 rounded">
            <video muted loop width={700}>
              <source src="/background.mp4" />
            </video>
            {/* <div>
              <iframe className="" width={640} height={360} src="https://www.youtube.com/embed/CCXVQxJkBtQ?si=8zw2lnf7nDYetGJE" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
              </div> */}
          </div>
          <div className="flex flex-col justify-end items-center h-56">
            <GoChevronUp className="text-white text-3xl animate-bounce" />
            <p className="text-white text-xl">Arraste para cima</p>
          </div>
        </div>
      </div>
      <div className="container mx-auto bg-[#171717] p-4 rounded">
        <div className="flex flex-col justify-center items-center mb-4 text-white">
          <h2 className="text-2xl">Conheça os Heróis</h2>
        </div>
        <div className="flex justify-center items-center">
          <div className="flex justify-center items-center gap-3 text-white flex-wrap">
                {characters.map((character) => (
                    <Character key={character.id} id={character.id} src={character.src} name={character.name} alt={character.alt} type={character.type} OpenModal={handleOpenModal} />
                ))}
          </div>
        </div>
        
      </div>
    </main>
  );
}
