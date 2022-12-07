import style from './Rating.module.scss';
import ReactStars from "react-rating-stars-component";
import React from 'react';

export const Rating = ({ ep, currentRating, ratingCount }) => {
    const ratingChanged = async (newRating) => {
        const newRatingCount = (parseInt(ratingCount) + 1);
        console.log(newRatingCount);
        const rating = (currentRating * ratingCount + newRating)/newRatingCount;
        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                "rating": rating,
                "ratingCount": newRatingCount
            })
        };
        await fetch(`/rating${ep}`, requestOptions);
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
