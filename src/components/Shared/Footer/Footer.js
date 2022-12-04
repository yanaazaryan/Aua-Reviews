import style from './Footer.module.scss';
import React from 'react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <div className={style.footer}>
      <div className={style.menu}>
        <Link to='/'>
          <p className={style.main}>Main</p>
        </Link>
        <Link to='/courses'>
          <p className={style.courses}>Courses</p>
        </Link>
        <Link to='/instructors'>
          <p className={style.instructors}>Instructors</p>
        </Link>
      </div>
      <div className={style.rights}>
        © 2022 Yerevan AM, Inc. All Rights Reserved
      </div>
    </div>
  )
}

export default Footer;
