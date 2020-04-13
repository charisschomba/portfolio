import React from "react";
import Address from "./Address";
import CvSection from "./CvSection";
import ContentDesc from "./ContentDesc";

const AboutSection = () => {
  return (
    <div className="col-12 col-lg-7 info-content">
      <div className="content-block">
        <h2 className="content-subtitle">Who am i?</h2>
        <h6 className="content-title">I'm Chariss Chomba, a Fullstack Developer</h6>
       <ContentDesc/>
       <Address/>
       <CvSection/>
      </div>
    </div>
  )
};

export default AboutSection;
