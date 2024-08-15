/* eslint-disable no-unused-vars */
import React from 'react'
import Navbar from './Navbar'
import CardContainer from './CardContainer'
import './App.css'
import data from './data'
import toast, { Toaster } from 'react-hot-toast';

function App() {

  const [cartData , setCartData] =React.useState(data)
  
  const [totalQuantity , setTotalQuantity] = React.useState(cartData.length)

  const [totalPrice ,setTotalPrice] = React.useState(0)

  React.useEffect(()=>{
    let sum=0;
    let totalPrice=0;
    for(let i=0;i<cartData.length;++i){
      totalPrice+=cartData[i].amount*cartData[i].price;
      sum+=cartData[i].amount;
    }
    setTotalPrice(totalPrice)
    setTotalQuantity(sum)
  },[cartData])

  function emptyCart(){
    setCartData([])
  }

  function increaseItem(id){
    setCartData((prevCartData)=>{
      return prevCartData.map((item)=>{
        return item.id===id ? {...item , amount:item.amount+1} : item
      })
    })
    toast.success('Added')
  }
  function decreaseItem(id){
    setCartData((prevCartData)=>{
      return prevCartData.map((item)=>{
        return item.id===id ? {...item , amount:item.amount-1} : item
      })
    })
    toast.success('Deleted')
  }
  function removeItem(id){
    setCartData((prevCartData)=>{
      return prevCartData.filter((item)=>{
        return item.id!==id
      })
    })
    toast.success('Removed')
  }


  return (
    <>
      <main>
        <Toaster/>
        <Navbar
                totalQuantity={totalQuantity}
         />
        <CardContainer 
                      data={cartData} 
                      increaseItem={increaseItem}
                      decreaseItem={decreaseItem} 
                      removeItem={removeItem}
                      totalQuantity={totalQuantity}
                      emptyCart={emptyCart}
                      totalPrice={totalPrice}
        />
      </main>
    </>
  )
}

export default App
