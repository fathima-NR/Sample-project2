import React, { useEffect, useRef, useState } from 'react';
import { MdOutlineArrowOutward } from "react-icons/md";

import "./abouthome.css";
import Team from './Team';

function HomeTeam() {
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

        console.log('Scroll event', headingPosition, screenPosition); // Debugging scroll event

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
      <div className="row ">
        <div className="col-md-9">
          <h1 ref={headingRef} className='heading1 ms-2 fw-bold ' style={{ whiteSpace: 'pre' }}>
            {splitText('"Meet the team behind the work"')}
          </h1>
          <p ref={paragraphRef} className='fs-4 text-start  ms-5 mt-4 paragraph1'  style={{fontSize:'clamp(1.2rem,3vw,1.5rem)'}}>
          At Techcybe, we appreciate the hard work and dedication of our employees and partners.
          </p>
        </div>
        <div className="col-md-2  mt-2  d-flex align-items-end ">
          <a className='fw-bold text-decoration-none border-bottom border-1 border-dark p-2   h8 ' style={{ color: "black"}} href="/Teams">
           Team<MdOutlineArrowOutward />
          </a>
        </div>
       
      </div>
     <div className='mt-5'>
        <Team/>
     </div>
    </div>
  );
}

export default HomeTeam;
 