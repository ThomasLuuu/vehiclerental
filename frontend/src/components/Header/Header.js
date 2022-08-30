import React from 'react';
import Image from '../../img/airbnb.png';
import {GlobeAltIcon, MenuIcon, UserCircleIcon, SearchIcon, UserIcon} from '@heroicons/react/solid';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <div>
      <header className='flex justify-between items-center sticky top-0 z-1000 w-100 bg-white h-20 shadow-md p-5 md:px-10 tall:justify-center'>
          <img src={Image} className=' h-20 object-contain ml-20 hidden xl:flex' />
        <div className='flex items-center md:border-2 rounded-full py-2 md:shadow-sm' >
          <input type="text" placeholder='Search...' className='flex-grow pl-5 bg-transparent outline-none text-sm text-gray-600 placeholder-gray-400 '/>
          <SearchIcon className='hidden md:inline-flex h-8 bg-red-400 text-white rounded-full cursor-pointer md:mx-2'/>
        </div>
      
        <div className='flex items-center space-x-4 justify-end text-grey-500'> 
          <p className='hidden md:inline cursor-pointer'>Become a host</p>
          <GlobeAltIcon className='hidden h-10 cursor-pointer'/>
          <div className=' hidden flex items-center space-x-2 border-2 p-2 rounded-full'>
            <MenuIcon className='h-10'/>
            <UserCircleIcon className='h-10' />
          </div>
        </div>
        </header>
        <Navbar>
        <Container>
          <Navbar.Brand href="#home">Navbar with text</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              Signed in as: <a href="#login">Mark Otto</a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header;
