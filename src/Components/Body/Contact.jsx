import React, { useEffect, useRef, useState } from 'react';
import { MdOutlineArrowOutward } from "react-icons/md";

import "./abouthome.css";
import Team from './Team';
import Contacthome from './Contacthome';

function Contact() {
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
          console.log('Heading animation triggered');
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
          <h1 ref={headingRef} className='heading1 ms-4 fw-bold ' style={{ whiteSpace: 'pre' }}>
            {splitText('"Stay Connected"')}
          </h1>
          <p ref={paragraphRef} className=' ms-5 mt-4 paragraph1' style={{fontSize:'clamp(1.2rem,3vw,1.5rem)'}}>
          Stay connected with our team and never miss a design update, industry news, or special offer
          </p>
        </div>
        <div className="col-md-3 mt-2 pb-4">
          <a className='fw-bold text-decoration-none border-bottom border-1 border-dark p-2 h8 ' style={{ color: "black" }} href="/ContactUs">
         Contact Us<MdOutlineArrowOutward />
          </a>
        </div>
      </div>
     <div>
     <Contacthome/>
     </div>
    </div>
  );
}

export default Contact;
 