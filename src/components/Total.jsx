import React from 'react'
import { useSelector } from 'react-redux'

const Total = () => {
    const Total = useSelector((state) => state.cart.cartData)
    console.log("Total",Total)
    const sum = Total.reduce((total, item) => total + item.quantity * item.price,0)
  return (
    <>
      <h1><span>Total: </span>{sum.toFixed(2)}</h1>
    </>
  )
}

export default Total;
