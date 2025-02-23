import React from 'react';
import './Banner.scss';

const Banner = ({title,desc}) => {
  return (
    <div className="home_wrapper">
      <p className="fs-48 m-0 title_home">
         {title}
      </p>
      <span className="desc fs-20">
        {desc}
      </span>
      <span className="course_btn fs-16">Explore Courses</span>
    </div>
  );
}

export default Banner