import React, {useState} from 'react';
import Header from '../Shared/Header/Header';
import style from './Dashboard.module.scss';
import Footer from '../Shared/Footer/Footer';
import pen from './images/pen.svg';
import rating from './images/review.svg';
import info from './images/info.svg';
import Button from '../Shared/Button/Button';
import { useNavigate } from 'react-router-dom';

export const Dashboard = () => {
  const [review, setReview] = useState('');
  const navigate = useNavigate();

  const handleReviewChange = event => {
    setReview(event.target.value);
  };

  const handleReview = () => {
    console.log(review);
  }

  return (
    <div className={style.dashboard}>
      <Header />
      <div className={style.banner}>
        <h1 className={style.bannerHeading}>AUA Reviews</h1>
        <div className={style.bannerContent}>
          <div className={style.info}>
            <div>Rate your professors and courses! </div>
            <img src={pen} alt='pen logo' />
          </div>
          <div className={style.info}>
            <div>Leave reviews to help students who are looking to take the same course in the future!</div>
            <img src={rating} alt='pen logo' />
          </div>
          <div className={style.info}>
            <div>Find information about the courses you want to take!</div>
            <img src={info} alt='pen logo' />
          </div>
        </div>
      </div>
      <div className={style.review}>
        <label className={style.question}>
          <div>Loved our idea? Send us your review</div>
          <textarea onChange={handleReviewChange}/>
        </label>
        <Button className={style.send} text={'Send'} onClick={handleReview} />
      </div>
      <div className={style.navigationWrapper}>
        <h2 className={style.selectHeading}>Select a course or instructor </h2>
        <div className={style.selectButtons}>
          <Button className={style.select} text={'Courses'} onClick={() => navigate('/courses')}  />
          <Button className={style.select} text={'Instructors'}  onClick={() => navigate('/instructors')}/>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Dashboard;
