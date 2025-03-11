import React, { useState, useEffect } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './Mentor.scss';

const UserCarousel = ({ users }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  // Sample user data if none is provided
  const defaultUsers = [
    {
      id: 1,
      username: "JohnDoe",
      experience: "5 years in Web Development",
      description: "Frontend specialist with a passion for creating beautiful UI/UX designs",
      image: "https://feedocenter.com/Musers.svg"
    },
    {
      id: 2,
      username: "JaneSmith",
      experience: "8 years in UI/UX Design",
      description: "Creative designer who loves to solve complex design problems",
      image: "https://feedocenter.com/Musers.svg"
    },
    {
      id: 3,
      username: "SamWilson",
      experience: "3 years in Mobile Development",
      description: "React Native developer with a focus on performance optimization",
      image: "https://feedocenter.com/Musers.svg"
    }
  ];
  
  const userData = users || defaultUsers;
  
  const goToPrevious = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === 0 ? userData.length - 1 : prevIndex - 1
    );
  };
  
  const goToNext = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === userData.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="user-carousel-container">
      <div className="floating-images-left">
        {userData.map((user, index) => (
          index !== activeIndex && index < activeIndex && 
          <div 
            key={user.id} 
            className="floating-image"
            style={{ 
              transform: `translateY(${(index - activeIndex) * 30}px)`,
              opacity: 0.5 + (index / userData.length)
            }}
          >
            <img src={'https://feedocenter.com/Musers.svg'} alt={user.username} className="img-fluid rounded-circle" />
          </div>
        ))}
      </div>
      
      <div className="carousel-content">
        <button className="carousel-control" onClick={goToPrevious}>
          <i className="bi bi-chevron-left"></i>
        </button>
        
        <div className="user-info">
          <div className="active-user-image">
            <img src={'https://feedocenter.com/Musers.svg'} alt={userData[activeIndex].username} className="img-fluid rounded-circle" />
          </div>
          <h2 className="username">{userData[activeIndex].username}</h2>
          <div className="experience">{userData[activeIndex].experience}</div>
          <p className="description">{userData[activeIndex].description}</p>
        </div>
        
        <button className="carousel-control" onClick={goToNext}>
          <i className="bi bi-chevron-right"></i>
        </button>
      </div>
      
      <div className="floating-images-right">
        {userData.map((user, index) => (
          index !== activeIndex && index > activeIndex && 
          <div 
            key={user.id} 
            className="floating-image"
            style={{ 
              transform: `translateY(${(index - activeIndex) * 30}px)`,
              opacity: 0.5 + ((userData.length - index) / userData.length)
            }}
          >
            <img src={'https://feedocenter.com/Musers.svg'} alt={user.username} className="img-fluid rounded-circle" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserCarousel;