import React, {useState, useEffect} from 'react';
import Header from '../../Shared/Header/Header';
import style from './InstructorReviews.module.scss';
import Footer from '../../Shared/Footer/Footer';
import { useParams } from "react-router-dom";
import Rating from '../../Shared/Rating/Rating';
import Button from '../../Shared/Button/Button';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faLinkedin
  } from "@fortawesome/free-brands-svg-icons";


export const InstructorReviews = () => {
  const params = useParams();
  const [review, setReview] = useState('');
  const [instructor, setInstructor] = useState();

  useEffect(() => {
    fetch(`/instructor/${params.symbol}`)
    .then((response) => response.json())
    .then((actualData) => setInstructor(actualData[0]));
  }, []);
  
  const handleReviewChange = event => {
    setReview(event.target.value);
  };

  const handleReview = async () => {
    const textarea = document.getElementById('review');

    if (review.length > 0) {
      alert('You can see your review in a second!');
      textarea.value='';
      const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ "review": review})
      };
      await fetch(`/instructor/${params.symbol}`, requestOptions);
    }
  }

  return (
    <div className={style.instructorReviews}>
      <Header />
      { instructor && 
        <div className={style.bodyWrapper}>
          <div className={style.nameContainer}>
            <h1 className={style.heading}>{instructor.name}</h1>
            { instructor.linkedin && 
              <a href={instructor.linkedin} 
                target={"_blank"}
                className={style.linkedin}
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            }
          </div>
          <div className={style.body}>
              <div className={style.bodyLeft}>
                  <h2>Rating: {instructor.ratingCount} ratings</h2>
                  <div className={style.instructorRating}>
                      <p>{instructor.rating.toFixed(1)}</p>
                  </div>
                  <h2>Courses Taught</h2>
                  <div className={style.coursesThought}>
                      {instructor.courses.map((course) => (
                        <p>{course}</p>
                      ))}
                  </div>
              </div>
              <div className={style.bodyRight}>  
                  {instructor.img && <img src={instructor.img} alt='alt'/>}
                  <Rating ep={`/instructor/${params.symbol}`} currentRating={instructor.rating} ratingCount={instructor.ratingCount}/>
                  <textarea id='review' onChange={handleReviewChange} placeholder="Leave your rating here..."></textarea>
                  <Button text={'Send'} onClick={handleReview} className={style.sendButton}/>
                  <h3>Reviews</h3>
                  {instructor.reviews.length > 0 &&
                      instructor.reviews.map((review) => (
                          <div className={style.leftReview}>
                              {review}
                          </div>
                      ))
                  }
              </div>
          </div> 
        </div>
      }
      <Footer />
    </div>
  )
}

export default InstructorReviews;
