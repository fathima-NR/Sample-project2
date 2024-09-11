import React, { useState, useEffect, useRef } from 'react';
import logo from "/src/assets/logo.png";
import { IoSearch } from "react-icons/io5";
import { SlMenu } from "react-icons/sl";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import "./navbar.css";
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const [isSearchVisible, setSearchVisible] = useState(false);
  const [isSticky, setSticky] = useState(false);
  const [isContactInfoVisible, setContactInfoVisible] = useState(true);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const collapseRef = useRef(null);
  const location = useLocation(); // Use to detect route changes

  const toggleSearch = () => {
    setSearchVisible(!isSearchVisible);
  };

  const closeNavbar = () => {
    if (collapseRef.current && collapseRef.current.classList.contains('show')) {
      collapseRef.current.classList.remove('show');
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 0);
      setContactInfoVisible(window.scrollY === 0);
    };

    window.addEventListener('scroll', handleScroll);

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);

    // Scroll to top on route change
    window.scrollTo(0, 0);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, [location]); // Dependency on location to trigger scroll restoration on route change

  return (
    <div className={`navbar-container ${isSticky ? 'sticky' : ''}`}>
      <nav className="navbar navbar-expand-lg bg-light navbar-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/"><img src={logo} className='img-fluid' alt="Logo" width={300} /></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
            <SlMenu />
          </button>
          <div className="collapse navbar-collapse" id="collapsibleNavbar" ref={collapseRef}>
            <div className="navbar-header d-flex flex-column align-items-start">
              {isContactInfoVisible && (
                <div className="contact-info ">
                  <span className="phone-number"> 
                    <FaPhoneAlt className="icon1" />Call Us: (123) 456-7890
                  </span>
                  <span className="phone-number"> 
                    <FaEnvelope className="icon1" />info@techcybe.com
                  </span>
                </div>
              )}
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link to="/Home" className="nav-link" onClick={closeNavbar}>HOME</Link>
                </li>
                <li className="nav-item dropdown">
                  <a 
                    className="nav-link dropdown-toggle" 
                    href="#" 
                    role="button" 
                    data-bs-toggle="dropdown"
                  >
                    ABOUT US
                  </a>
                  <ul className="dropdown-menu">
                    <li><Link className="dropdown-item" to="/Management" onClick={closeNavbar}>Management</Link></li>
                    <li><Link className="dropdown-item" to="/OurTeam" onClick={closeNavbar}>Our Team</Link></li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <a 
                    className="nav-link dropdown-toggle" 
                    href="/Service" 
                    role="button" 
                    data-bs-toggle="dropdown"
                  >
                    SERVICES
                  </a>
                  <ul className="dropdown-menu">
                    <li><Link className="dropdown-item" to="/Cyber" onClick={closeNavbar}> Cybersecurity Solutions</Link></li>
                    <li><Link className="dropdown-item" to="/It" onClick={closeNavbar}> IT Infrastructure</Link></li>
                    <li><Link className="dropdown-item" to="/EVL" onClick={closeNavbar}> ELV & Network Security System</Link></li>
                    <li><Link className="dropdown-item" to="/Cloud" onClick={closeNavbar}> Cloud Solutions</Link></li>
                    <li><Link className="dropdown-item" to="/Webdev" onClick={closeNavbar}> Website Design and Development</Link></li>
                  </ul>
                </li>
                <li className="nav-item">
                  <Link to="/ContactUs" className="nav-link" onClick={closeNavbar}>CONTACT US</Link>
                </li>
                <li className="nav-item">
                  <Link to="/ContactUs" className="nav-link" onClick={closeNavbar}><button className='btn btn-outline-dark px-5 fw-bold rounded-pills'>Get A Quote</button>
                  </Link>
                </li>
                <li className="nav-item">
                  <a className="nav-link nav-link1 search-icon" href="#" onClick={toggleSearch}><IoSearch /></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      {isSearchVisible && (
        <div className="search-container">
          <input type="text" className="search-input" placeholder="Search..." />
        </div>
      )}
    </div>
  );
}

export default Navbar;
