import React from "react";
import {Wave} from "react-animated-text";
import Typical from "react-typical";

const GetInTouchSection = () => (
  <div className="row">
    <div className="col-12">
      <div className="section-heading page-heading">
        <p className="section-description common-color">
          <Typical steps={['Feel free to contact me anytime', 5000]}/>
        </p>
        <h2 className="section-title">
          <Typical steps={['Get in Touch', 5000]}/>
        </h2>
          <div className="animated-bar"/>
      </div>
    </div>
  </div>
);
export default GetInTouchSection;
