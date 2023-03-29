import React,{useState} from 'react'
import TextareaAutosize from '@mui/base/TextareaAutosize';

function Generate() {
    //const [code,setCode]=useState("");
  return (
    <div >
      <div className='m-20 '>
      <p className='text-3xl mb-4 text-[#0B2447] font-semibold'>Enter text here</p><br/>
      <TextareaAutosize
      aria-label="minimum height"
      maxRows={100}
      className=' mb-12 text-md'
      placeholder="Your text area"
      style={{ width: 2000 }}
    /><br/>
      <button className='text-2xl mb-12 bg- rounded-lg p-2 text-[#0B2447]' >Generate Code</button>
   
      </div>
    </div>
  )
}

export default Generate
