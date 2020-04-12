import React from "react";
import './index.css'

const SkillProgress = ({progress, skillName}) => {
  const progressWidth = 100 - progress;
  return (
    <div className="single-skill" data-percentage={`${progress}`}>
      <div className="skill-info">
        <span className="skill-name common-color">{skillName}</span>
        <span className="skill-percentage" style={{width: `${progressWidth}%`}}>{progress}%</span>
      </div>
      <div className="progress skill-progress">
        <div
          className="progress-bar"
          role="progressbar"
          style={{width: `${progress}%`}}
          aria-valuemin="0"
          aria-valuemax="100"/>
      </div>
    </div>
  )
};
export default SkillProgress;
