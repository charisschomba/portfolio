import React from "react";
import { Wave } from "react-animated-text";

const UpperSection = ({description, title}) => {
   return (
     <div className="section-heading page-heading">
       <p className="section-description common-color"><Wave effect="verticalFadeIn" text={description}/></p>
       <h2 className="section-title"><Wave effect="verticalFadeIn" text={title}/></h2>
       <div className="animated-bar"/>
     </div>
   )
 };
 export default UpperSection;
