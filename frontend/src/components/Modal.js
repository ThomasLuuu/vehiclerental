import React from 'react'
import { useState } from 'react';
import '../index.css'

function Modal({open, setOpen}) {
    const close = () => {
        setOpen(false)
    }
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('');
    const [isLoggedin, setIsLoggedin] = useState(false);

    const login = (e) => {
        e.preventDefault();
        console.log(userName, email, password,phone);
        const userData = {
        userName,
        email,
        password,
        phone
        };
        localStorage.setItem('token-info', JSON.stringify(userData));
        setIsLoggedin(true);
        setUserName('');
        setEmail('');
        setPassword('');
        setPhone('');
    };

    const logout = () => {
        localStorage.removeItem('token-info');
        setIsLoggedin(false);
    };
    
  return (
    <>
    {(open)&&(!isLoggedin)?     <>
        <div id="authentication-modal" tabIndex="-1" aria-hidden="true" className='	z-1000 top-0 bottom-0 left-0 right-0 bg-black/25 position 	position: fixed'> 
      <div className='absolute w-full max-w-md h-full md:h-auto top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 '>
    <div className= {`relative bg-white rounded-lg shadow dark:bg-gray-700`}>
            <button onClick={close} type="button" className='absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white' data-modal-toggle="authentication-modal">
                <svg aria-hidden="true" className='w-5 h-5' fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                <span className='sr-only'>Close modal</span>
            </button>
            <div className='py-6 px-6 lg:px-8'>
                <h3 className='mb-4 text-xl font-medium text-gray-900 dark:text-white'>Register to our platform</h3>
                <form className='space-y-6' action="#">
                    <div>
                        <label htmlFor='email' className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
                        <input type="email" 
                                name="email" 
                                id="email"
				                onChange={(e) => setEmail(e.target.value)}
				                value={email} 
                                className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com' 
                                required />
                    </div>
                    <div>
                        <label htmlFor='phone' className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Mobile number</label>
                        <input type="phone"
                                name="phone" 
                                id="phone"
                                onChange={(e) => setPhone(e.target.value)}
				                value={phone}  
                                className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com' required />
                    </div>
                    <div>
                        <label htmlFor='username' className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Username</label>
                        <input type="username" 
                                name="username" 
                                id="username"
				                onChange={(e) => setUserName(e.target.value)}
				                value={userName} 
                                className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com' 
                                required />
                    </div>
                    <div>
                        <label htmlFor='password' className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your password</label>
                        <input type="password" 
                                name="password" 
                                id="password" 
                                onChange={(e) => setPassword(e.target.value)}
				                value={password} 
                                placeholder="••••••••" 
                                className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white' 
                                required />
                    </div>
                    <div className='flex justify-between'>
                        <div className='flex items-start'>
                            <div className='flex items-center h-5'>
                                <input id="remember" type="checkbox" value="" className='w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-600 dark:border-gray-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800' required />
                            </div>
                            <label htmlFor='remember' className='ml-2 text-sm font-medium text-gray-900 dark:text-gray-300'>Remember me</label>
                        </div>
                        <a href="#" className='text-sm text-blue-700 hover:underline dark:text-blue-500'>Forgot password?</a>
                    </div>
                    <button type="submit" className='w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800' onClick={login}>Create Account</button>
                    <div className='text-sm font-medium text-gray-500 dark:text-gray-300'>
                        Already have a account? <a href="#" className='text-blue-700 hover:underline dark:text-blue-500'>Log in</a>
                    </div>
                </form>
            </div>
        </div>
        </div>
        </div>


    </>: 
    <>
			<h1>User is logged in</h1>
			<button onClickCapture={logout}>logout user</button>
		</> }
    </>



  )
}

export default Modal