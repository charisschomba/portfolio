import React from 'react';
import SocialButtons from '../../Common/SocialButtons';
import Header from '../../Header/Header';
import UpperSection from '../../Common/UpperPageSection';
import './index.css';
import image from '../../../assets/img/me.jpg'
import {cv} from '../../../utils';

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
                      <div className="col-12 col-lg-7 info-content">
                        <div className="content-block">
                          <h2 className="content-subtitle">Who am i?</h2>
                          <h6 className="content-title">I'm Chariss Chomba, a Fullstack Developer</h6>
                          <div className="content-description common-background">
                            <p className="content-desc common-color">I am a freelancer based in the United Kingdom and i have been building noteworthy UX/UI
                              designs and websites for years, which comply with the latest design trends. I help convert
                              a vision and an idea into meaningful and useful products. Having a sharp eye for product
                              evolution helps me prioritize tasks, iterate fast and deliver faster.</p>
                          </div>
                          <address className="content-info common-background p-3">
                            <div className="row">
                              <div className="col-12 col-md-6 single-info"><span>Name:</span>
                                <p className="common-color">Chariss Chomba</p>
                              </div>
                              <div className="col-12 col-md-6 single-info"><span>Email:</span>
                                <p><a href="mailto:charisschomba@gmail.com">charisschomba@gmail.com</a></p>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-12 col-md-6 single-info"><span>Age:</span>
                                <p className="common-color">{new Date().getFullYear()-1994}</p>
                              </div>
                              <div className="col-12 col-md-6 single-info"><span>From:</span>
                                <p className="common-color">Nairobi, Kenya</p>
                              </div>
                            </div>
                          </address>
                          <div className="d-block d-sm-flex align-items-center common-background">
                            <a
                              className="btn content-download button-main button-scheme"
                              href={cv}
                              role="button"
                              download
                            >
                              Download CV
                            </a>
                            <SocialButtons liStyles={'list-inline-item'} ulStyle={'content-follow'} />
                          </div>

                        </div>
                      </div>

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
