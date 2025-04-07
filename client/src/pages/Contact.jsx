import React from "react";
import "../styles/Contact.css";

export default function Contact() {
  return (
    <div className="contact-page">
      <h2>Contact Information</h2>
      <div className="contact-details">
        <p><strong>Company Name:</strong> Employee Management Solutions</p>
        <p><strong>Email:</strong> akashpsit13@gmail.com</p>
        <p><strong>Phone:</strong> +91 98765 43210</p>
        <p><strong>Address:</strong> 2nd Floor, TechPark, Koramangala, Bangalore, India</p>
        <p><strong>Working Hours:</strong> Monday - Friday | 9:00 AM - 6:00 PM</p>
        <p><strong>Socials:</strong></p>
        <ul>
          <li><a href="https://www.linkedin.com/in/akash-srivastava-b3b3041bb" target="_blank">LinkedIn</a></li>
        </ul>
      </div>
    </div>
  );
}
