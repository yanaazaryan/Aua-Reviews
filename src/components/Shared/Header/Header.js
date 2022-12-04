import React from 'react';
import style from './Header.module.scss';
import SocialMedia from '../SocialMedia/SocialMedia';
import { Link } from 'react-router-dom';

export const Header = () => {
    return (
        <div className={style.header}>
            <div className={style.logoContainer}>
                <img 
                    className={style.logo}
                    src='https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img/https://aua.am/wp-content/uploads/2018/06/aualogo.png'
                    alt='Aua logo'
                />
            </div>
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
            <div className={style.socialMedia}>
                <SocialMedia />
            </div>
        </div>
    )
}

export default Header;
