import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts";
import Title from "../../common/Title/Title";

const data = [
  { course: "MERN", students: 120 },
  { course: "Git", students: 60 },
  { course: "React", students: 95 },
  { course: "Java", students: 60 },
  { course: "javaScript", students: 150 },
  { course: "Node.js", students: 55 },
  { course: "Data Structure", students: 40 },
  { course: "Resume", students: 60 },
];

const Chart = () => {
  return (
    <div className="chart-container" style={{ width: "100%", height: 400 }}>
     <Title title="Student Enrollment per Course" />
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <XAxis dataKey="course" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="students" fill="#B0B0B0  " barSize={50} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
