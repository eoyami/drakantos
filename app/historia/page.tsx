import React from 'react'
import Image from 'next/image'
import mundoAberto from '../../public/mundo-aberto.png'
import mundoDrakantos from '../../public/mundo-drakantos.png'
import matchmaking from '../../public/matchmaking.png'
import Link from 'next/link'

const page = () => {
  return (
          <div className="flex flex-col justify-center items-center w-full min-h-screen" >
            <div className="w-full min-h-screen bg-[url('/background_coliseu.png')] bg-cover bg-fixed md:bg-no-repeat sm:bg-fixed">
            <div className="flex flex-col items-center w-full p-2">
              <div>
                <h1 id="frase" className="text-center text-white text-3xl text-shadow-md lg:mt-[5rem] mt-[2rem]">WIP - História</h1>
              </div>
              <div className="flex mt-4 text-white w-full gap-2">
              <div className='flex flex-col p-5 md:px-10 bg-black/65 w-full md:w-[80%] py-3'>
                <div className='paragrafo'>
                  <div id='sobre'>
                    <div className='title'>
                      <h3 className='text-2xl'>Protótipo - Título</h3>
                      <hr />
                      </div>
                  </div>
                  <div className='text'>
                    <p>Protótipo - História</p>
                  </div>
                </div>
                {/* FIM DO CONTEÚDO */}
              </div>
              <div className='relative flex indice'>
                <div className='hidden md:flex flex-col h-max bg-[#242424]/50 p-3 fixed w-full'>
                    <h3 className='text-2xl'>Índice</h3>
                    <hr className='mb-2' />
                  <ul>
                    <li><Link href={'#sobre'} className='hover:text-gray-500'>Personagens Jogáveis</Link></li>
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