import React, { useEffect, useRef, useState } from 'react';
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { MdOutlineArrowOutward } from "react-icons/md";
import './Servicehome.css'; // Import the CSS file
import { clamp } from 'framer-motion';

function Servicehome() {
  const headingRef = useRef(null);
  const paragraphRef = useRef(null);
  const list1Ref = useRef(null);
  const list2Ref = useRef(null);

  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const headingElement = headingRef.current;
      const paragraphElement = paragraphRef.current;
      const list1Element = list1Ref.current;
      const list2Element = list2Ref.current;

      if (headingElement && paragraphElement && list1Element && list2Element && !hasAnimated) {
        const headingPosition = headingElement.getBoundingClientRect().top;
        const screenPosition = window.innerHeight;

        if (headingPosition < screenPosition) {
          headingElement.classList.add('animate-heading');
          
          setTimeout(() => {
            paragraphElement.classList.add('animate-paragraph');
          }, 500); // Delay for paragraph animation

          setTimeout(() => {
            list1Element.classList.add('animate-list');
          }, 800); // 800ms delay for the first list

          setTimeout(() => {
            list2Element.classList.add('animate-list');
          }, 1100); // 1100ms delay for the second list

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
      <span key={index} className="letter" style={{ '--i': index }}>
        {char === ' ' ? '\u00A0' : char}
      </span>
    ));
  };

  return (
    <div className="row">
      <div className="col-md-9">
        <h1 ref={headingRef} className=' heading ms-4  fw-bold text-center ' style={{  whiteSpace: 'pre' }}>
          {splitText("We specialize in these fields.")}
        </h1>
        <p ref={paragraphRef} className=' text-start ms-5  mt-4 paragraph'  style={{fontSize:'clamp(1.2rem,3vw,1.5rem)'}}>
        As Dubai's leading IT solutions firm, we offer unparalleled service from project inception to its successful completion, ensuring excellence every step of the way.
        </p>
        <div className="row mt-5 ms-2 d-flex align-items-center justify-content-center">
          <div ref={list1Ref} className="col-md-6 list">
            <ul style={{ listStyle: 'none' }}>
              <li className='p-1  fw-bold' style={{fontSize:'clamp(1rem,3vw,1.3rem)'}}><MdKeyboardDoubleArrowRight /> Cybersecurity Solutions</li>
              <li className='p-1  fw-bold' style={{fontSize:'clamp(1rem,3vw,1.3rem)'}}><MdKeyboardDoubleArrowRight /> AMC Service & IT Support</li>
              <li className='p-1  fw-bold' style={{fontSize:'clamp(1rem,3vw,1.3rem)'}}><MdKeyboardDoubleArrowRight /> IT Infrastructure</li>
            </ul>
          </div>
          <div ref={list2Ref} className="col-md-6 list">
            <ul style={{ listStyle: 'none' }}>
              <li className='p-1  fw-bold' style={{fontSize:'clamp(1rem,3vw,1.3rem)'}}><MdKeyboardDoubleArrowRight /> ELV & Network Security System</li>
              <li className='p-1  fw-bold' style={{fontSize:'clamp(1rem,3vw,1.3rem)'}}><MdKeyboardDoubleArrowRight /> Cloud Solutions</li>
              <li className='p-1  fw-bold' style={{fontSize:'clamp(1rem,3vw,1.3rem)'}}><MdKeyboardDoubleArrowRight /> Website Design and Development</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="col-md-3 mt-2 pb-3">
        <a className='fw-bold text-decoration-none border-bottom border-1 border-dark p-2 h8' style={{ color: "black" }} href="/Cyber">
        All Services<MdOutlineArrowOutward />
        </a>
      </div>
    </div>
  );
}

export default Servicehome;