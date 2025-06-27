import React from 'react'

const page = () => {
  return (
        <div className="flex flex-col justify-center items-center w-full bg-[url('/background_coliseu.png')] bg-cover bg-center bg-no-repeat" >
            <div className="flex flex-col items-center bg-linear-to-t from-black to-transparent w-full p-2">
                <div className="flex flex-col justify-center items-center w-full h-screen">
                    <h1 id="frase" className="text-center text-white text-xl lg:text-2xl text-shadow-md lg:mt-[10rem] mt-[2rem]">WIP - Galeria</h1>
                    <div className="flex justify-center items-center mt-4 bg-black/30 p-4">
                    </div>
                </div>
            </div>
        </div>
  )
}

export default page