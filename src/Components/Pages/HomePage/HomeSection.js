import React from 'react';
import './index.css';
import SocialButtons from "../../Common/SocialButtons";

const HomeSection = () => {
  return (
    <section className="home-area element-cover-bg" id="home">
      <div className="container h-100">
        <div className="row h-100 align-items-center justify-content-center">
          <div className="col-12 col-lg-8 home-content text-center">
            <h1 className="home-name">Chariss <span>Chomba</span></h1>
            <h4 className="cd-headline clip home-headline">
              I’m a Developer
            </h4>
          </div>
        </div>
      </div>
      <div className="fixed-wrapper">
        <div className="fixed-block block-left">
          <ul className="list-unstyled languages-list">
            <li><a href="#0"><span className="single-language">ENG</span></a></li>
            <li><a href="#0"><span className="single-language">FRN</span></a></li>
            <li><a href="#0"><span className="single-language">GER</span></a></li>
            <li><a href="#0"><span className="single-language">SPA</span></a></li>
          </ul>
        </div>
        <SocialButtons/>
      </div>
    </section>
  )
};
export default HomeSection;
