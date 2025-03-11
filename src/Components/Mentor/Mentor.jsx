import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import Title from '../../common/Title/Title';

const Mentor = () => {
  // Sample mentor data - replace with your actual data
  const [mentors, setMentors] = useState([
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      title: "Senior AI Researcher",
      company: "TechInnovate Labs",
      expertise: ["Machine Learning", "Neural Networks", "Data Science"],
      imageUrl: "https://randomuser.me/api/portraits/women/32.jpg",
      bio: "Ph.D. in Computer Science with over 15 years of experience in AI research and development.",
      contact: "sarah.johnson@example.com"
    },
    {
      id: 2,
      name: "Michael Chen",
      title: "Lead Software Architect",
      company: "Global Solutions Inc.",
      expertise: ["System Design", "Cloud Architecture", "DevOps"],
      imageUrl: "https://randomuser.me/api/portraits/men/46.jpg",
      bio: "Specializes in scalable software architecture with a focus on cloud-native solutions.",
      contact: "michael.chen@example.com"
    },
    {
      id: 3,
      name: "Dr. Amina Patel",
      title: "Blockchain Consultant",
      company: "FinTech Innovations",
      expertise: ["Blockchain", "Cryptocurrency", "Smart Contracts"],
      imageUrl: "https://randomuser.me/api/portraits/women/65.jpg",
      bio: "Leading expert in blockchain technologies with publications in top journals.",
      contact: "amina.patel@example.com"
    },
    {
      id: 4,
      name: "James Wilson",
      title: "UX Design Director",
      company: "Creative Design Studio",
      expertise: ["User Experience", "UI Design", "Design Systems"],
      imageUrl: "https://randomuser.me/api/portraits/men/22.jpg",
      bio: "Award-winning designer with a passion for creating intuitive user experiences.",
      contact: "james.wilson@example.com"
    }
  ]);

  // State for the currently selected mentor (for modal view)
  const [selectedMentor, setSelectedMentor] = useState(null);

  return (
    <div className="container py-5 mt-5">
      <div className="row mb-4">
        <div className="col-12 text-center">
         <Title title={"Our Experts Mentor"} />
          <p className="lead text-muted">Learn from industry experts who guide our program</p>
          <hr className="my-4 mx-auto" style={{ width: "50%" }} />
        </div>
      </div>

      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
        {mentors.map(mentor => (
          <div className="col" key={mentor.id}>
            <div className="card h-100 shadow-sm hover-card">
              <div className="text-center pt-4">
                <img 
                  src={mentor.imageUrl} 
                  className="rounded-circle mb-3" 
                  alt={mentor.name} 
                  style={{ width: "120px", height: "120px", objectFit: "cover" }}
                />
              </div>
              <div className="card-body text-center">
                <h5 className="card-title fw-bold">{mentor.name}</h5>
                <p className="text-muted mb-1">{mentor.title}</p>
                <p className="small text-muted">{mentor.company}</p>
                
                <div className="mb-3">
                  {mentor.expertise.map((skill, index) => (
                    <span key={index} className="badge bg-light text-dark me-1 mb-1">
                      {skill}
                    </span>
                  ))}
                </div>
                
                <button 
                  className="btn btn-outline-primary btn-sm" 
                  data-bs-toggle="modal" 
                  data-bs-target="#mentorModal"
                  onClick={() => setSelectedMentor(mentor)}
                >
                  View Profile
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal for mentor details */}
      <div className="modal fade" id="mentorModal" tabIndex="-1" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            {selectedMentor && (
              <>
                <div className="modal-header">
                  <h5 className="modal-title">{selectedMentor.name}</h5>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                  <div className="text-center mb-3">
                    <img 
                      src={selectedMentor.imageUrl} 
                      className="rounded-circle" 
                      alt={selectedMentor.name} 
                      style={{ width: "150px", height: "150px", objectFit: "cover" }}
                    />
                  </div>
                  <h6 className="fw-bold">{selectedMentor.title}</h6>
                  <p className="text-muted mb-3">{selectedMentor.company}</p>
                  
                  <h6 className="fw-bold mb-2">Expertise</h6>
                  <div className="mb-3">
                    {selectedMentor.expertise.map((skill, index) => (
                      <span key={index} className="badge bg-light text-dark me-1 mb-1">
                        {skill}
                      </span>
                    ))}
                  </div>
                  
                  <h6 className="fw-bold mb-2">Bio</h6>
                  <p>{selectedMentor.bio}</p>
                  
                  <h6 className="fw-bold mb-2">Contact</h6>
                  <p>{selectedMentor.contact}</p>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                  <button type="button" className="btn btn-primary">Request Mentorship</button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Custom CSS for hover effects */}
      <style jsx>{`
        .hover-card {
          transition: transform 0.3s ease;
        }
        .hover-card:hover {
          transform: translateY(-5px);
        }
      `}</style>
    </div>
  );
};

export default Mentor;