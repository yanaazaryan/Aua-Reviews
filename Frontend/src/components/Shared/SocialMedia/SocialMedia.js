import style from './SocialMedia.module.scss';
import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebook,
    faTwitter,
    faInstagram
  } from "@fortawesome/free-brands-svg-icons";

export const SocialMedia = () => {
  return (
    <div className={style.socialMedia}>
        <a href="https://www.facebook.com/" 
          target={"_blank"}
          className={style.facebook}
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a href="https://www.twitter.com/" 
          target={"_blank"}
          className={style.twitter}
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a href="https://www.instagram.com/"
          target={"_blank"}
          className={style.instagram} 
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faInstagram} />
        </a>
    </div>
  )
}

export default SocialMedia;
