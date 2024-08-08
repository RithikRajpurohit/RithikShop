
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home/Home'
import Cart from './Pages/Cart/Cart'
import SingIn from './Pages/SingIn/SingIn'
import Login from './Pages/Login/Login'
import Products from './Components/Products/Products'
import { useEffect, useState } from 'react'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import  toast, { Toaster } from 'react-hot-toast';
import { auth } from './FireBase/FireBase'
import { onAuthStateChanged } from 'firebase/auth'
import SingleProduct from './Components/SingleProduct/SingleProduct'
import AboutUs from './Components/AboutUs/AboutUs'
import Contact from './Components/Contact/Contact'

function App() {

  const [CartItem,setCart] = useState([]);


  const AddToCart =(item)=>{

    const FindItem = CartItem.find((finditem)=>finditem.id===item.id)

    if(FindItem){
      const UpdatedItem= CartItem.map((productItem)=>(
        productItem.id===item.id?{...productItem,Quantity:productItem.Quantity+1}:productItem

      ))
      setCart(UpdatedItem)
    }
    else{
      setCart([...CartItem,{...item,Quantity:1}])
    }

    
    toast.success("Product is Added")
    
    
  }

  const increment =(id)=>{
   const incrementValue= CartItem.map((item)=>(
      item.id===id?{...item,Quantity:item.Quantity+1}:item
    ))
    setCart(incrementValue)

  }

  const decrement=(id)=>{
   const decrementValue= CartItem.map((item)=>(
      item.id===id && item.Quantity>1?{...item,Quantity:item.Quantity-1}:item
    ))
    setCart(decrementValue)

  }


  const Deleteitem=(id)=>{
    const deleteupdatecart=CartItem.filter((filteritem)=>(
      filteritem.id!=id
    ))
    setCart(deleteupdatecart)
  }

  const TotalPricde =()=>{
   const FinalPrice= CartItem.reduce((total,Cartitem)=>{
      return total+Cartitem.price * Cartitem.Quantity;
    },0)
    return FinalPrice
  }

  const taxesCaal= ()=>{
    const  TaxtAmout= (TotalPricde() *0.1);
    return TaxtAmout
  }
  const [profile,setprofile]= useState("")


  useEffect(()=>{


   auth.onAuthStateChanged((user)=>{
      if(user){
        setprofile(user.displayName)
      }
      else{
        setprofile("")
      }
    })
   
  },[])


  return (
    <>
    <BrowserRouter>
    <Header CartItem={CartItem} profile={profile}/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Cart' element={<Cart CartItem={CartItem} increment={increment} decrement={decrement} Deleteitem={Deleteitem} TotalPricde={TotalPricde} taxesCaal={taxesCaal}/>}/>
      <Route path='/SigIn' element={<SingIn/>}/>
      <Route path='/' element={<Login/>}/>
      <Route path='/Products' element={<Products AddToCart={AddToCart}/>}/>
      <Route path='/SingleProduct/:itemid' element={<SingleProduct AddToCart={AddToCart}/>}/>
      <Route path='/AboutUs' element={<AboutUs/>}/>
      <Route path='/Contact' element={<Contact/>}/>
    </Routes>

    <Toaster/>
    <Footer/>
    </BrowserRouter>
 
    </>
  )
}

export default App
