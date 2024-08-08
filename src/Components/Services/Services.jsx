import React from 'react'
import { TbTruckDelivery } from "react-icons/tb";
import { MdOutlinePayment } from "react-icons/md";
import { CiDeliveryTruck } from "react-icons/ci";
import { VscWorkspaceTrusted } from "react-icons/vsc";
const Services = () => {
  return (
    <>
    <div className=' flex container mx-auto pt-10 px-5 flex-wrap items-center justify-center gap-10'>
        <div className='bg-red-500 rounded w-[220px] items-center flex flex-col text-white py-3 px-5 gap-2 hover:bg-red-300' >
        <TbTruckDelivery size={30}/>
            <p>FREE DELIVERY</p>
        </div>
        <div className='bg-red-500 rounded w-[220px] items-center flex flex-col text-white py-3 px-5 gap-2  hover:bg-red-300'>
        <VscWorkspaceTrusted size={30} />

            <p>AUTHENTIC PRODUCT</p>
        </div>
        <div className='bg-red-500 rounded w-[220px] items-center flex flex-col text-white py-3 px-5 gap-2  hover:bg-red-300'>
        <CiDeliveryTruck size={30}/>

            <p>EASY RETURN</p>
        </div>
        <div className='bg-red-500 rounded w-[220px] items-center flex flex-col text-white py-3 px-5 gap-2  hover:bg-red-300'>
        <MdOutlinePayment size={30}/>
        <p>SECURE PAYMENT</p>
        </div>
    </div>
      
    </>
  )
}

export default Services
