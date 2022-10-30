import React from 'react'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import ThaliItems from '../Component/ThaliItems'
import { clearCheckedItems } from '../reducers/reducerSlice'

import '../cssFolder/Thali.css'
const Thali = ({item}) => {

  const dispatch = useDispatch();
  const dataItems = useSelector((state) => state.check.data)
  // console.log(dataItems)
  const doneItem = useSelector((state) => state.check.thali)
  // console.log(doneItem)
  const [warning, setWarning] = useState(false)


  const navigate = useNavigate()




  useEffect(() => {
    dispatch(clearCheckedItems())
  }, [dispatch]);

  const handleCheckout = () => {
    if (doneItem.length < 2) {
      setWarning(true)
    }
    else {
      setWarning(false);
      navigate('/Checkout')
    }
  }

  return (
    <>
      <div className='containor' >

        <div >

          {
            doneItem.map((item, index) => {
              return (

                <img
                  key={index}
                  src={item.itemimage}
                  alt={item.itemName}
                  width='150px'
                  height='150px'
                  className='jpg'

                />

              )
            }

            )

          }


         <div>
            {dataItems.map((item, index) =>
              <ThaliItems key={index} item={item} />
            )}

          </div> 

          {
            warning ?

              <div>
                <p className='para'> Please select minimum two characters </p>
              </div>
              :
              null

          }

          <button className='btnC' onClick={handleCheckout}>Checkout</button>
        </div>
      </div>
    </>
  )

}

export default Thali