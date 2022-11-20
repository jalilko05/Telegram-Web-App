import React, {useState} from 'react'
import Button from '../Button'
import './style.css'


function Card({mobile, onAdd, onRemove}) {
    const [count, setCount] = useState(0)
    const {title, image, price, id} = mobile

    const Increment = () =>{
        setCount(count + 1)
        onAdd(mobile)
    }

    const Decrement = () =>{
        setCount(count - 1)
        onRemove(mobile)
    }

  return (
   <>
   <div className='card'>

       <span className={`${count !== 0 ? 'card-badge' : 'card-hidden'}`}>
        {count}
       </span>

       <div className='img-cont'>
            <img src={image} alt={title} />
       </div>

       <h4 className='card-title'>
        {title} <span className='card-price'>$ {price}</span>
       </h4>
       
       <div className='btn-cont'>
            <Button title={'+'} type={'add'} onClick={Increment}/>
            {count !==0 ?(
                <Button title={'-'} type={'remove'} onClick={Decrement} />
            ):('')}
       </div>
   </div>
   </>
  )
}

export default Card