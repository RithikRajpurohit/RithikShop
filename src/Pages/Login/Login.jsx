import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import React, { useState } from 'react'
import toast from 'react-hot-toast'
import {Link, useNavigate} from "react-router-dom"
import { auth } from '../../FireBase/FireBase'
const Login = () => {



  const [userSigIn,setuserSigIn]= useState({username:"",email:"",password:""})
  const newnavigate= useNavigate()

  const handleSigIn =(e)=>{
    
     setuserSigIn({...userSigIn,[e.target.name]:e.target.value})
  }

  const handleForm=(e)=>{
    e.preventDefault();
    if(!userSigIn.username || !userSigIn.email || !userSigIn.password){
      toast.error("fill all the Required details ")
    }
    else{
      createUserWithEmailAndPassword(auth,userSigIn.email,userSigIn.password).then(async(res)=>{
        const user=  res.user

        await updateProfile(user,{
          displayName:userSigIn.username
        })
       newnavigate("/SigIn")
      }

      ).catch((err)=>toast.error(err.message))
    }
  }
  return (
    <div className=''>
        
        <div className="min-h-screen flex items-center justify-center bg-gray-50  px-4 sm:px-6 lg:px-8">
    <div className="max-w-md w-full space-y-8">
      <div>
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          SigIn in to your account
        </h2>
      </div>
      <form className="mt-8 space-y-6" action="#" method="POST">
        <input type="hidden" name="remember" value="true" />
        <div className="rounded-md shadow-sm space-y-4">
          <div>
            <label htmlFor="username" className="sr-only">
              Username
            </label>
            <input
              id="username"
              name="username"
              type="text"
              autoComplete="off"
              required
              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Username"
              value={userSigIn.username}
              onChange={handleSigIn}
            />
          </div>
          <div>
            <label htmlFor="email-address" className="sr-only">
              Email address
            </label>
            <input
              id="email-address"
              name="email"
              type="email"
              autoComplete="of"
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
            SigIn
          </button>


        </div>
        <Link to="/SigIn">
        <p>Do you have a account ?<span>LogIn</span></p>
        </Link>
      </form>
    </div>
  </div>
      
    </div>
  )
}

export default Login
