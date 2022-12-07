import React, {useEffect, useState} from 'react';
import Header from '../Shared/Header/Header';
import style from './Courses.module.scss';
import Footer from '../Shared/Footer/Footer';
import Button from '../Shared/Button/Button';
import { useNavigate } from 'react-router-dom';

export const Courses = () => {
  const navigate = useNavigate();
  const [courses, setCourses] = useState();

  useEffect(() => {
    fetch('/courses')
    .then((response) => response.json())
    .then((actualData) => setCourses(actualData));
  }, []);

  return (
    <div className={style.courses}>
      <Header />
      <div className={style.bodyWrapper}>
        <h1 className={style.heading}>Courses</h1>
        <h3 className={style.subHeading}>Select a Course</h3>
        <div className={style.variants}>
          {courses && courses.map((course) => (
              <div>
                <Button
                  text={course.name}
                  className={style.courseButton}
                  onClick={() => navigate(`/course/${course.symbol}`)}
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
