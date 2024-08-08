import React, { useState } from 'react'
import { FaCartShopping } from "react-icons/fa6";
import {Link
 } from "react-router-dom"
 import { GiHamburgerMenu } from "react-icons/gi";
 import { RxCross1 } from "react-icons/rx";
const Header = ({CartItem,profile}) => {


    const [isopen,setisopen]= useState(true)
    const handleopen=()=>{
        {
            isopen?setisopen(false):setisopen(true)
        }
    }
  return (
    <div>
        <header className='bg-white border-b border-gray-300 relative'>
            <div className='flex justify-between container mx-auto p-5 items-center'>
                <div >
                    <h3 className='font-bold text-2xl'>
                        Rithik<span className='text-red-700 cursor-pointer'>Shop</span>
                    </h3>
                </div>
                {
                    isopen? <div className='hidden md:block'> 
                    
                    <ul className='flex items-center text-lg justify-center font-semibold'>
                        <Link to="/">
                        <li className='mr-5 hover:text-gray-500 cursor-pointer'>
                            Home
                        </li>
                        </Link>
                        <Link to="/Products">
                        <li className='mr-5 hover:text-gray-500 cursor-pointer'>
                            All Products
                        </li>
                        </Link>
                        <Link to="/Contact">
                    <li className='mr-5 hover:text-gray-500 cursor-pointer'>
                        Contact 
                    </li>
                    </Link>
                    <Link to="/AboutUs">
                    <li className='mr-5 hover:text-gray-500 cursor-pointer'>
                        About us 
                    </li>
                    </Link>
                    </ul></div>:<div>
                                <ul className='flex flex-col bg-red-400 top-[70px] h-[100vh] w-full right-0 z-10 absolute items-center text-lg justify-center font-bold gap-5 md:hidden'>
                    <Link to="/">
                    <li className='mt-5 hover:text-gray-500 cursor-pointer'>
                        Home
                    </li>
                    </Link>
                    <Link to="/Products">
                    <li className='mt-5 hover:text-gray-500 cursor-pointer'>
                        All Products
                    </li>
                    </Link>
                    <Link to="/Contact">
                    <li className='mt-5 hover:text-gray-500 cursor-pointer'>
                        Contact 
                    </li>
                    </Link>
                    <Link to="/AboutUs">
                    <li className='mt-5 hover:text-gray-500 cursor-pointer'>
                        About us 
                    </li>
                    </Link>
                </ul>
                <button className='absolute right-0 z-10 top-[75px] font-extrabold px-6 py-4'>
                    <RxCross1  size={30} onClick={handleopen}/>
                </button>
                </div>
                }
               

                
                <div className='flex items-center justify-center  gap-2'>
                {
                        profile==""?<button className=' items-center bg-gray-100 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base '>
                        Login
                    </button>:<button className='items-center bg-gray-100 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base '>{profile}</button>
                    }
                  
                    
                   
                    <Link to="/Cart">
                    <button>
                        {
                            CartItem.length>=1?<span>{CartItem.length}</span>:""
                        }
                      
                    <FaCartShopping size={25} />

                    </button>
                    </Link>
                    {
                        isopen?<button className='md:hidden' onClick={handleopen}>
                        <GiHamburgerMenu size={25}/>
                        </button>:""
                    }
                   
                </div>
            </div>
        </header>
      
    </div>
  )
}

export default Header
