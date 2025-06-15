import React from 'react';
import './Banner.scss';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const banners = [
  {
    title: "Keep ,Clam and Wear , Offer Limited",
    desc: "lorem mejhreurut r t r y tryutuyu yii",
    url: "/courses/web",
    image: "https://wallpapercave.com/wp/3050yQi.jpg"
  },
  {
    title: "Master DSA & Algorithms",
    desc: "Ace interviews with powerful data structures.",
    url: "/courses/dsa",
    image: "https://wallpapercave.com/wp/wp5516903.jpg"
  },
  {
    title: "UI/UX Design",
    desc: "Design with Figma, Adobe XD and best practices.",
    url: "/courses/design",
    image: "https://taftclothing.com/cdn/shop/files/TAFT_0316_SpringRefresh_SiteAssets-HERO_Banner_desktop_Rome_image_606738fc-a00a-413a-b6f1-8da15e6b89be.jpg?v=1744832457&width=3200"
  }
];

const Banner = () => {
  return (
    <div className="banner_slider_wrapper">
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        loop
        navigation
        autoplay={{ delay: 5000 }}
      >
        {banners.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="banner_slide" style={{ backgroundImage: `url(${item.image})` }}>
              <div className="banner_overlay">
                <div className="banner_content">
                  <h2>{item.title}</h2>
                  <p>{item.desc}</p>
                  <Link to={item.url} className="course_btn">Explore Courses</Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
