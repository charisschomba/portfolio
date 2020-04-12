import React from "react";
import './index.css'
 const ContactDetailItem = ({Icon, infoValue, infoType}) => {
   return (
     <li>
       <div className="media align-items-center">
         <span className="info-icon">
           <Icon fontSize="45px" color="#009e66"/>
         </span>
         <div className="media-body info-details">
           <h6 className="info-type">{infoType}</h6>
           <span className="info-value">{infoValue}</span>
         </div>
       </div>
     </li>
   )
 };
 export default ContactDetailItem;
