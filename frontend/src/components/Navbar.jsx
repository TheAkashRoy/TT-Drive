import React from 'react'
function Navbar() {
  return (
    <div className='fixed top-0 z-20 w-full bg-gradient-to-r from-[#FEA82F] to-[#FEA82F]'>
    <div className=' flex p-3 justify-between'>
    <div><a href="https://ttdrive.vercel.app/"><p className='text-white font-bold text-4xl max-[640px]:text-3xl font-Montserrat'>Temporary Text Drive</p></a></div>
    <div className='mx-3'><a href='https://github.com/TheAkashRoy/TT-Drive'> <i className="fa fa-github" href="github.com/TheAkashRoy"></i></a></div>
    </div>
    </div>
    
  )
}

export default Navbar
