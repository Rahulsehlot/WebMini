import React from 'react'
import './OrderSection.css'
function OrderSection() {
  return (
    <div className="Div-Layout">
      <div className="OrderContainer">
        <span> Are you ready to start your first order. </span>
        <div className="orderContainer">
          <button className="MakeYourOrder">Make Your Order</button>
          <button className="MedicalAssistant">MedicalAssistant</button>
        </div>
      </div>
    </div>
  )
}

export default OrderSection
