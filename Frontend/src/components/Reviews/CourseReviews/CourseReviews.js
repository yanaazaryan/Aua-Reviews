import React, {useState, useEffect} from 'react';
import Header from '../../Shared/Header/Header';
import style from './CourseReviews.module.scss';
import Footer from '../../Shared/Footer/Footer';
import Rating from '../../Shared/Rating/Rating';
import { useParams } from "react-router-dom";
import Button from '../../Shared/Button/Button';

export const CourseReviews = () => {
    const params = useParams();
    const [review, setReview] = useState('');
    const [course, setCourse] = useState();

    useEffect(() => {
      fetch(`/course/${params.symbol}`)
      .then((response) => response.json())
      .then((actualData) => setCourse(actualData[0]));
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
        await fetch(`/course/${params.symbol}`, requestOptions);
      }
    }

    return (
    <div className={style.courseReviews}>
      <Header />
      {course && <div className={style.bodyWrapper}>
          <h1 className={style.heading}>{course.name}</h1>
          <div className={style.about}>{course.about}</div>
          <div className={style.body}>
              <div className={style.bodyLeft}>
                  <h2>Instructor: {course.instructor}</h2>
                  <h2>Clusters: {course.clusters}</h2>
                  <h2>Credits: {course.credits}</h2>
                  <h2>Rating: {course.ratingCount} ratings</h2>
                  <div className={style.courseRating}>
                      <p>{course.rating.toFixed(1)}</p>
                  </div>
                  <h2>Workload</h2>
                  <div className={style.workload}>
                      {course.workload}
                  </div>
              </div>
              <div className={style.bodyRight}>  
                  <Rating ep={`/course/${params.symbol}`} currentRating={course.rating} ratingCount={course.ratingCount}/>
                  <textarea id='review' onChange={handleReviewChange} placeholder="Leave your rating here..."></textarea>
                  <Button text={'Send'} onClick={handleReview} className={style.sendButton}/>
                  <h3>Reviews</h3>
                  {course.reviews.length > 0 &&
                    course.reviews.map((review) => (
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

export default CourseReviews;
