import React from 'react'

const Cart = ({ CartItem,increment,decrement,Deleteitem,TotalPricde,taxesCaal }) => {
 
  return (
    <div>
      <>
        <div className="bg-gray-100 min-h-screen py-8">
          <div className="container mx-auto px-4">
            <h1 className="text-2xl font-semibold mb-4">Shopping Cart</h1>
            <div className="flex flex-col lg:flex-row gap-4">
              <div className="lg:w-3/4 w-full">
                <div className="bg-white rounded-lg shadow-md p-6 mb-4 overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr>
                        <th className="text-left font-semibold">Product</th>
                        <th className="text-left font-semibold">Price</th>
                        <th className="text-left font-semibold">Quantity</th>
                        <th className="text-left font-semibold">Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      {CartItem.map((Selected) => (
                        <tr key={Selected.id} className="border-t">
                          <td className="py-4">
                            <div className="flex items-center ">
                              <div>
                              <img className="h-16 w-16 mr-4" src={Selected.image} alt="Product" />
                              <button className='font-semibold bg-slate-300 px-1 py-1 rounded' onClick={()=>Deleteitem(Selected.id)}> Remove</button>
                              </div>
                             
                              <span className="font-semibold truncate max-w-xs ">{Selected.model}</span>
                          
                           
                            
                              
                            </div>
                          </td>
                          <td className="py-4">${Selected.price}</td>
                          <td className="py-4">
                            <div className="flex items-center">
                              <button className="border rounded-md py-2 px-4 mr-2" onClick={()=>decrement(Selected.id)} >-</button>
                              <span className="text-center w-8">{Selected.Quantity}</span>
                              <button className="border rounded-md py-2 px-4 ml-2" onClick={()=>increment(Selected.id)}>+</button>
                            </div>
                          </td>
                          <td className="py-4">${Selected.price * Selected.Quantity}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="lg:w-1/4 w-full">
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h2 className="text-lg font-semibold mb-4">Summary</h2>
                  <div className="flex justify-between mb-2">
                    <span>Subtotal</span>
                    <span>${TotalPricde()}</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span>Taxes</span>
                    <span>${taxesCaal()}</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span>Shipping</span>
                    <span>$10.00</span>
                  </div>
                  <hr className="my-2" />
                  <div className="flex justify-between mb-2">
                    <span className="font-semibold">Total</span>
                    {
                      TotalPricde()==0?<span className="font-semibold">${0}</span>:  <span className="font-semibold">${TotalPricde() + 10+ taxesCaal()}</span>
                    }
                  
                  </div>
                  <button className="bg-blue-500 text-white py-2 px-4 rounded-lg mt-4 w-full">Checkout</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  )
}

export default Cart
