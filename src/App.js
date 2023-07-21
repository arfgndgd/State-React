import './App.css';
import Course from './Course';
import { useState } from 'react';

function getRandomCourse() {
  const courseArray = ['Angular', 'Bootstrap', 'Ccsharp', 'KompleWeb'];
  return courseArray[Math.floor(Math.random()*courseArray.length)];
}

function App() {
  const [courses, setCourses] = useState([])
  const handleClick = () => {
    setCourses([...courses, getRandomCourse()])

  }
  return (
    <div className="App">
      <button onClick={handleClick}>Kurs Ekle</button>
      {
        courses.map((course, index) => {
          return <Course key={index} courseName={course}/>
        })
      }
    </div>
  );
}

export default App;
