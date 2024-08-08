import { signInWithEmailAndPassword } from 'firebase/auth'
import React, { useState } from 'react'
import {Link, useNavigate} from "react-router-dom"

import toast from 'react-hot-toast'

import { auth } from '../../FireBase/FireBase'
const SingIn = () => {
  
  const [userSigIn,setuserSigIn]= useState({email:"",password:""})

  const navigate = useNavigate();

  const handleSigIn =(e)=>{
    
     setuserSigIn({...userSigIn,[e.target.name]:e.target.value})
  }

  const handleForm=(e)=>{
    e.preventDefault();
    if( !userSigIn.email || !userSigIn.password){
      toast.error("fill all the Required details ")
    }
    else{
      signInWithEmailAndPassword
      (auth,userSigIn.email,userSigIn.password).then(async(res)=>{
         navigate("/")
      }).catch((err)=>toast.error(err.message))
    }
  }
  return (
    <>
        <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
    <div className="max-w-md w-full space-y-8">
      <div>
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          LogIn In to your account
        </h2>
      </div>
      <form className="mt-8 space-y-6" action="#" method="POST">
        <input type="hidden" name="remember" value="true" />
        <div className="rounded-md shadow-sm space-y-4">
        
        <div>
            <label htmlFor="email-address" className="sr-only">
              Email address
            </label>
            <input
              id="email-address"
              name="email"
              type="email"
              autoComplete="off"
              value={userSigIn.email}
              required
              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Email address"
              onChange={handleSigIn}
            />
          </div>
          <div>
            <label htmlFor="password" className="sr-only">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              value={userSigIn.password}
              autoComplete="off"
              required
              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Password"
              onChange={handleSigIn}
            />
          </div>
          
          
        </div>

        <div>
          <button
            type="submit"
            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          onClick={handleForm}>
            LogIn
          </button>
        </div>
        <Link to="/">
        <p>Do not have a Account? <span>SigIn</span></p>
        </Link>
      </form>
    </div>
  </div>
      
    </>
  )
}

export default SingIn
