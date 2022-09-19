import React from "react";
import "./teamSection.css";
import t1 from "../Images/t1.jpg";
import t2 from "../Images/t2.jpg";
import t3 from "../Images/t3.jpg";
import t4 from "../Images/t4.png";

function TeamSectionN() {
  return (
    <div className="CenterContainer">
      <div className="CenterContainerN">
        <div className="teamSection_headin">
          Our Superstars who made it happen.
        </div>
      </div>
      <div className="teamSection-imageContainer">
        <div className="member1">
          <img className="as" src={t4} alt="about" />
          Shiva Kumar
          <p>
            Medicine on the wheels at any time to your door step straight from
            your Local Pharmacy.
          </p>
        </div>
        <div className="member2">
          <img className="as" src={t4} alt="about" />
          Sathwika K S
          <p>
            Medicine on the wheels at any time to your door step straight from
            your Local Pharmacy.
          </p>
        </div>
        <div className="member3">
          <img className="as" src={t4} alt="about" />
          Sid
          <p>
            Medicine on the wheels at any time to your door step straight from
            your Local Pharmacy.
          </p>
        </div>
        <div className="member4">
          <img className="as" src={t4} alt="about" />
          Jennifer Lee Moon
          <p>
            Medicine on the wheels at any time to your door step straight from
            your Local Pharmacy.
          </p>
        </div>
      </div>
    </div>
  );
}

export default TeamSectionN;
