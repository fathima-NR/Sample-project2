import React, { useEffect, useRef } from 'react';
import './service.css'; // Ensure this path is correct
import It1 from "/src/assets/downloadserver.jpg"
import It2 from "/src/assets/downloadserver.jpg"
import It3 from "/src/assets/downloadbackup.jpg"
import It4 from "/src/assets/imagesinteli.jpg"
import It5 from "/src/assets/downloadwifi.jpg"
import It6 from "/src/assets/downloadfirewall.jpg"
function It() {
  const headingRef = useRef(null);
  const imagesRef = useRef([]);
  const paragraphsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const target = entry.target;
          const animationClass = target.dataset.animationClass;
          if (animationClass) {
            target.classList.add(animationClass);
          }
          // Optionally, unobserve the target after it has animated
          observer.unobserve(target);
        }
      });
    }, {
      threshold: 0.1 // Adjust this value to your preference
    });

    // Observe heading
    if (headingRef.current) {
      headingRef.current.dataset.animationClass = 'animate-heading1';
      observer.observe(headingRef.current);
    }

    // Observe images
    imagesRef.current.forEach(image => {
      if (image) {
        observer.observe(image);
      }
    });

    // Observe paragraphs
    paragraphsRef.current.forEach(paragraph => {
      if (paragraph) {
        observer.observe(paragraph);
      }
    });

    return () => {
      if (headingRef.current) {
        observer.unobserve(headingRef.current);
      }
      imagesRef.current.forEach(image => {
        if (image) {
          observer.unobserve(image);
        }
      });
      paragraphsRef.current.forEach(paragraph => {
        if (paragraph) {
          observer.unobserve(paragraph);
        }
      });
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
      <div className="image-container1">
        <img className="img-fluid service-img" src={It1} alt="Service" />
      </div>
      <p ref={headingRef} className="fs mx-5 fw-bold ">
        {splitText('IT INFRASTRUCTURE')}
      </p>
      <div className="mt-5 mx-5">
        <div className="row row1 d-flex align-items-center justify-content-center mt-5 mb-5">
          <div className="col-12 col-md-6">
            <h3  className='ms-2 mt-3'> Servers:</h3>
            <p
              ref={el => paragraphsRef.current[0] = el}
              className=" mx-2"style={{ fontSize: 'clamp(1rem, 2vw, 1.3rem)' }}
              data-animation-class="animate-fadeIn"
            >
            
             Techcybe IT Solutions offers reliable server solutions to support efficient data processing and application hosting for businesses of all sizes.
            </p>
          </div>
          <div className="col-12 col-md-6">
            <img
              ref={el => imagesRef.current[0] = el}
              className="img-fluid w-100 "
              src={It2}
              alt=""
              data-animation-class="animate-fadeInUp"
            />
          </div>
        </div>
        <div className="row row2 d-flex align-items-center justify-content-center mt-5 mb-5">
          <div className="col-12 col-md-6">
            <img
              ref={el => imagesRef.current[1] = el}
              className="img-fluid w-100"
              src={It3}
              alt=""
              data-animation-class="animate-fadeInLeft"
            />
          </div>
          <div className="col-12 col-md-6">
            <h3  className='ms-2 mt-3'> Backup & Storage:</h3>
            <p
              ref={el => paragraphsRef.current[1] = el}
              className=" mx-2"style={{ fontSize: 'clamp(1rem, 2vw, 1.3rem)' }}
              data-animation-class="animate-slideInLeft"
            >
           
            We provide secure backup and storage services to protect valuable data and ensure business continuity.
            </p>
          </div>
        </div>
        <div className="row row3 d-flex align-items-center justify-content-center mt-5 mb-5">
          <div className="col-12 col-md-6">
            <h3 className='ms-2 mt-3'> Intelligent Network Automation:</h3>
            <p
              ref={el => paragraphsRef.current[2] = el}
              className=" mx-2"style={{ fontSize: 'clamp(1rem, 2vw, 1.3rem)' }}
              data-animation-class="animate-slideInRight"
            >
            Our intelligent network automation solutions optimize network operations, enhance efficiency, and reduce manual tasks for improved productivity.
            </p>
          </div>
          <div className="col-12 col-md-6">
            <img
              ref={el => imagesRef.current[2] = el}
              className="img-fluid w-100 "
              src={It4}
              alt=""
              data-animation-class="animate-fadeInRight"
            />
          </div>
        </div>
        <div className="row  row4 d-flex align-items-center justify-content-center mt-5 mb-5">
          <div className="col-12 col-md-6">
            <img
              ref={el => imagesRef.current[3] = el}
              className="img-fluid w-100 "
              src={It5}
              alt=""
              data-animation-class="animate-fadeInUp"
            />
          </div>
          <div className="col-12 col-md-6">
            <h3 className='ms-2 mt-3'>
            Wi-Fi Infrastructure:</h3>
            <p
              ref={el => paragraphsRef.current[3] = el}
              className="mx-2"style={{ fontSize: 'clamp(1rem, 2vw, 1.3rem)' }}
              data-animation-class="animate-fadeIn"
            >
              Techcybe IT Solutions designs and deploys robust Wi-Fi infrastructures to provide seamless connectivity and enhanced user experience.
            </p>
          </div>
        </div>
        <div className="row row5 d-flex align-items-center justify-content-center mt-5 mb-5">
          <div className="col-12 col-md-6">
            <h3 className='ms-2 mt-3'>Advanced Firewall:</h3>
            <p
              ref={el => paragraphsRef.current[4] = el}
              className=" mx-2"style={{ fontSize: 'clamp(1rem, 2vw, 1.3rem)' }}
              data-animation-class="animate-slideInRight"
            >
          
            Our advanced firewall solutions safeguard networks against unauthorized access and protect against cyber threats.
            </p>
          </div>
          <div className="col-12 col-md-6">
            <img
              ref={el => imagesRef.current[4] = el}
              className="img-fluid w-100"
              src={It6}
              alt=""
              data-animation-class="animate-fadeInRight"
            />
          </div>
        </div>
      </div>
    
    </div>
  );
}

export default It;
