import React, { useEffect, useRef, useState } from 'react';
import { MdOutlineArrowOutward } from "react-icons/md";
import CompanyAbout from './Procedure';
import "./abouthome.css";
import { Link } from 'react-router-dom';

function AboutHome() {
  const headingRef = useRef(null);
  const paragraphRef = useRef(null);

  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const headingElement = headingRef.current;
      const paragraphElement = paragraphRef.current;

      if (headingElement && paragraphElement && !hasAnimated) {
        const headingPosition = headingElement.getBoundingClientRect().top;
        const screenPosition = window.innerHeight;

    

        // Trigger the animation slightly earlier by subtracting 100px
        if (headingPosition < screenPosition - 100) {
        
          headingElement.classList.add('animate-heading1');
          setTimeout(() => {
            paragraphElement.classList.add('animate-paragraph1');
          }, 500);

          setHasAnimated(true); // Prevent re-animation
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [hasAnimated]);

  const splitText = (text) => {
    return text.split('').map((char, index) => (
      <span key={index} className="letter1" style={{ '--i': index }}>
        {char === ' ' ? '\u00A0' : char}
      </span>
    ));
  };

  return (
    <div>
      <div className="row">
        <div className="col-md-9">
          <h1 ref={headingRef} className='heading1 ms-4 fw-bold text-center' style={{ whiteSpace: 'pre' }}>
            {splitText('"Discover Our Story"')}
          </h1>
          <p ref={paragraphRef} className='  ms-5  mt-4 paragraph1' style={{fontSize:'clamp(1.2rem,3vw,1.5rem)'}}>
          Shaping the digital world, today – welcome to our IT innovation.
          </p>
        </div>
        <div className="col-md-3 mt-2 pb-4">
          <Link to="/Management" className='fw-bold text-decoration-none border-bottom border-1 border-dark p-2 h8' style={{ color: "black" }}>
            About Us<MdOutlineArrowOutward />
          </Link>
        </div>
      </div>
      <div>
        <CompanyAbout />
      </div>
    </div>
  );
}

export default AboutHome;
 