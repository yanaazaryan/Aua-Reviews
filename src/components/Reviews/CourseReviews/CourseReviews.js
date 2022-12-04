import React, {useState} from 'react';
import Header from '../../Shared/Header/Header';
import style from './CourseReviews.module.scss';
import Footer from '../../Shared/Footer/Footer';
import Rating from '../../Shared/Rating/Rating';
import data from '../../../data/AuaReviewsData';
import { useParams } from "react-router-dom";
import Button from '../../Shared/Button/Button';

export const CourseReviews = () => {
    const params = useParams();
    const course = data['courses'].find(course => course.id === params.id);
    const [review, setReview] = useState('');
  
    const handleReviewChange = event => {
      setReview(event.target.value);
    };
  
    const handleReview = () => {
      console.log(review);
    }

    return (
    <div className={style.courseReviews}>
      <Header />
      <div className={style.bodyWrapper}>
        <h1 className={style.heading}>{course.name}</h1>
        <div className={style.about}>{course.about}</div>
        <div className={style.body}>
            <div className={style.bodyLeft}>
                <h2>Instructor: {course.instructor}</h2>
                <h2>Instructor: {course.clusters}</h2>
                <h2>Instructor: {course.credits}</h2>
                <h2>Rating: {course.ratingCount} ratings</h2>
                <div className={style.courseRating}>
                    <p>{course.rating}</p>
                </div>
                <h2>Workload</h2>
                <div className={style.workload}>
                    {course.workload}
                </div>
            </div>
            <div className={style.bodyRight}>  
                <Rating />
                <textarea onChange={handleReviewChange} placeholder="Leave your rating here..."></textarea>
                <Button text={'Send'} onClick={handleReview} className={style.sendButton}/>
                <h3>Reviews</h3>
                {course.reviews.length > 0 &&
                    course.reviews.map((review) => (
                        <div className={style.leftReview}>
                            {review.text}
                        </div>
                    ))
                }
            </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default CourseReviews;
