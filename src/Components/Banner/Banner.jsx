import React from 'react';
import './Banner.scss';
import { Link } from 'react-router-dom';

const Banner = ({ title, desc, url }) => {
  console.log(title);
  
  return (
    <div className="home_wrapper">
      <p className="fs-48 m-0 title_home">
         {title}
      </p>
      <span className="desc fs-20">
        {desc}
      </span>
    
      {url ? (<Link to={url} className="course_btn fs-16">Explore Courses</Link>): (<span className = "course_btn fs-16">Explore Courses</span>)}
    </div>
  );
}

export default Banner