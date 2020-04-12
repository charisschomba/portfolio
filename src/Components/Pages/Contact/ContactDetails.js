import React from "react";
import IosIonic from 'react-ionicons/lib/IosIonic';
import Map from 'react-ionicons/lib/MdMap';
import Call from 'react-ionicons/lib/MdCall';
import Send from 'react-ionicons/lib/MdSend';

import ContactDetailItem from "./ContactDetailItem";
const ContactDetails = () => {
  return (
    <div className="col-12 col-lg-5">
      <div className="contact-info">
        <h4 className="content-title">Contact Info</h4>
        <p className="info-description common-color">Always available for freelance work if the right project comes along, Feel free
          to contact me!</p>
        <ul className="list-unstyled list-info common-color common-background p-3">
          <ContactDetailItem Icon={IosIonic} infoType={'Name'} infoValue={'Chariss Chomba'}/>
          <ContactDetailItem Icon={Map} infoType={'Location'} infoValue={'Nairobi, Kenya'}/>
          <ContactDetailItem Icon={Call} infoType={'Call Me'} infoValue={'+254720590196'}/>
          <ContactDetailItem Icon={Send} infoType={'Email'} infoValue={'charisschomba@gmail.com'}/>
        </ul>
      </div>
    </div>
  )
};
export default ContactDetails;
