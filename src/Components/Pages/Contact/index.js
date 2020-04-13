import React from "react";
import './index.css'
import ContactDetails from "./ContactDetails";
import ContactForm from "./ContactForm";
import Header from "../../Header/Header";
import UpperSection from "../../Common/UpperPageSection";
 const ContactPage = () => {
   return (
     <div className="lightbox-wrapper lightbox-wrapper-contact">
       <Header/>
       <div className="contact-container container">
         <div className="row">
           <div className="col-12">
             <div className="lightbox-content">
               <UpperSection title={'Get in Touch'} description={'Feel free to contact me anytime'}/>
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
