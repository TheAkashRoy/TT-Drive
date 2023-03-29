import React,{useState} from 'react'
import TextareaAutosize from '@mui/base/TextareaAutosize';

function Generate() {
    //const [code,setCode]=useState("");
  return (
    <div className='' >
      <div className='bg-[#3A98B9] p-16'>
      <p className='text-4xl mb-4 text-[#0B2447] font-semibold pt-3'>Enter text here</p><br/>
      <TextareaAutosize
      aria-label="minimum height"
      maxRows={100}
      className=' mb-12 text-md'
      placeholder="Your text area"
      style={{ width: 2000 }}
    /><br/>
      <button className='text-3xl mb-12 bg-slate-200 rounded-lg p-2 text-[#0B2447] font-semibold' >Generate Code</button>
   
      </div>
    </div>
  )
}

export default Generate
