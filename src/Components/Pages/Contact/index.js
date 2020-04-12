import React from "react";
import './index.css'
import ContactDetails from "./ContactDetails";
import ContactForm from "./ContactForm";
import GetInTouchSection from "./GetInTouch";
import Header from "../../Header/Header";
 const ContactPage = () => {
   return (
     <div className="lightbox-wrapper lightbox-wrapper-contact">
       <Header/>
       <div className="container">
         <div className="row">
           <div className="col-12">
             <div className="lightbox-content">
               <GetInTouchSection/>
               <div className="contact-section single-section">
                 <div className="row">
                   <ContactForm/>
                   <ContactDetails/>
                 </div>
               </div>
             </div>
           </div>
         </div>
       </div>
   </div>

   )
 };
 export default ContactPage;
