import React from 'react'
import './WeDoSection.css'
import HourService from '../Images/24HourService.svg'
import LocalPharmacy from '../Images/LocalPharmacy.svg'
import EasyPayment from '../Images/EasyPayment.svg'
import ExpressDelivery from '../Images/XpressDelivery.svg'

function WeDoSection() {
  return (
    <div className="Tempcontainer">
      <div className="we-do-Conatiner">
        <div className="heading">We stand out of the crowd.</div>

        <div className="services">
          <div className="Service-24">
            <img
              className="hourServiceImg"
              src={HourService}
              alt="24hourService"
            />
            <span>24/7-Service</span>
            Medicine on the wheels at any time to your door step straight from
            your Local Pharmacy.
          </div>
          <div className="XpressDelivery">
            <img
              className="ExpressDeliveryImg"
              src={ExpressDelivery}
              alt="ExpressDelivery"
            />
            <span>Xpress Delivery</span>
            Medicine on the wheels at any time to your door step straight from
            your Local Pharmacy.
          </div>
          <div className="EasyPayment">
            <img
              className="EasyPaymentImg"
              src={EasyPayment}
              alt="EasyPayment"
            />
            <span>Easy Payment</span>
            Medicine on the wheels at any time to your door step straight from
            your Local Pharmacy.
          </div>
          <div className="LocalPharmacy">
            <img
              className="LocalPharmacyImg"
              src={LocalPharmacy}
              alt="LocalPharmacy"
            />
            <span>Local Pharmacy</span>
            Medicine on the wheels at any time to your door step straight from
            your Local Pharmacy.
          </div>
        </div>
      </div>
    </div>
  )
}

export default WeDoSection
