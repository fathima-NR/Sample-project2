import React, { useEffect, useRef } from 'react';
import './contactus.css'; // Ensure this path matches where your CSS file is located

function ContactUs() {
  // Refs for the new elements
  const headingRef = useRef(null);
  const captionRef = useRef(null);
  const paragraphRef = useRef(null);
  const formRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const target = entry.target;
          target.classList.add(target.dataset.animationClass);
        }
      });
    }, {
      threshold: 0.5 // Adjust this value to your preference
    });

    // Observe the new elements
    if (headingRef.current && captionRef.current && paragraphRef.current && formRef.current) {
      headingRef.current.dataset.animationClass = 'animate-heading1';
      captionRef.current.dataset.animationClass = 'animate-caption1';
      paragraphRef.current.dataset.animationClass = 'animate-paragraph';
      formRef.current.dataset.animationClass = 'animate-form';
      
      observer.observe(headingRef.current);
      observer.observe(captionRef.current);
      observer.observe(paragraphRef.current);
      observer.observe(formRef.current);
    }

    return () => {
      if (headingRef.current && captionRef.current && paragraphRef.current && formRef.current) {
        observer.unobserve(headingRef.current);
        observer.unobserve(captionRef.current);
        observer.unobserve(paragraphRef.current);
        observer.unobserve(formRef.current);
      }
    };
  }, []);

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
          src="https://github.com/fathima-NR/sample-project1/blob/main/src/assets/pexels-tima-miroshnichenko-5717224.jpg?raw=true"
          alt="Contact Us"
        />
        <div
          ref={captionRef}
          className="management-caption"
        >
          {splitText('Contact US')}
        </div>
      </div>
   
      <div className="row d-flex justify-content-center align-items-center mt-5 mb-5">
        <div className="col-sm-6">
          <div className="heading-container mt-5 mb-5">
            <h1
              ref={headingRef}
              className="heading1 mx-5 fw-bold text-center "
              style={{ whiteSpace: 'pre' }}
            >
              {splitText('"Let\'s Talk"')}
            </h1>
          </div>
          <div className='ms-5'>
            <h2
              ref={paragraphRef}
              className='fw-normal fs-4'
            >
              Got a project on your mind? Let's discuss about the details.
            </h2>
          </div>
          <div className='text-start mt-5 ms-5 fw-normal mb-3'>
            
            <h4  className='fw-normal fs-5 '>TechCybe IT Solutions LLC, Sharjah Media Free Zone,UAE</h4>
            <h4   className='fw-normal fs-5 '>+971 52 146 8115</h4>
            <h4   className='fw-normal fs-5 '>info@techcybe.com</h4>
          </div>
        </div>
        <div className="col-sm-6">
          <form
            ref={formRef}
            className="footer-form"
          >
            <input type="text" placeholder="Name" className="footer-input mx-5 mb-4  mt-3" required />
            <input type="tel" className="footer-input mx-5 mb-4 mt-3" id="phone" placeholder="Enter phone number" name="phone" required />
            <input type="email" className="footer-input mx-5 mb-4  mt-3" id="email" placeholder="Enter email" name="email" required />
            <textarea className="footer-input mx-5 mb-4  mt-3" id="message" placeholder="Enter message" name="message" required></textarea>
            <button type="submit" className="footer-button ms-5 mb-4 w-25 p-2  mt-4">Send</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
