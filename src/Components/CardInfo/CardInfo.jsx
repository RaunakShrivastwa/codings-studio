import React from "react";
import "./CardInfo.scss";
import { Check } from "react-feather";
import Title from "../../common/Title/Title";

const CardInfo = ({ title, course, mentor }) => {
  if (mentor) {
    return (
      <div className="card_info mt-5">
        <Title title={title} />
        <div className="card_info_container">
          {mentor.map((data) => (
            <div className="card_item d-none">
              <div className="img">
                {/* <img className="h-100 w-100" src={data?.img} alt="" /> */}
              </div>
              <div className="body">
                <p className="fs-24">{data?.lecture}</p>
                <small className="mb-2">{data?.desc}</small>
                <p className="fs-14">
                  <Check /> Total Lessons: ~<span>{data?.session}</span>
                </p>
                <p className="fs-14">
                  <Check /> Total Video Hours: ~<span>{data?.time}</span> hours
                </p>
                <p className="fs-14">
                  <Check /> Duration: ~<span>{data?.duration}</span> weeks
                  (depends on learning pace)
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  if (course) {
    return (
      <div className="card_info">
       <Title title={title} />
        <div className="card_info_container">
          {course.map((data) => (
            <div className="card_item">
              <div className="img">
                <span className="fs-30 img_title">{data?.lecture}</span>
                {/* <img className="h-100 w-100" src={data?.img} alt="" /> */}
              </div>
              <div className="body">
                <p className="fs-24">{data?.lecture}</p>
                <small className="mb-2">{data?.desc}</small>
                <p className="fs-14">
                  <Check /> Total Lessons: ~<span>{data?.session}</span>
                </p>
                <p className="fs-14">
                  <Check /> Total Video Hours: ~<span>{data?.time}</span> hours
                </p>
                <p className="fs-14">
                  <Check /> Duration: ~<span>{data?.duration}</span> weeks
                  (depends on learning pace)
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
};

export default CardInfo;
