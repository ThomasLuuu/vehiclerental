import React from 'react'
import '../index.css'

function Dropdown({open, setOpen}) {
    const close = () => {
        setOpen(false)
    } 
  return (
    <>
    {open?     <>
    {/* Thay doi mt line 12 la oke */}
    <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"> 
    <div className='py-1'>
      <a href="#" className="text-gray-700 block px-4 py-2 text-sm md:shadow-sm" role="menuitem" tabIndex="-1" id="menu-item-0">Account</a>
    </div>
    <div>
    <a href="#" className="text-gray-700 block px-4 py-2 text-sm md:shadow-sm" role="menuitem" tabIndex="-1" id="menu-item-1">Support</a>
    </div>
    <div>
    <a href="#" className="text-gray-700 block px-4 py-2 text-sm md:shadow-sm" role="menuitem" tabIndex="-1" id="menu-item-2">License</a>
    </div>
    </div>
    
    


    </>: null }
    </>



  )
}

export default Dropdown