'use client'

import React, { useRef,useEffect,useState } from 'react'
import '@toast-ui/editor/dist/toastui-editor.css';

import { Editor } from '@toast-ui/react-editor';
import { Button } from '@/components/ui/button';
import { Copy, IndentIncrease, Mic2, Pause, Play } from 'lucide-react';
import { Select,SelectItem } from '@/components/ui/select';

interface PROPS{
  aiOutput:string
}
const synth = window.speechSynthesis;

const speakthis=(text:string)=>{
  const regex = /[#?.,:;!@%^&*(){}[\]<>/~`+=|\\"]/g;
  const Ctext = text.replace(regex, '');
  const utterThis = new SpeechSynthesisUtterance(Ctext);
  utterThis.lang='en-IN'
  const voices=synth.getVoices()
  const voice=voices[1]
  utterThis.voice=voice
  utterThis.rate=1.5
  const increaseSpeed=()=>{
  utterThis.rate+=1
  }
  synth.cancel()
  synth.speak(utterThis);
  return utterThis
}
const pause=()=>{
    synth.pause()
}
const play=()=>{
  synth.resume()
}
const OutputSection = ({aiOutput}:PROPS) => {
    const editorRef:any=useRef();
    useEffect(()=>{
      const editorInstance=editorRef.current.getInstance();
      editorInstance.setMarkdown(aiOutput);

    },[aiOutput])
    const [copy,setcopy]=useState<String>('Copy')
  return (
    <div className='bg-white shadow-lg border dark:bg-slate-700 dark:text-white'>
    <div className='flex justify-between items-center p-5'>
        <h2 className='font-bold'>Your Results</h2>
        <div className='justify-between hidden md:flex'>
        <Button className='text-black dark:text-white bg-transparent border hover:bg-gray-200 dark:hover:bg-slate-900 mx-2' onClick={()=>{speakthis(aiOutput)}}><Mic2></Mic2></Button>
        <Button className='text-black dark:text-white bg-transparent border mx-2 hover:bg-gray-200 dark:hover:bg-slate-900' onClick={()=>{pause()}}><Pause /></Button>
        <Button className='text-black dark:text-white bg-transparent border mx-2 hover:bg-gray-200 dark:hover:bg-slate-900' onClick={()=>{play()}}><Play /></Button>

        
        
        </div>
        
        <Button className='flex gap-2 bg-transparent hover:bg-transparent dark:text-white border text-black' onClick={()=>{navigator.clipboard.writeText(aiOutput); setcopy('Copied'); setInterval(()=>setcopy('Copy'),2000)}}>
          <Copy className='w-4 h-4'></Copy>{copy}
        </Button>
        
    </div>
    <p className='text-xs justify-center text-center hidden md:flex'>Voice function not available for languages other than english</p>
    <Editor
    ref={editorRef}
    initialValue="Your result will appear here"
    initialEditType="wysiwyg"
    height="600px"
    useCommandShortcut={true}
    onChange={()=>console.log(editorRef.current.getInstance().getMarkdown())}
  />
  </div>
  )
}

export default OutputSection