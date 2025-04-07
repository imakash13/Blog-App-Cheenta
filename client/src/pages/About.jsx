import React, { useState } from "react";
import "../styles/About.css";

export default function About() {
  const [activeSection, setActiveSection] = useState(null);

  const toggleSection = (index) => {
    setActiveSection(activeSection === index ? null : index);
  };

  return (
    <div className="about-container">
      <h2 className="about-title">About This Application</h2>
      
      <div className="accordion">
        <div className="accordion-item">
          <button onClick={() => toggleSection(0)} className="accordion-button">
            About This Application
          </button>
          <div className={`accordion-content ${activeSection === 0 ? "active" : ""}`}>
            <p>
            <li><strong>Empower Your Voice:</strong> We believe everyone has a story to tell, and our app provides the tools to help you express yourself freely and creatively.</li>
            <li><strong>Stay Connected:</strong> Build meaningful connections with your readers and fellow bloggers through interactive features and social sharing.</li>
            <li><strong>Continuous Improvement:</strong> We're committed to enhancing your blogging experience with regular updates and new features based on user feedback.</li>
            </p>
          </div>
        </div>

        <div className="accordion-item">
          <button onClick={() => toggleSection(1)} className="accordion-button">
            Core Features
          </button>
          <div className={`accordion-content ${activeSection === 1 ? "active" : ""}`}>
            <p>
              The application offers a robust set of features:
              <ul>
                <li>CRUD operations on users records</li>
                <li>JWT-based authentication for secure access</li>
                <li>Responsive, clean UI built with React</li>
                <li>Only logged in users can edit or delete their blogs.</li>
              </ul>
            </p>
          </div>
        </div>

        <div className="accordion-item">
          <button onClick={() => toggleSection(2)} className="accordion-button">
            Why Use This App
          </button>
          <div className={`accordion-content ${activeSection === 2 ? "active" : ""}`}>
            <p>
            This application is perfect for aspiring bloggers, content creators, or organizations looking for a simple yet powerful platform to share their stories. It’s fully responsive, easy to deploy, and customizable. It eliminates the hassle of managing separate tools for content creation and publishing, bringing efficiency to your blogging process — all while being completely free and open source.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
