import React from 'react';
import Header from '../Shared/Header/Header';
import style from './Courses.module.scss';
import Footer from '../Shared/Footer/Footer';
import Button from '../Shared/Button/Button';
import data from '../../data/AuaReviewsData';
import { useNavigate } from 'react-router-dom';

export const Courses = () => {
  const navigate = useNavigate();

  return (
    <div className={style.courses}>
      <Header />
      <div className={style.bodyWrapper}>
        <h1 className={style.heading}>Courses</h1>
        <h3 className={style.subHeading}>Select a Course</h3>
        <div className={style.variants}>
          {data.courses.map((course) => (
              <div>
                <Button
                  text={course.name}
                  className={style.courseButton}
                  onClick={() => navigate(`/course/${course.id}`)}
                />
              </div>
            ))
          }
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Courses;
