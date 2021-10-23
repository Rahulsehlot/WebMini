import React from 'react'
import About from '../Images/MediwheelsAboutpic.png'
import Logo from '../Images/mediwheelLogo.png'
import './StorySection.css'
function StorySection() {
  return (
    <div className="LayoutStory">
      <div className="StoryHeader">Our Brand Story</div>
      <div className="StorySectionImage">
        <img className="StorySectionImage-Img" src={About} alt="about" />
      </div>
      <div className="rght-Story">
        <div className="rght-image">
          <img className="rght-image-logo-Story" src={Logo} alt="logo" />
          <div className="rght-name">
            Medi<span> wheels.</span>
          </div>
        </div>
        <div className="Heading">
          <p>
            We are the product of 4S Group, helping people and serving in
            healthcare industry for 20+ years. With the collective experience,
            we now made a brave move into healthtech to make medicine accessible
            for everyone at any point of time.
          </p>
          <p>
            {' '}
            We believe that emergencies won’t come with invitations to be
            prepared. We Mediwheels are here to help you 24/7 serving excelence.
          </p>
        </div>
      </div>
    </div>
  )
}

export default StorySection
