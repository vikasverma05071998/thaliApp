import React from "react"


import fullthali from '../image/fullthali.png'
import { useNavigate } from "react-router-dom"
import Thali from '../Component/Thali'
import '../cssFolder/Home.css'


export default function Home() { 
  const navigate = useNavigate()
  return (
    <>
    <div className="containor">
    <div>
      
      <h2 id="he">Order your favourite food online and get them delivered right to your doorstep!</h2>
    </div>

    <div>
      <img src={fullthali} id='thali'/>
    </div>
    <div className="list">
        <li>
        Efficient customer and order management....
        </li>
        <li>
        Makes the ordering process easier. ...
        </li>
        <li>Efficient customer and order management. ...</li>
        <li>Monitor your expenses incurred in real-time. ...</li>
        <li>Free and cheap marketing. ...</li>
        <li>Better customers data. ...</li>
        <li>The convenience of mobile ordering. ..</li>
        <li>Stay ahead of the competition. ...</li>
        <li>Grow your bottom line.</li> 
    </div>
   
    </div>

    <div>
      <button className="btn" onClick={()=>navigate("/Thali")}>click for Order</button>
    </div>
    </>

  )
}



