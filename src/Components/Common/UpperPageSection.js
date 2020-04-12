import React from "react";
 const UpperSection = ({description, title}) => {
   return (
     <div className="section-heading page-heading">
       <p className="section-description common-color">{description}</p>
       <h2 className="section-title">{title}</h2>
       <div className="animated-bar"/>
     </div>
   )
 };
 export default UpperSection;
