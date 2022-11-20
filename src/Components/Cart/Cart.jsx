import React from 'react'
import './style.css'
import Button from '../Button'

function Cart({cartItems, onCheckout}) {
    const total =  cartItems.reduce((a,c) => a + c.price * c.quantity, 0)
  return (
    <div className='cart-cont'>
        
        {cartItems.length === 0 ? "No item is here" : ""}
        <br /> <span className=''>Total Price: ${total.toFixed(2)}</span> 
        <Button title={`${cartItems.length === 0 ? 'Order' : "Checkout"}`} 
        type={"checkout"}
        disable={cartItems.length === 0 ? true : false}
        onClick={onCheckout}
        />
    </div>
  )
}

export default Cart