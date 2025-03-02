import React from "react";
import "./Home.scss";
import Banner from "../Banner/Banner";
import Counter from "../Counter/Counter";
import CardInfo from "../CardInfo/CardInfo";
import CourseInfoTable from "../CourseInfoTable/CourseInfoTable";
const Home = () => {
  const data = [
    { counter_key: "20+", counter_value: "Our Courses" },
    { counter_key: "10+", counter_value: "Experts Mentors" },
    { counter_key: "2+", counter_value: "Our Tools" },
  ];

  const featured = [
    {
      lecture: "JavaScript",
      desc: "Advanced Topics and Practicals",
      img: "https://wallpapercave.com/wp/wp12456163.jpg",
      session: "25-30",
      time: "25-30",
      duration: "3-6",
    },
    {
      lecture: "JavaScript",
      desc: "Advanced Topics and Practicals",
      img: "https://wallpapercave.com/wp/wp12456163.jpg",
      session: "25-30",
      time: "25-30",
      duration: "3-6",
    },
    {
      lecture: "JavaScript",
      desc: "Advanced Topics and Practicals",
      img: "https://wallpapercave.com/wp/wp12456163.jpg",
      session: "25-30",
      time: "25-30",
      duration: "3-6",
    },
  ];

  const mentor = [
    {
      name: "Shubham Shri.",
      img: "",
      proffesion: "Director and C.O",
      Exprince: "2+ Years",
    },
    {
      name: "Shubham Shri.",
      img: "",
      proffesion: "Director and C.O",
      Exprince: "2+ Years",
    },
    {
      name: "Shubham Shri.",
      img: "",
      proffesion: "Director and C.O",
      Exprince: "2+ Years",
    }
  ]

  return (
    <div className="home_container">
      <Banner
        title={" Master Coding Skills for the Future"}
        desc={
          " Join thousands of students learning to code with our expert-led courses"
        }
      />
      <Counter data={data} />
      <CardInfo title={"Featured Programs"} course={featured} />
      <CardInfo title={"Upcoming Courses"} course={featured} />
      <CourseInfoTable />
      {/* <CardInfo title={"Experts Mentors"} mentor={mentor} /> */}
    </div>
  );
};

export default Home;
