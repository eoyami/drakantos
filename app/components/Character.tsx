
"use client"
import React, { useEffect } from 'react'
import Image from 'next/image'
import { FaShieldAlt } from "react-icons/fa";
import { FaQuestion } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { GiCrossedSwords } from "react-icons/gi";

type CharacterProps = {
    name: string,
    src: string,
    alt: string,
    type?: "support" | "tank" | "dps" | "none",
}
const Character = ({name, src, alt, type}: CharacterProps) => {
  const tooltipRef = React.useRef<HTMLDivElement>(null)

  const handleMouseOver = () => {
    if (tooltipRef.current) {
      tooltipRef.current.classList.remove("hidden")
      tooltipRef.current.classList.add("absolute")
    }
  }

  const handlerMouseOut = () => {
    if (tooltipRef.current) {
      tooltipRef.current.classList.remove("absolute")
      tooltipRef.current.classList.add("hidden")
    }
  }
  // useEffect(() => {
  //   const classe = document.querySelector(".classe")
  //   const tooltip = document.querySelector(".tooltip")
  //   classe?.addEventListener("mouseover", () => {
  //     tooltip?.classList.remove("hidden")
  //     tooltip?.classList.add("absolute")
  //   })
  //   classe?.addEventListener("mouseout", () => {
  //     tooltip?.classList.remove("absolute")
  //     tooltip?.classList.add("hidden")
  //   })
  // })

  return (
    <div className="flex flex-col justify-center items-center h-40 w-40 bg-black/30 rounded p-2 hover:bg-white/30 transition ease-in-out">
        <div className='flex flex-col justify-center items-center h-full max-h-24'>
        <Image src={src} width={55} height={70} priority alt={alt}/>
        <div className='flex flex-col items-center justify-center h-full'>
          <div className='relative'>
            {type === "tank" && (
              <>
              <FaShieldAlt onMouseOver={handleMouseOver} onMouseOut={handlerMouseOut} className="text-white text-2xl"/>
              <div ref={tooltipRef} className='tooltip hidden -top-10 -left-3 bg-black/30 p-2 rounded'>
                <p>Tank</p>
              </div>
              </>
              )}
          </div>
          <div className='relative'>
            {type === "support" && (
              <>
              <FaPlus onMouseOver={handleMouseOver} onMouseOut={handlerMouseOut} className="text-white text-2xl"/>
              <div ref={tooltipRef} className='tooltip hidden -top-10 -left-3 bg-black/30 p-2 rounded'>
                <p>Support</p>
              </div>
              </>
            )}
          </div>
          <div className='relative'>
            {type === "dps" && (
              <>
              <GiCrossedSwords onMouseOver={handleMouseOver} onMouseOut={handlerMouseOut} className="text-white text-2xl"/>
              <div ref={tooltipRef} className='tooltip hidden -top-10 -left-3 bg-black/30 p-2 rounded'>
                <p>DPS</p>
              </div>
              </>
            )}
          </div>
        </div>
        <div className="flex flex-col justify-start pt-2 h-full">
            <h3>{name.toUpperCase()}</h3>
        </div>
        </div>
    </div>
  )
}

export default Character