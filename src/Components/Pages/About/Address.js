import React from "react";
 const Address = () => (
   <address className="content-info common-background p-3 my-1">
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
 );
 export default Address;
