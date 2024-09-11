import React, { useEffect, useRef } from 'react';
import Cy1 from "/src/assets/imagescyber.jpg"
import Cy2 from "/src/assets/service-image3.jpg"
import Cy3 from "/src/assets/imagesnet.jpg"
import Cy4 from "/src/assets/downloademail.jpg"
import Cy5 from "/src/assets/imagesend.jpg"
function Cyber() {
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
        <img className="img-fluid service-img" src={Cy2} alt="Service" />
      </div>
      <p ref={headingRef} className="fs ms-4 fw-bold">
        {splitText('CYBERSECURITY SOLUTIONS')}
      </p>
      <div className="mt-5 mx-5">
        <div className="row row1 d-flex align-items-center justify-content-center mt-5 mb-5">
          <div className="col-12 col-md-6">
            <h3 className='ms-2 mt-3'>SOC and VAPT services:</h3>
            <p
              ref={el => paragraphsRef.current[0] = el}
              className=" mx-2"style={{ fontSize: 'clamp(1rem, 2vw, 1.3rem)' }}
              data-animation-class="animate-fadeIn"
            >
              With our dedicated SOC team, your infra is in safe hands. We are protecting your resources from threats. Our VAPT expert team will scan and test the IT systems such as computers, mobiles and networks, and software such as operating systems and application software are scanned in order to identify the presence of known and unknown vulnerabilities.
            </p>
          </div>
          <div className="col-12 col-md-6">
            <img
              ref={el => imagesRef.current[0] = el}
              className="img-fluid w-100 "
              src={Cy1}
              alt=""
              data-animation-class="animate-fadeInUp"
            />
          </div>
        </div>
        <div className="row row2 d-flex align-items-center justify-content-center mt-5 mb-5">
          <div className="col-12 col-md-6">
            <img
              ref={el => imagesRef.current[1] = el}
              className="img-fluid w-100 "
              src={Cy3}
              alt=""
              data-animation-class="animate-fadeInLeft"
            />
          </div>
          <div className="col-12 col-md-6">
            <h3 className='ms-2 mt-3'>Network security:</h3>
            <p
              ref={el => paragraphsRef.current[1] = el}
              className=" mx-2"style={{ fontSize: 'clamp(1rem, 2vw, 1.3rem)' }}
              data-animation-class="animate-slideInLeft"
            >
              Techcybe Technology implements robust network security measures to protect against unauthorized access, intrusion attempts, and data breaches, ensuring the confidentiality, integrity, and availability of network resources.
            </p>
          </div>
        </div>
        <div className="row row3 d-flex align-items-center justify-content-center mt-5 mb-5">
          <div className="col-12 col-md-6">
            <h3 className='ms-2 mt-3'>Email security:</h3>
            <p
              ref={el => paragraphsRef.current[2] = el}
              className=" mx-2"style={{ fontSize: 'clamp(1rem, 2vw, 1.3rem)' }}
              data-animation-class="animate-slideInRight"
            >
              We deploy advanced email security solutions to detect and block malicious email threats, such as phishing attacks, spam, malware, and email-borne viruses, safeguarding organizations’ communication channels and sensitive information.
            </p>
          </div>
          <div className="col-12 col-md-6">
            <img
              ref={el => imagesRef.current[2] = el}
              className="img-fluid w-100"
              src={Cy4}
              alt=""
              data-animation-class="animate-fadeInRight"
            />
          </div>
        </div>
        <div className="row row4 d-flex align-items-center justify-content-center mt-5 mb-5">
          <div className="col-12 col-md-6">
            <img
              ref={el => imagesRef.current[3] = el}
              className="img-fluid w-100 "
              src={Cy5}
              alt=""
              data-animation-class="animate-fadeInUp"
            />
          </div>
          <div className="col-12 col-md-6">
            <h3 className='ms-2 mt-3'>Server/Endpoint security:</h3>
            <p
              ref={el => paragraphsRef.current[3] = el}
              className=" mx-2"style={{ fontSize: 'clamp(1rem, 2vw, 1.3rem)' }}
              data-animation-class="animate-fadeIn"
            >
              We provide advanced endpoint security solutions that combine antivirus, anti-malware, firewall, and behavioral analysis technologies to protect end-user devices from cyber threats, securing endpoints and preventing unauthorized access to sensitive data.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cyber;
