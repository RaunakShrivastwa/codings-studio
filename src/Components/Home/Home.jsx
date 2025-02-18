import React from 'react'
import './Home.scss'
const Home = () => {
  return (
    <div className="home_container">
      <div className="home_wrapper">
        <p className="fs-48 m-0 title_home">Master Coding Skills for the Future</p>
        <span className='desc fs-20'>
          Join thousands of students learning to code with our expert-led
          courses
        </span>
        <span className='course_btn fs-16'>Explore Courses</span>
      </div>
    </div>
  );
}

export default Home