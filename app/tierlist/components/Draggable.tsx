'use client'
import React from 'react'
import { useDraggable } from '@dnd-kit/core'
import { CSS } from '@dnd-kit/utilities'

type Props = {
    id: string;
    key: number;
    src: string;
    alt: string;
}

const Draggable = (props: Props) => {
    const {attributes, listeners, setNodeRef, transform} = useDraggable({
        id: props.id
    })

    const style = {
        transform: CSS.Translate.toString(transform),
        cursor: 'grab'
    }
  return (
    <div id={props.id} ref={setNodeRef} style={style} {...attributes} {...listeners} className='max-h-32 p-2'>
        <img src={props.src} width={80} alt={props.alt} />
    </div>
  )
}

export default Draggable