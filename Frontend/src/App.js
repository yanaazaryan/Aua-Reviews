import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';
import Courses from './components/Courses/Courses';
import Instructors from './components/Instructors/Instructors';
import InstructorReviews from './components/Reviews/InstructorReviews/InstructorReviews';
import CourseReviews from './components/Reviews/CourseReviews/CourseReviews';

function App() {
  return (
    <div>
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/courses' element={<Courses />} />
          <Route path='/course/:symbol' element={<CourseReviews />} />
          <Route path='/instructors' element={<Instructors />} />
          <Route path='/instructor/:symbol' element={<InstructorReviews />} />
        </Routes>
    </div>
  );
}

export default App;
