import React from "react";
import { Container, Row, Col, Card, Button, Form, Nav, Navbar, Badge } from "react-bootstrap";
import './Course.scss'

function Course() {
  // Sample course data
  const courses = [
    {
      id: 1,
      title: "HTML & CSS Fundamentals",
      acronym: "HTML",
      level: "Beginner",
      description: "Learn the building blocks of web development",
      videoLessons: 32,
      codingExercises: 15,
      projects: 5,
      price: 49.99,
    },
    {
      id: 2,
      title: "JavaScript Essentials",
      acronym: "JS",
      level: "Intermediate",
      description: "Master the language of the web",
      videoLessons: 45,
      codingExercises: 25,
      projects: 8,
      price: 69.99,
    },
    {
      id: 3,
      title: "Responsive Web Design",
      acronym: "RWD",
      level: "Intermediate",
      description: "Create websites that work on all devices",
      videoLessons: 28,
      codingExercises: 12,
      projects: 6,
      price: 59.99,
    },
    {
      id: 4,
      title: "React.js Front-End Development",
      acronym: "REACT",
      level: "Advanced",
      description: "Build modern, reactive user interfaces",
      videoLessons: 52,
      codingExercises: 30,
      projects: 10,
      price: 89.99,
    },
    {
      id: 5,
      title: "Node.js Back-End Development",
      acronym: "NODE",
      level: "Advanced",
      description: "Create powerful server-side applications",
      videoLessons: 48,
      codingExercises: 28,
      projects: 9,
      price: 79.99,
    },
    {
      id: 6,
      title: "Full-Stack Web Development",
      acronym: "FS",
      level: "Advanced",
      description: "Master both front-end and back-end",
      videoLessons: 85,
      codingExercises: 45,
      projects: 15,
      price: 119.99,
    },
    {
      id: 7,
      title: "UI/UX Design for Developers",
      acronym: "UI/UX",
      level: "Intermediate",
      description: "Design beautiful, user-friendly interfaces",
      videoLessons: 42,
      codingExercises: 20,
      projects: 8,
      price: 74.99,
    },
    {
      id: 8,
      title: "MongoDB Database Design",
      acronym: "MONGO",
      level: "Intermediate",
      description: "Build scalable, flexible NoSQL databases",
      videoLessons: 36,
      codingExercises: 18,
      projects: 6,
      price: 64.99,
    },
    {
      id: 9,
      title: "Web Security Fundamentals",
      acronym: "SEC",
      level: "Advanced",
      description: "Protect your web applications from threats",
      videoLessons: 38,
      codingExercises: 22,
      projects: 7,
      price: 69.99,
    },
  ];

  // Stats data
  const stats = [
    { value: "15,000+", label: "Students Enrolled" },
    { value: "25+", label: "Professional Courses" },
    { value: "92%", label: "Completion Rate" },
    { value: "4.8/5", label: "Student Satisfaction" },
  ];

  // Filter options
  const filterOptions = ["Level", "Duration", "Price", "Rating", "Certificate"];

  return (
    <div className="app">

      {/* Hero Section */}
      <section className="hero bg-light d-flex align-item-center">
        <Container className="d-flex align-item-center justify-content-center">
          <Row className="align-items-center">
            <Col lg={6} className="mb-5 mb-lg-0">
              <h1 className="display-4 fs-48 fw-bold mb-3">Master Web Development<br />in 2025</h1>
              <p className="lead mb-4 fs-20 black-200">
                From beginner to professional, our expert-led courses will guide
                you through every step of becoming a successful web developer.
              </p>
              <div className="d-flex flex-wrap d-flex justify-content-center gap-2">
                <span className="course_btn bg-black white me-3">
                  Start Learning
                </span>
                <span className="course_btn border border-dark">
                  View Courses
                </span>
              </div>
            </Col>
            <Col lg={6}>
              <Card className="shadow-sm">
                <Card.Body className="p-4">
                  <div className="bg-light p-3 rounded mb-3">
                    <code>&lt;div class="container"&gt;</code>
                  </div>
                  <pre className="bg-white p-3 mb-0">
                    <code className="text-primary">.hero {`{`}</code><br />
                    <code className="ms-4">display: flex;</code><br />
                    <code className="ms-4">justify-content: center;</code><br />
                    <code className="ms-4">background: #f5f5f5;</code><br />
                    <code className="ms-4">border-radius: 8px;</code><br />
                    <code className="text-primary">{`}`}</code><br />
                    <code>&lt;/div&gt;</code>
                  </pre>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Stats Section */}
      <section className="stats bg-black white py-4">
        <Container>
          <Row className="text-center">
            {stats.map((stat, index) => (
              <Col key={index} md={6} lg={3} className="my-3 my-lg-0">
                <h2 className="mb-0 fs-48 white-300">{stat.value}</h2>
                <p className="mb-0 fs-16 white-100">{stat.label}</p>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Course Search Section */}
      <section id="courses" className="py-5">
        <Container>
          <h2 className="fw-bold mb-2 fs-36">Find Your Perfect Course</h2>
          <p className="lead mb-4 fs-20 black-200">Search our catalog of professional web development courses</p>

          {/* Search Bar */}
          <Row className="mb-5">
            <Col lg={10} xl={8}>
              <div className="d-flex flex-column flex-sm-row">
                <Form.Control
                  type="text"
                  placeholder="Search for courses, topics, or skills..."
                  className="flex-grow-1 me-sm-2 mb-3 mb-sm-0 py-3 px-4 rounded-pill"
                />
                <Button variant="dark" className="px-4 py-3 rounded-pill">
                  Search
                </Button>
              </div>
            </Col>
          </Row>

          {/* Filters */}
          <div className="bg-light rounded mb-5">
            <Row className="align-items-center">
              <Col xs={12} md={2} className="mb-3 mb-md-0">
                <h5 className="fw-bold m-0 fs-20">Filter By:</h5>
              </Col>
              <Col xs={12} md={6} className="p-0">
                <div className="d-flex flex-wrap">
                  {filterOptions.map((option, index) => (
                    <Button
                      key={index}
                      variant="outline-secondary"
                      className="me-2 mb-2 mb-md-0 filter_tags rounded-pill"
                    >
                      {option}
                    </Button>
                  ))}
                </div>
              </Col>
              <Col xs={12} md={4} className="mt-3 mt-md-0">
                <div className="d-flex align-items-center gap-2">
                  <h5 className="fw-bold me-2 mb-0 sort_by_text fs-20">Sort By:</h5>
                  <Form.Select className="rounded-3">
                    <option>Most Popular</option>
                    <option>Newest</option>
                    <option>Price: Low to High</option>
                    <option>Price: High to Low</option>
                  </Form.Select>
                </div>
              </Col>
            </Row>
          </div>

          {/* Course Grid */}
          <Row>
            {courses.map((course) => (
              <Col key={course.id} md={6} lg={4} className="mb-4">
                <Card className="shadow-sm border-0 rounded-3">
                  <Card.Body className="p-4">
                    <h4 className="fw-bold mb-3">{course.title}</h4>
                    <Badge bg="secondary" className="mb-3 py-2 px-3">{course.level}</Badge>
                    <p className="text-muted mb-4">{course.description}</p>

                    <hr className="my-4" style={{ borderStyle: 'dashed' }} />

                    <h6 className="fw-bold mb-3">Course Includes:</h6>
                    <ul className="list-unstyled mb-4">
                      <li className="mb-2">• {course.videoLessons} Video Lessons</li>
                      <li className="mb-2">• {course.codingExercises} Coding Exercises</li>
                      <li>• {course.projects} Real-world Projects</li>
                    </ul>

                    <div className="d-flex justify-content-between align-items-center">
                      <h4 className="fw-bold mb-0">${course.price}</h4>
                      <Button variant="dark" className="rounded-pill px-4">Enroll Now</Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>

          {/* Load More Button */}
          <div className="text-center mt-4">
            <Button variant="outline-dark" size="lg" className="px-5 py-3 rounded-pill">
              Load More Courses
            </Button>
          </div>
        </Container>
      </section>
    </div>
  );
}

export default Course;