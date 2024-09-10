import React, { useState, useRef, useEffect } from 'react';
import './procedure.css';
import { MdOutlineMiscellaneousServices, MdKeyboardDoubleArrowRight } from 'react-icons/md';
import { motion } from 'framer-motion';
import prodimg from "/src/assets/istockphoto-1913227416-1024x1024.jpg";
function CompanyAbout() {
  const [activeSection, setActiveSection] = useState('AboutUs');
  const [isVisible, setIsVisible] = useState(false);

  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const renderContent = () => {
    switch (activeSection) {
      case 'AboutUs':
        return (
          <p style={{ fontSize: 'clamp(.9rem, 2vw, 1rem)' }}>
            Techcybe IT Solutions in UAE specializes in IT solutions and integrated service management, catering to small, medium, and complex enterprises. We redefine how organizations benefit from our services, contributing to enhanced productivity and offering exceptional value to our clients, helping their businesses thrive.
          </p>
        );
      case 'WhyUs':
        return (
          <p style={{ fontSize: 'clamp(1rem, 2vw, 1.3rem)' }}>
            -- Enhance productivity, efficiency, and reliability<br />
            -- Advance Technologies<br />
            -- 24*7 Infrastructure Monitoring & Tech Support<br />
            -- Certified experts with in-depth knowledge<br />
            -- Multi Technology Integration<br />
            -- Inexpensive<br />
          </p>
        );
      case 'Services':
        return (
          <p style={{ fontSize: 'clamp(1rem, 1vw, 1.3rem)' }}>
            <MdOutlineMiscellaneousServices /> Cybersecurity Solutions<br />
            <MdOutlineMiscellaneousServices /> IT Infrastructure<br />
            <MdOutlineMiscellaneousServices /> AMC Service & IT Support<br />
            <MdOutlineMiscellaneousServices /> ELV & Network Security System<br />
            <MdOutlineMiscellaneousServices /> Cloud Solutions<br />
            <MdOutlineMiscellaneousServices /> Website Design and Development
          </p>
        );
      default:
        return <p>Select a section to view content.</p>;
    }
  };

  return (
    <div>
      <div className="row mx-3" ref={sectionRef}>
        <motion.div
          className="col-12 col-lg-6"
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 2 }}
        >
          <img
            className="img-fluid img-fluid1"
            src={prodimg}
            alt="Company"
            style={{ width: '100%', height: 'auto' }}
          />
        </motion.div>
        <motion.div
          className="col-12 col-lg-6 text-dark"
          style={{ marginTop: "20px" }}
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 2 }}
        >
          <div className='subheading'>
            <motion.h5
              onClick={() => setActiveSection('AboutUs')}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.6 }}
            >About Us</motion.h5>
            <motion.h5
              onClick={() => setActiveSection('WhyUs')}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.6 }}
            >Why Us</motion.h5>
            <motion.h5
              onClick={() => setActiveSection('Services')}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.6 }}
            >Services</motion.h5>
          </div>
          <motion.div
            className="content"
            initial={{ opacity: 0, y: 50 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 2 }}
          >
            {renderContent()}
          </motion.div>
          <motion.div
            className="row ms-3"
            style={{ letterSpacing: "1px" }}
            initial={{ opacity: 0, y: 50 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 2 }}
          >
            <div className="col-12 col-lg-6">
              <motion.h6 className='fs-6 p-1'>
                <MdKeyboardDoubleArrowRight /> Technology Consultancy
              </motion.h6>
              <motion.h6 className='fs-6 p-1'>
                <MdKeyboardDoubleArrowRight /> We Provide best services
              </motion.h6>
            </div>
            <div className='col-12 col-lg-6'>
              <motion.h6 className='fs-6 p-1'>
                <MdKeyboardDoubleArrowRight /> Maintenance and support
              </motion.h6>
              <motion.h6 className='fs-6 p-1'>
                <MdKeyboardDoubleArrowRight /> Requirements Gathering
              </motion.h6>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default CompanyAbout;
