import React from 'react';
import SocialButtons from '../../Common/SocialButtons';
import Header from '../../Header/Header';
import UpperSection from '../../Common/UpperPageSection';
import './index.css';
import image from '../../../assets/img/me.jpg'
import AboutSection from './AboutSection';

const AboutMe = () => {
  return (
    <div className="lightbox-wrapper" id="about" data-simplebar>
      <Header/>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="lightbox-content">
              <div className="row">
                <div className="col-12">
                  <UpperSection title={'About Me'} description={'Get to know me'}/>
                  <div className="info-section single-section">
                    <div className="row align-items-center">
                      <div className="col-12 col-lg-5 info-img">
                        <img className="img-fluid img-thumbnail" src={image} alt="About"/>
                      </div>
                      <AboutSection/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
     </div>
  )
};

export default AboutMe;
