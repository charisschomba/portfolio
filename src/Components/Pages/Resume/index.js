import React from 'react';
import './index.css'
import Header from "../../Header/Header";
import SkillProgress from "../../Common/SkillProgress";
import UpperSection from "../../Common/UpperPageSection";

const ResumeSection = () => {
  return (
    <div className="lightbox-wrapper lightbox-wrapper-resume" id="resume" data-simplebar>
      <Header/>
      <div className="container">
      <div className="row">
        <div className="col-12">
        <div className="lightbox-content">
            <UpperSection title={'Resume'} description={'Check out my Resume'}/>
    <div className="resume-section single-section">
      <div className="row resume-container">
        <div className="col-12 col-md-6">
          <div className="col-block education">
            <h3 className="col-title">Education</h3>
            <div className="resume-item"><span className="item-arrow"/>
              <h5 className="item-title">Computer Science</h5><span className="item-details common-color">Cambridge University / 2004 - 2007</span>
              <p className="item-description common-color">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio quo repudiandae.</p>
            </div>
            <div className="resume-item"><span className="item-arrow"/>
              <h5 className="item-title">Bachelor Degree</h5><span className="item-details common-color">University of Tokyo / 2008 - 2010</span>
              <p className="item-description common-color">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio quo repudiandae.</p>
            </div>
            <div className="resume-item"><span className="item-arrow"/>
              <h5 className="item-title">Master Degree</h5><span className="item-details common-color">Harvard University / 2012 - 2015</span>
              <p className="item-description common-color">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio quo repudiandae.</p>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6">
          <div className="col-block experience">
            <h3 className="col-title">Experience</h3>
            <div className="resume-item"><span className="item-arrow"/>
              <h5 className="item-title">Software Engineer</h5><span className="item-details common-color">Adobe / 2015 - 2017</span>
              <p className="item-description common-color">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio quo
                repudiandae.</p>
            </div>
            <div className="resume-item"><span className="item-arrow"/>
              <h5 className="item-title">Back-End Developer</h5><span
                className="item-details common-color">Google / 2017 - 2018</span>
              <p className="item-description common-color">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio quo
                repudiandae.</p>
            </div>
            <div className="resume-item"><span className="item-arrow"/>
              <h5 className="item-title">UI/UX Designer</h5><span
                className="item-details common-color">Discord / 2019 - Present</span>
              <p className="item-description common-color">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio quo
                repudiandae.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="skills-section single-section">
        <div className="row">
          <div className="col-12">
            <div className="section-heading mb-3">
              <p className="section-description common-color mt-5">My level of knowledge in some tools</p>
              <h2 className="section-title">My Skills</h2>
            </div>
          </div>
        </div>
        <div className="row common-background p-3">
        <div className="col-12 col-md-6 mb-3">
          <SkillProgress progress={90} skillName={'Javascript'}/>
          <SkillProgress progress={95} skillName={'React Js'}/>
          <SkillProgress progress={65} skillName={'React Native'}/>
          <SkillProgress progress={70} skillName={'Angular 2'}/>
        </div>
        <div className="col-12 col-md-6 mb-3">
          <SkillProgress progress={78} skillName={'Python'}/>
          <SkillProgress progress={80} skillName={'Node Js'}/>
          <SkillProgress progress={80} skillName={'Express JS'}/>
          <SkillProgress progress={68} skillName={'MongoDB'}/>
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
export default ResumeSection;
