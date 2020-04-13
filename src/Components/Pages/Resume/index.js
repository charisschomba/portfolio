import React from 'react';
import './index.css'
import Header from "../../Header/Header";
import SkillProgress from "../../Common/SkillProgress";
import UpperSection from "../../Common/UpperPageSection";
import {ResumeItem, ResumeItemList} from "./ResumeItem";
import {backend, frontend, tools, skills} from "../../../utils";
import SectionTitle from "./ResumeSectionTitle";

const ResumeSection = () => {
  return (
    <div className="lightbox-wrapper lightbox-wrapper-resume" id="resume" data-simplebar>
      <Header/>
      <div className="resume-wrapper">
      <div className="row">
        <div className="col-12">
        <div className="lightbox-content mt-0">
            <UpperSection title={'Resume'} description={'Check out my Resume'}/>
    <div className="resume-section single-section">
      <div className="row resume-container">
        <div className="col-12 col-md-6 resume-detail-sec">
          <div className="col-block education">
            <SectionTitle title={'Professional Experience'}/>
            <ResumeItemList listItems={frontend} listTitle={'Frontend'}/>
            <ResumeItemList listItems={backend} listTitle={'Backend'}/>
            <SectionTitle title={'Supplementary Experience'}/>
            <ResumeItemList listItems={skills} listTitle={'SKILLS'}/>
            <ResumeItemList listItems={tools} listTitle={'TOOLS'}/>
          </div>
        </div>
        <div className="col-12 col-md-6 resume-detail-sec">
          <div className="col-block experience">
            <SectionTitle title={'Education'}/>
            <ResumeItem
              itemTitle={'Bachelor of Science in Statistics and Programming'}
              itemDetails={'Machakos University / 2014 - 2017'}
              content={'Graduated with Second Class Honors.'}
            />
            <SectionTitle title={'Experience'}/>
            <ResumeItem
              itemTitle={'Software Engineer'}
              itemDetails={'Andela (Sep 2018 - Present)'}
              content={'Spearhead the design and development of customized applications and tools throughout the Agile software development lifecycle. Drive development from concept through testing and implementation to achieve all project milestones.'}
            />
            <ResumeItem
              itemTitle={'Frontend Engineer'}
              itemDetails={'Nursefly (Sep 2019 - Nov 2019)'}
              content={'Worked on social authentication(Facebook and LinkedIn) by fixing major bugs as well as trivial features that improved recruiters accounts and nurses accounts, these features improved user experience.'}
            />
            <ResumeItem
              itemTitle={'Fullstack Engineer'}
              itemDetails={'VIISAUS (Jan 2019 - Mar 2019)'}
              content={'I worked on the authentication flow, CMS and website'}
            />
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
        <div className="row p-3">
        <div className="col-12 col-md-6 mb-3 common-background">
          <h5 className="item-title pt-2">Frontend</h5>
          <SkillProgress progress={95} skillName={'React Js'}/>
          <SkillProgress progress={93} skillName={'HTML/CSS'}/>
          <SkillProgress progress={90} skillName={'Redux'}/>
          <SkillProgress progress={80} skillName={'Angular 7'}/>
          <SkillProgress progress={70} skillName={'React Native'}/>
          <SkillProgress progress={65} skillName={'TypeScript'}/>
        </div>
        <div className="col-12 col-md-6 mb-3 common-background">
          <h5 className="item-title pt-2">Backend</h5>
          <SkillProgress progress={80} skillName={'Node Js'}/>
          <SkillProgress progress={80} skillName={'Express JS'}/>
          <SkillProgress progress={78} skillName={'Python'}/>
          <SkillProgress progress={68} skillName={'MongoDB'}/>
          <SkillProgress progress={70} skillName={'SQL'}/>
          <SkillProgress progress={50} skillName={'GraphQL'}/>
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
