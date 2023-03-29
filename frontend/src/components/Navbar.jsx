import React from 'react'
import drive from '../assets/drive.png'
function Navbar() {
  return (
    <div className='bg-gradient-to-r from-[#0B2447] to-[#13396e] flex flex-row p-3 justify-between'>
    <div className='flex flex-row' >
    <img src={drive} alt="drive_photo" className=' w-10 mx-1' />
      <h1 className='text-slate-100 font-bold text-4xl'>Temporary Text Drive</h1>
    </div>
      <div className='flex flex-row '>
      <div className='text-slate-100 text-3xl pr-10 font-semibold'><a href="/">Home</a></div>
      <div className='text-slate-100 text-3xl pr-20 font-semibold'><a href="/access">Access</a></div>
      </div>
      
    </div>
  )
}

export default Navbar
