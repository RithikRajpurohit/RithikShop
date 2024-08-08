import React, { useEffect, useState } from 'react'
import axios from "axios"
import { Link } from 'react-router-dom'
const Products= ({AddToCart  }) => {

  const [allproducts,setallproducts] = useState([])
  const [searchitem,setsearchitem] = useState("")

  const[min,setmin]= useState("")
  const [max,setmax]= useState("")

  useEffect(()=>{
    const Cartegious = async ()=>{
      const dataitem = await axios.get("https://fakestoreapi.in/api/products")
      setallproducts(dataitem.data.products);
     
    }
    Cartegious()
  },[])

    const handleSearch=()=>{
      
      
    const serchproduct = allproducts.filter((itemproduct)=>(
      itemproduct.model.toLowerCase().includes(searchitem.toLowerCase())
        ))
    
        setallproducts(serchproduct)
       

    }
const handleminandmax=()=>{
  const minivalue=parseFloat(min)
  const maximumvalue=parseFloat(max)

  const miniandmaxi=allproducts.filter((product)=>(
    (!minivalue || product.price>=minivalue) && (!maximumvalue || product.price<=maximumvalue)
  ))

  setallproducts(miniandmaxi)
}



  return (
    <>
      <section className="text-gray-600 body-font">
        <h1 className='items-center w-full text-3xl px-12 text-cyan-400 font-semibold md:px-[600px]'>ALL PRODUCTS</h1>

  <div className="container px-5 py-24 mx-auto">
    <div className='items-center mt-1 text-xl flex justify-center mb-12 gap-2'>
      <input className='border-2 border-black  w-[138px] md:w-34'
      type='text' placeholder='Search Product' 
      value={searchitem}
      onChange={(e)=>setsearchitem(e.target.value)}/>
        <button className='bg-blue-500 text-black  hover:bg-blue-300 px-2 py-1 font-bold rounded w-27  h-11' 
      onClick={handleSearch}
      >Search</button>
    </div>
    <div className='flex justify-center gap-2'>
      <div className='mb-12'>
      <input type='text'
      placeholder='Min price'
      className='border-2 border-black mb-4 md:mr-4'
      value={min}
      onChange={(e)=>setmin(e.target.value)}
      />
      <input type='text'
      placeholder='Max price'
       className='border-2 border-black'
       value={max}
       onChange={(e)=>setmax(e.target.value)}
      />
      </div>
      <button className='bg-blue-500 text-black  hover:bg-blue-300 px-2 py-1 font-bold rounded w-27  h-8' 
      onClick={handleminandmax}
      >Search</button>
    </div>
    <div className="flex flex-wrap -m-4">
      {
        allproducts.map((product)=>(
          <div className="lg:w-1/4 md:w-1/2 p-4 w-full border-gray-800  " key={product.id}>
          <Link className="block relative h-48 rounded overflow-hidden" to={`/SingleProduct/${product.id}`}>

            <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={product.image}/>
          </Link>
          <div className="mt-4">
            <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Brand:{product.brand}</h3>
            <h2 className="text-gray-900 title-font text-lg font-medium">Model:{product.model}</h2>

            <p className="mt-1 font-semibold">Price:${product.price }</p>
          </div>
          <div className='mt-1'>
           
            <button className='py-3 px-2 bg-blue-500 rounded text-black font-semibold hover:bg-slate-300 ease-in duration-300 ' onClick={()=>AddToCart(product)}>ADD TO CART</button>
            
          </div>
        </div>

        ))
      }
    
      
      
      
    
      </div>
    </div>
  
</section>
</>
      
    
  )
}

export default Products
