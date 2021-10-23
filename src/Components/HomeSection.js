import React from 'react'
import Playbtn from '../Images/PlayButton.svg'
import ImageMDW from '../Images/MainPageImage.png'
import LogoMW from '../Images/mediwheelLogo.png'
import './HomeSection.css'

function HomeSection() {
  return (
    <div className="layoutMain">
      <div className="mainContainerHome">
        <div className="left-mdl-container">
          <div className="left-mdl-h1">
            <span>#24/7</span> solutionfor your medicine needs
          </div>
          <div className="left-mdl-h2">
            One-Stop Solution for
            <span> Medicine</span> to your door step
          </div>
          <div className="left-mdl-h3">
            Get your medicine just by uploading your prescription or adding to
            cart from your local pharmacy withoout any hassle
          </div>
          <div className="left-mdl-btn">
            <div className="Mke-order-btn">Make your first Order</div>
            <div className="video-btn">
              <img className="playbtn" src={Playbtn} alt="ply-btn" />
            </div>
            <div className="ply-Video">Play Video</div>
          </div>
        </div>
        <div className="rght-mdl-img">
          <img className="imageMDW" src={ImageMDW} alt="ImageMDW" />
        </div>
      </div>
    </div>
  )
}

export default HomeSection
