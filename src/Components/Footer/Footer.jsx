import React from 'react';
import { FaLocationDot } from "react-icons/fa6";
import { FaLinkedinIn, FaFacebookF, FaTwitter, FaInstagram, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import "./footer.css";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import bgimg from "/src/assets/istockphoto-1488521147-1024x1024.jpg"
function Footer() {
  return (
    <div className='footer-container'>
      <div className=" rowfoot row pt-5  pb-1">
        <div className="col-sm-3 pt-2  ps-5 ">
          <img className='logofooter img-fluid' src="https://github.com/fathima-NR/sample-project1/blob/main/src/assets/logo.png?raw=true" alt="" width={"250px"} />
          <p className="custom-paragraph">
          In a rapidly changing world, continuous evolution is essential. That’s where we step in. As a Modern Technology Solutions and Integrated Service Management Organization
    </p>
          <span className="social-icons1 mt-2">
            <a href="#" className="social-icon1"><FaFacebookF /></a>
            <a href="#" className="social-icon1"><FaTwitter /></a>
            <a href="#" className="social-icon1"><FaInstagram /></a>
            <a href="#" className="social-icon1"><FaLinkedinIn /></a>
          </span>
        </div>
        <div className="col-sm-3 mt-3  pt-3 ps-5 " style={{ color: "black" }}>
          <h6 className='text-start fw-bold' style={{ color: "black" }}>Contact Us</h6>
          <ul style={{ margin: "0px", padding: "0px", marginTop: "20px",fontWeight:"500",fontSize:"14px" }}>
            <li style={{ listStyle: "none", marginTop: "20px"}}>
              <FaLocationDot /> <span className='ms-3'>TechCybe IT Solutions LLC,Sharjah Media Free Zone,UAE</span>
            </li>
            <li style={{ listStyle: "none", marginTop: "20px" }}>
              <FaEnvelope /><span className='ms-3'>
              info@techcybe.com</span>
            </li>
            <li style={{ listStyle: "none", marginTop: "20px" }}>
              <FaPhoneAlt /><span className='ms-3'>+971 56 542 6856</span>
            </li>
          </ul>
        </div>
        <div className="col-sm-2 mt-3  pt-3 ps-5">
          <h6 className='text-start fw-bold' style={{ color: "black" }}>Quick Links</h6>
          <ul style={{ margin: "0px", padding: "0px", marginTop: "20px",fontSize:"14px" }}>
            <li style={{ listStyle: "none", marginTop: "10px" }}>
              <a href="/Home" className='text-decoration-none footer-hover'><MdKeyboardDoubleArrowRight /> Home</a>
            </li>
            <li style={{ listStyle: "none", marginTop: "10px" }}>
              <a href="/Cyber" className='text-decoration-none  footer-hover' ><MdKeyboardDoubleArrowRight /> Services</a>
            </li>
            <li style={{ listStyle: "none", marginTop: "10px" }}>
              <a href="/AboutUs" className='text-decoration-none  footer-hover'><MdKeyboardDoubleArrowRight /> About Us</a>
            </li>
            <li style={{ listStyle: "none", marginTop: "10px" }}>
              <a href="/ContactUs" className='text-decoration-none  footer-hover'><MdKeyboardDoubleArrowRight /> Contact Us</a>
            </li>
          </ul>
        </div>
        <div className="col-sm-4 mt-3  pt-3 ps-5   ">
          <h6 className='text-start fw-bold' style={{ color: "black" }}>Quick Links</h6>
          <ul style={{ margin: "0px", padding: "0px", marginTop: "20px",fontSize:"14px" }}>
            <li style={{ listStyle: "none", marginTop: "10px" }}>
              <a href="/Cyber" className='text-decoration-none  footer-hover'><MdKeyboardDoubleArrowRight /> Cybersecurity Solutions</a>
            </li>
            <li style={{ listStyle: "none", marginTop: "10px" }}>
              <a href="/It" className='text-decoration-none  footer-hover'><MdKeyboardDoubleArrowRight /> IT Infrastructure</a>
            </li>
            <li style={{ listStyle: "none", marginTop: "10px" }}>
              <a href="/" className='text-decoration-none  footer-hover'><MdKeyboardDoubleArrowRight /> AMC Service & IT Support
              </a>
            </li>
            <li style={{ listStyle: "none", marginTop: "10px" }}>
              <a href="?ELV" className='text-decoration-none  footer-hover'><MdKeyboardDoubleArrowRight />ELV & Network Security System
              </a>
            </li>
            <li style={{ listStyle: "none", marginTop: "10px" }}>
              <a href="/Cloud" className='text-decoration-none  footer-hover' ><MdKeyboardDoubleArrowRight />  Cloud Solutions</a>
            </li>
            <li style={{ listStyle: "none", marginTop: "10px" }}>
              <a href="/Webdev" className='text-decoration-none  footer-hover' > <MdKeyboardDoubleArrowRight />Website Design and Devolopment
              </a>
            </li>
          </ul>
        </div>
      </div>
      <hr />
      <div className='px-3 pb-1'>
        <h7>
        © Techcybe - IT Solutions All Copyright 2024
        </h7>
      </div>
    </div>
  );
}

export default Footer;
