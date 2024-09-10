import React, { useEffect, useRef, useState } from 'react';
import './management.css';
import Team from '../../Components/Body/Team';

function Management() {
  const headingRef = useRef(null);
  const captionRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const headingElement = headingRef.current;
      const captionElement = captionRef.current;

      if (headingElement && captionElement && !hasAnimated) {
        const headingPosition = headingElement.getBoundingClientRect().top;
        const captionPosition = captionElement.getBoundingClientRect().top;
        const screenPosition = window.innerHeight;

        // Trigger the animation slightly earlier by subtracting 100px
        if (headingPosition < screenPosition - 100) {
          headingElement.classList.add('animate-heading1');
        }

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
          src="https://github.com/fathima-NR/sample-project1/blob/main/src/assets/pexels-a-darmel-8134073.jpg?raw=true"
          alt=""
        />
        <div
          ref={captionRef}
          className="management-caption"
        >
          {splitText('Management')}
        </div>
      </div>
      <div className='text-center mt-5 text-muted fs-6 mx-5'>
        <p>At A1, we value and appraise the performances and efforts of all our employees and partners.</p>
        <p>We build on our long-term mission and place a strong focus on growing our customer satisfaction, under uncompromising values: maintain a high standard of business ethics, integrity, honesty, respect, and commitment to performance.</p>
        <p>We believe in a transparent and ethical working environment, we believe only in teamwork as the only team we succeed. We are focused on becoming TOP convenience Interior Decoration company, in offering every day to our customer a unique experience.</p>
      </div>
      <div className="heading-container mt-5 mb-5">
        <h1
          ref={headingRef}
          className="heading1 ms-4 fw-bold text-center"
          style={{ whiteSpace: 'pre' }}
        >
          {splitText('"Welcome to Techcybe Family"')}
        </h1>
      </div>
      <div className='mt-5 pb-5'><Team /></div>
    </div>
  );
}

export default Management;
