import React from "react";
import "./CardInfo.scss";
import { Check } from "react-feather";

const CardInfo = ({ title, course, mentor }) => {
  if (mentor) {
   return (
     <div className="card_info mt-5">
       <p className="fs-36 title text-center">{title}</p>
       <div className="card_info_container">
         {mentor.map((data) => (
           <div className="card_item mb-3">
             <div className="img">
               <img className="h-100 w-100" src={data?.img} alt="" />
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
      <div className="card_info mt-5">
        <p className="fs-36 title text-center">{title}</p>
        <div className="card_info_container">
          {course.map((data) => (
            <div className="card_item mb-3">
              <div className="img">
                <img className="h-100 w-100" src={data?.img} alt="" />
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
