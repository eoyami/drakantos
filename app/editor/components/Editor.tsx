"use client"

import React from 'react'
import { useEffect } from 'react';
import 'quill/dist/quill.snow.css';
export default function Editor () {
  const [value , setValue] = React.useState('');
  useEffect(() => {
    const options = {
      modules: {
        toolbar: true,
      },
      placeholder: 'Compose an epic...',
      theme: 'snow',
    };

    const editorElement = document.getElementById('editor');
    if (editorElement) {
      import('quill').then((QuillModule) => {
        const Quill = QuillModule.default;
        new Quill(editorElement, options);
      });
    }
  }, []);

  return (
    <div id='editor' className='container w-full h-full'></div>
  );
};