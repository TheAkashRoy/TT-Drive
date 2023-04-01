import React,{useState} from 'react'
function Navbar() {
  let [open, setOpen] = useState(false);
  return (
    <div className='fixed top-0 z-20 w-full bg-[#222831]'>
    <div className=' flex p-3 justify-between'>
    <div><p className='text-slate-100 font-bold text-4xl  max-[640px]:text-3xl'>Temporary Text Drive</p></div>
    <div
          onClick={() => setOpen(!open)}
          className="text-4xl  text-gray-100 font-bold"
        >
          <ion-icon name={open ? "close" : "menu"}></ion-icon>
        </div>  
    </div>
    <ul className={`${open?'block':'hidden'} mx-auto`}>
    <li className='text-slate-100 text-2xl  font-semibold  pb-3 pl-3'><a href="/">Home</a></li>
    <li className='text-slate-100 text-2xl  font-semibold  pb-3 pl-3'><a href="/access">Access</a></li>
    </ul>
    </div>
    
  )
}

export default Navbar
