import React from 'react';
import './index.css';
import SocialButtons from "../../Common/SocialButtons";
import Typical from 'react-typical'

const HomeSection = () => {
  return (
    <section className="home-area element-cover-bg" id="home">
      <div className="container h-100">
        <div className="row h-100 align-items-center justify-content-center">
          <div className="col-12 col-lg-8 home-content text-center">
            <h1 className="home-name">
              <Typical steps={['Hey friend 🖐', 2000, 'Meet Chariss Chomba', 2000]}/>
            </h1>
            <h4 className="cd-headline clip home-headline" style={{marginBottom: '30px'}}>
            </h4>
            <p className="content-desc-home text-white py-1">
                Fueled by high energy levels and boundless enthusiasm,
                'I’m easily inspired and more then willing to learn new and acquire new skills.
                'I’m passionate, expressive, multi-talented spirit with a natural ability to work collaboratively.
                'I’m never satisfied to just come up with ideas. Instead I have an almost impulsive need to act on them
            </p>
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
