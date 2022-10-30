
import React from 'react'
import  { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addItem,removeItem } from '../reducers/reducerSlice'
import '../cssFolder/Thali.css'
export default function ThaliItems({item}) {

    const doneItems = useSelector((state)=>state.check.thali)
    console.log(doneItems)
    const dispatch = useDispatch()  
    const [add, setAdd] = useState(false)
    const [quantity, setQuantity] = useState(1)

    const Additems =() => {
        dispatch(addItem({item, quantity}))
        setAdd(true)
        
    }
    const RemoveItems = (id) =>{
        dispatch(removeItem(item))
        setAdd(false)
        setQuantity(1)
    }

    const QuantityHanlde = (event) => {
        setQuantity(Number(event.target.value))
    }
  return (<>
      <div className='conatainor'> 

         <div>
         {/* <img src={item.itemimage} width='100px' height='100px' className='original'/> */}
        
         <p className='name'>{item.itemName}</p>
         <p className='price'><i className="fa fa-inr"/>{item.unitPrice}</p>
         <select
         className='select'
         onChange={QuantityHanlde}
         value={quantity}>
            <option value='1'>1</option>
            <option value='2'>2</option>
            <option value='3'>3</option>
            <option value='4'>4</option>
            <option value='5'>5</option>
        </select>
        <button className='btny' onClick={Additems}>addItem</button>
        <button className='btnys' onClick={RemoveItems}>removeItem</button>
        </div> 
    </div>   
    </>
  )
}