import style from './Rating.module.scss';
import ReactStars from "react-rating-stars-component";
import React from 'react';

export const Rating = ({ count, rating}) => {
    const ratingChanged = (newRating) => {
        console.log(newRating);
    };

    return (
        <div className={style.ratingContainer}>
            <div className={style.ratingHeading}>
                Leave a Rating!
            </div>
            <ReactStars
                count={5}
                onChange={ratingChanged}
                size={23}
                activeColor="#ffd700"
            />
        </div>
    )
}

export default Rating;
