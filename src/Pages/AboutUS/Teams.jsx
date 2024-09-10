import React, { useEffect, useRef, useState } from 'react';
import './management.css';
import OurTeam from '../../Components/Body/OurTeam';
import Teams1 from "/src/assets/team.webp"

function Teams() {

  const captionRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
   
      const captionElement = captionRef.current;

      if ( captionElement && !hasAnimated) {
     
        const captionPosition = captionElement.getBoundingClientRect().top;
        const screenPosition = window.innerHeight;

        // Trigger the animation slightly earlier by subtracting 100px
      

        if (captionPosition < screenPosition - 100) {
          captionElement.classList.add('animate-caption1');
          setHasAnimated(true); // Prevent re-animation
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Initial check to handle cases where the element is already in view
    handleScroll();

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
      <div className='management-image'>
        <img
          className='img-fluid'
          src={Teams1}
          alt=""
        />
        <div
          ref={captionRef}
          className="management-caption"
        >
          {splitText('Our Team')}
        </div>
      </div>
      <div className='mt-5 mb-5'>
        <OurTeam/>
      </div>
      </div>
    );
}
export default Teams;
