import React, {useState, useEffect} from 'react';
import Header from '../Shared/Header/Header';
import style from './Instructors.module.scss';
import Footer from '../Shared/Footer/Footer';
import Button from '../Shared/Button/Button';
import { useNavigate } from 'react-router-dom';

export const Instructors = () => {
  const navigate = useNavigate();
  const [instructors, setInstructors] = useState();

  useEffect(() => {
    fetch('/instructors')
    .then((response) => response.json())
    .then((actualData) => setInstructors(actualData));
  }, []);


  return (
    <div className={style.instructors}>
      <Header />
      <div className={style.bodyWrapper}>
        <h1 className={style.heading}>Instructors</h1>
        <h3 className={style.subHeading}>Select an Instructor</h3>
        <div className={style.variants}>
            {instructors && instructors.map((instructor) => (
                <div>
                  <Button
                    text={instructor.name}
                    className={style.instructorButton}
                    onClick={() => navigate(`/instructor/${instructor.symbol}`)}
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

export default Instructors;
