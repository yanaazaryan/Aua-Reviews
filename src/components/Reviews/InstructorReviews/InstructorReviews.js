import React, {useState} from 'react';
import Header from '../../Shared/Header/Header';
import style from './InstructorReviews.module.scss';
import Footer from '../../Shared/Footer/Footer';
import data from '../../../data/AuaReviewsData';
import { useParams } from "react-router-dom";
import Rating from '../../Shared/Rating/Rating';
import Button from '../../Shared/Button/Button';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faLinkedin
  } from "@fortawesome/free-brands-svg-icons";


export const InstructorReviews = () => {
  const params = useParams();
  const instructor = data['instructors'].find(instructor => instructor.id === params.id);
  const [review, setReview] = useState('');

  const handleReviewChange = event => {
    setReview(event.target.value);
  };

  const handleReview = () => {
    console.log(review);
  }

  return (
    <div className={style.instructorReviews}>
      <Header />
      <div className={style.bodyWrapper}>
        <div className={style.nameContainer}>
          <h1 className={style.heading}>{instructor.name}</h1>
          <a href={instructor.linkedin} 
            target={"_blank"}
            className={style.linkedin}
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>
        <div className={style.body}>
            <div className={style.bodyLeft}>
                <h2>Rating: {instructor.ratingCount} ratings</h2>
                <div className={style.instructorRating}>
                    <p>{instructor.rating}</p>
                </div>
                <h2>Courses Thought</h2>
                <div className={style.coursesThought}>
                    {instructor.courses.map((course) => (
                      <p>{course}</p>
                    ))}
                </div>
            </div>
            <div className={style.bodyRight}>  
                <img src={instructor.img} alt='image'/>
                <Rating />
                <textarea onChange={handleReviewChange} placeholder="Leave your rating here..."></textarea>
                <Button text={'Send'} onClick={handleReview} className={style.sendButton}/>
                <h3>Reviews</h3>
                {instructor.reviews.length > 0 &&
                    instructor.reviews.map((review) => (
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

export default InstructorReviews;
