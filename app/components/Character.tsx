import React from 'react'
import Image from 'next/image'


type CharacterProps = {
    name: string,
    src: string,
    alt: string,
}
const Character = ({name, src, alt}: CharacterProps) => {
  return (
    <div className="flex flex-col justify-center items-center h-30 w-30 bg-black/30 rounded p-2 hover:bg-white/30 transition duration-300 ease-in-out">
        <div className='flex flex-col justify-center items-center h-full'>
        <Image src={src} width={55} height={70} priority alt={alt}/>
        <div className="flex flex-col justify-end pt-2 h-full">
            <h3>{name}</h3>
        </div>
        </div>
    </div>
  )
}

export default Character