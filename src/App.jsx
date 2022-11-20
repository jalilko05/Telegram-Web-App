import { useState, useEffect } from 'react';
import './App.css';
import Cart from './Components/Cart/Cart';
import Card from './Components/Card/Card';
const {getData} = require('./db/db')
const mobiles = getData()

const tg = window.Telegram.WebApp
 




function App() {

    const [cartItems, setCartItems] = useState([])

      useEffect(()=>{
        tg.ready()
      })

    const onAdd = (mobile) =>{
        const exist = cartItems.find((x) => x.id === mobile.id)
        if(exist){
          setCartItems(
            cartItems.map((x)=>{
           return(
            x.id === mobile.id ? {...exist, quantity: exist.quantity+1} :x
           )
          }))
        }
        else{
          setCartItems([...cartItems,{...mobile,quantity: 1}])
        }
    }

    const onRemove = (mobile) =>{
        const exist = cartItems.find((x) => x.id === mobile.id)
        if(exist.quantity === 1) {
          setCartItems(cartItems.filter((x) => x.id !== mobile.id))
        }
        else(
          setCartItems(
            cartItems.map((x)=>{
            return(
               x.id === mobile.id ? {...exist, quantity: exist.quantity -1}
               : x
            )
          
          }))
        )
    }
    
    const onCheckout = () =>{
      tg.MainButton.text = "Pay!"
      tg.MainButton.show()
    }
  return (
    <>
        <h1 className='heading'>Order Now</h1>
          <Cart cartItems={cartItems} onCheckout={onCheckout}  />

      <div className='card-cont'>
      {mobiles.map(mobile=>{
      return <Card mobile={mobile} key={mobile.id} onAdd={onAdd} onRemove={onRemove}/>
    })}
      </div>

   
    </>
  );
}

export default App;
