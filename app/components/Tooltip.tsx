"use client"

import React, {useState} from 'react'

type TooltipProps = {
    label: string,
    children: React.ReactNode
}

const Tooltip = ({label, children}: TooltipProps) => {
    const [isVisible, setIsVisible] = useState(false)
  return (
    <div onMouseOver={() => {setIsVisible(true)}} onMouseOut={() => {setIsVisible(false)}}>
        {children}
        {isVisible && (
            <div className='absolute tooltip -top-10 -left-3 bg-black/30 p-2 rounded'>
            <p>{label}</p>
        </div>
        )}
        
    </div>
  )
}

export default Tooltip