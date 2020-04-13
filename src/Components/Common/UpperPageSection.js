import React from "react";
import Typical from 'react-typical';

const UpperSection = ({description, title}) => {
   return (
     <div className="section-heading page-heading">
       <p className="section-description common-color">
         <h2 className="section-title">
           <Typical steps={[description, 5000]}/>
           </h2>
       </p>
       <h2 className="section-title">
         <Typical steps={[title, 5000]}/>
       </h2>
       <div className="animated-bar"/>
     </div>
   )
 };
 export default UpperSection;
