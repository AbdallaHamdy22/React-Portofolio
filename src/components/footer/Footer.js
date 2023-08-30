import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { AiOutlineMail, AiOutlinePhone } from 'react-icons/ai';
import './Footer.css';

export default function Footer(){
  return (
    <footer className="footer">
      <div>
        <h4 className="title">GET IN TOUCH</h4>
        <div className="icon-container">
          <AiOutlineMail className="icon" />
          <span>abdallahamdy@gmail.com</span>
        </div>
        <div className="icon-container">
          <AiOutlinePhone className="icon" />
          <span>0101234857</span>
        </div>
      </div>
      <div className="contact-section">
        <button className="contact-button">CONTACT ME</button>
      </div>
      <div className="icon-container">
        <FaFacebook className="icon" />
        <FaTwitter className="icon" />
        <FaLinkedin className="icon" />
      </div>
    </footer>
  );
};