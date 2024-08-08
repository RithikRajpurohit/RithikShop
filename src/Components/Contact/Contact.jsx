import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { db } from '../../FireBase/FireBase'
import { collection, addDoc } from 'firebase/firestore'

const Contact = () => {
  
  const [userDetails, setuserDetails] = useState({ username: "", email: "", message: "" })

  const handlechange = (e) => {
    setuserDetails({ ...userDetails, [e.target.name]: e.target.value })
  }

  const handleForm = async (e) => {
    e.preventDefault();
    if (!userDetails.email || !userDetails.message || !userDetails.username) {
      toast.error("Fill all the required details")
    } else {
      toast.success(`The form was submitted successfully! Thank you, ${userDetails.username}`);
      try {
        await addDoc(collection(db, "contactUsDetails"), {
          name: userDetails.username,
          email: userDetails.email,
          message: userDetails.message,
        });
      } catch (err) {
        toast.error("Error submitting form: " + err.message);
      }
    }
  }

  return (
    <section className="text-gray-600 body-font relative h-screen">
      <div className="absolute inset-0">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d39554.669392919335!2d78.11983944547472!3d9.914920958531736!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1723125250103!5m2!1sen!2sin"
          className="w-full h-full"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="container px-5 py-24 mx-auto flex justify-center items-center h-full">
        <div className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col w-full relative z-10 shadow-md">
          <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">Contact Us</h2>
          <p className="leading-relaxed mb-5 text-gray-600">Fill the form below for any queries & suggestions</p>
          <div className="relative mb-4">
            <label htmlFor="username" className="leading-7 text-sm text-gray-600">Username</label>
            <input 
              type="text" 
              id="username" 
              name="username"
              value={userDetails.username} 
              onChange={handlechange} 
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
            <input 
              type="email" 
              id="email" 
              name="email"
              value={userDetails.email} 
              onChange={handlechange} 
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
          <div className="relative mb-4">
            <label htmlFor="message" className="leading-7 text-sm text-gray-600">Message</label>
            <textarea 
              id="message" 
              name="message"
              value={userDetails.message} 
              onChange={handlechange} 
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
          </div>
          <button 
            className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
            onClick={handleForm}>
            Submit
          </button>
          <p className="text-xs text-gray-500 mt-3">© rights owned by <span className='text-red-500'>Rithik</span></p>
        </div>
      </div>
    </section>
  )
}

export default Contact
