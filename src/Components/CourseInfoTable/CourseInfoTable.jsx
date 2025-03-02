import React from "react";

const CourseInfoTable = () => {
  return (
    <div className="comparison-wrapper d-flex flex-column gap-2 mb-4">
        <p className="text-center">Codings Studio Advantages</p>
      <div className="comparison-container">
        {/* Header */}
        <div className="header-section">
          <div className="logo-container">
            <div className="logo">C</div>
          </div>
          <div className="navigation">
            <span>Free resources</span>
            <span>Other courses</span>
          </div>
        </div>

        {/* Comparison Table */}
        <div className="comparison-table">
          {/* Row 1 */}
          <div className="feature-row">
            <div className="feature-name">
              Structured + problem solving based
            </div>
            <div className="feature-status">
              <span className="check-icon">✓</span>
            </div>
            <div className="feature-status">
              <span className="x-icon">✕</span>
            </div>
            <div className="feature-status">
              <span className="check-icon">✓</span>
            </div>
          </div>

          {/* Row 2 */}
          <div className="feature-row">
            <div className="feature-name">Fastest 1:1 doubt support</div>
            <div className="feature-status">
              <span className="check-icon">✓</span>
            </div>
            <div className="feature-status">
              <span className="x-icon">✕</span>
            </div>
            <div className="feature-status">
              <span className="x-icon">✕</span>
            </div>
          </div>

          {/* Row 3 */}
          <div className="feature-row">
            <div className="feature-name">Integrated prep platform</div>
            <div className="feature-status">
              <span className="check-icon">✓</span>
            </div>
            <div className="feature-status">
              <span className="x-icon">✕</span>
            </div>
            <div className="feature-status">
              <span className="x-icon">✕</span>
            </div>
          </div>

          {/* Row 4 */}
          <div className="feature-row">
            <div className="feature-name">Profiles highlighted on Naukri</div>
            <div className="feature-status">
              <span className="check-icon">✓</span>
            </div>
            <div className="feature-status">
              <span className="x-icon">✕</span>
            </div>
            <div className="feature-status">
              <span className="x-icon">✕</span>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="footer-section">
          {/* Coding Ninjas Section */}
          <div className="brand-section">
            <div className="brand-info">
              <div className="brand-logo">C</div>
              <span className="brand-name">
                coding<span className="ninjas">ninjas</span>
              </span>
              <div className="brand-tagline">
                <span>Your dream role, faster and with confidence!</span>
                <span className="lightning">⚡</span>
              </div>
            </div>
            <div className="gradient-progress"></div>
          </div>

          {/* Others Section */}
          <div className="others-section">
            <div className="others-info">
              <span className="others-name">Others</span>
              <span className="others-tagline">
                Average role, under-confident
              </span>
            </div>
            <div className="gray-progress"></div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .comparison-wrapper {
          display: flex;
        //   justify-content: center;
          align-items: center;
          width: 100%;
        //   height: 100vh;
        //   background-color: #121212;
        //   padding: 1rem;
        }

        .comparison-container {
          width: 100%;
          max-width: 800px;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.5);
          background-color: #121212;
          color: white;
        }

        .header-section {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem;
        }

        .logo {
          width: 2rem;
          height: 2rem;
          border-radius: 50%;
          background-color: #ff6b00;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
          color: white;
        }

        .navigation {
          display: flex;
          gap: 2rem;
        }

        .navigation span {
          color: #cccccc;
        }

        .comparison-table {
          margin-top: 3rem;
          margin-bottom: 1rem;
        }

        .feature-row {
          display: grid;
          grid-template-columns: 1fr repeat(3, 80px);
          align-items: center;
          padding: 1rem 0;
          border-bottom: 1px solid #333;
        }

        .feature-name {
          padding-left: 3rem;
          color: #cccccc;
        }

        .feature-status {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .check-icon {
          color: #4caf50;
          font-size: 1.2rem;
        }

        .x-icon {
          color: #666;
          font-size: 1.2rem;
        }

        .footer-section {
          margin-top: 4rem;
          margin-bottom: 2rem;
        }

        .brand-section,
        .others-section {
          padding: 0 3rem;
          margin-bottom: 1.5rem;
        }

        .brand-info,
        .others-info {
          display: flex;
          align-items: center;
          margin-bottom: 0.5rem;
        }

        .brand-logo {
          width: 2rem;
          height: 2rem;
          border-radius: 50%;
          background-color: #ff6b00;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
          color: white;
          margin-right: 0.5rem;
        }

        .brand-name {
          font-weight: bold;
          margin-right: auto;
        }

        .ninjas {
          color: #777;
        }

        .brand-tagline {
          display: flex;
          align-items: center;
          color: #ff4081;
          margin-left: auto;
        }

        .lightning {
          color: #ffd700;
          margin-left: 0.5rem;
        }

        .gradient-progress {
          height: 4px;
          width: 100%;
          background: linear-gradient(to right, #ff4081, #ff6b00, #ffd700);
        }

        .others-name {
          font-weight: bold;
          color: #cccccc;
          margin-right: auto;
        }

        .others-tagline {
          color: #777;
        }

        .gray-progress {
          height: 4px;
          width: 100%;
          background-color: #444;
        }
      `}</style>
    </div>
  );
};

export default CourseInfoTable;
