import React from "react";
import Github from "react-ionicons/lib/LogoGithub";
import {facebook, github, linkedIn, twitter} from "../../utils/socialLinks";
import LinkdeIn from "react-ionicons/lib/LogoLinkedin";
import Twitter from "react-ionicons/lib/LogoTwitter";
import Facebook from "react-ionicons/lib/LogoFacebook";

const redirect = url =>  window.location.href = url;

const SocialButtons = ({liStyles, ulStyle}) => (
  <div className="fixed-block block-right">
    <ul className={`list-unstyled social-icons ${ulStyle}`}>
      <li className={liStyles}><Github onClick={() => redirect(github)} fontSize="25px" color="#fff"/></li>
      <li className={liStyles}><LinkdeIn onClick={() => redirect(linkedIn)} fontSize="25px" color="#fff"/></li>
      <li className={liStyles}><Twitter onClick={() => redirect(twitter)} fontSize="25px" color="#fff"/></li>
      <li className={liStyles}><Facebook onClick={() => redirect(facebook)} fontSize="25px" color="#fff"/></li>
    </ul>
  </div>
);
export default SocialButtons;
