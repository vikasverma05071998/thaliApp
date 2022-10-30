
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom";
import '../cssFolder/checkout.css'
const Checkout = () =>{
  const navigete = useNavigate()
  const completedItems = useSelector((state)=>(state.check.thali))

  let totalBill = completedItems.reduce((sum, item)=>{
    return (sum+(item.quantity * item.unitPrice))
  }, 0);
 return(  <>
 <div className="containore">
          <div>
              <h1 id="heading">Here is Your total Bill</h1>
          </div>
          <div>
            <table className="table">
              <thead className="tables">
                <tr>
                <th>S.No.</th>
                      <th>Item</th>
                      <th>Item Name</th>
                      <th>Unit Price</th>
                      <th>Quantity</th>
                      <th>Price</th>
              
                </tr>
              </thead>
              <tbody>
              {completedItems.map((item, index)=>{
                return (
                  <tr key={item.id}>
                    <td>{(index+1)}</td>
                    <td><img 
                    src={item.itemimage}
                    alt={item.itemName}
                    width='70px'
                    height='70px'
                    /></td>
                    <td>{item.itemName}</td>
                    <td>{item.unitPrice}</td>
                    <td>{item.quantity}</td>
                    <td>{(item.quantity * item.unitPrice)}</td>

                  </tr>
                )
              })}
              </tbody>
              

                             <tfoot className='table-dark'>
                                 <tr>
                                     <th colSpan='5'>Total Bill Amount</th>
                                     <th>{totalBill}</th>
                                </tr>
                             </tfoot>

            </table>
          </div>
          <h1>Your order is successfull </h1>
          <button className="goto" onClick={()=>navigete('/')}>Go To Home</button>
 </div>
    </>)
}
export default Checkout    
