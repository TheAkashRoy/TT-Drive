import React,{useState} from 'react'
import TextareaAutosize from '@mui/base/TextareaAutosize';

function Generate() {
    //const [code,setCode]=useState("");
  return (
    <div className='bg-[#EEEEEE]' >
      <div className=' p-20 '>
      <p className='text-4xl mb-4 text-[#393E46] font-semibold pt-3 max-[640px]:text-2xl'>Enter text here</p><br/>
      <TextareaAutosize
      aria-label="minimum height"
      maxRows={100}
      className=' mb-12 text-md'
      placeholder="Your text area"
      style={{ minWidth: 200,maxWidth:1800 }}
    /><br/>
      <button className='text-3xl mb-12 bg-slate-200 rounded-xl p-2 text-[#393E46] font-semibold max-[640px]:text-xl shadow-2xl' >Generate Code</button>
   
      </div>
    </div>
  )
}

export default Generate
