import React from "react";
import {cv} from "../../../utils";
import SocialButtons from "../../Common/SocialButtons";
const CvSection = () => (
  <div className="d-block d-sm-flex align-items-center common-background p-3">
    <a
      className="btn content-download button-main button-scheme"
      href={cv}
      role="button"
      download
    >
      Download CV
    </a>
    <SocialButtons liStyles={'list-inline-item'} ulStyle={'content-follow'} />
  </div>
);
export default CvSection;
