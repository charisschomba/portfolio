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
            <h4 className="cd-headline clip home-headline" style={{marginBottom: '30px'}}>
              I’m a SoftWare  Developer
            </h4>
            <p className="content-desc text-white py-1">
              I don’t like to define myself by the work I’ve done. I define myself by the work I want to do.
              Skills can be taught, personality is inherent.
              I prefer to keep learning, continue challenging myself, and do interesting things that matter.
            </p>
            <p className="content-desc text-white py-1">
              Fueled by high energy levels and boundless enthusiasm,
              I’m easily inspired and more then willing to follow my fascinations wherever they take me.
              I’m passionate, expressive, multi-talented spirit with a natural ability to entertain and inspire.
              I’m never satisfied to just come up with ideas. Instead I have an almost impulsive need to act on them
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
