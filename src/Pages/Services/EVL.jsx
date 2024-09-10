import React, { useEffect, useRef } from 'react';
import './service.css'; // Ensure this path is correct
import E1 from "/src/assets/downloadcctv.jpg"
import E2 from "/src/assets/downloadbiomas.jpg"
import E3 from "/src/assets/service-image4.jpg"
import E4 from "/src/assets/imagesinteli.jpg"
import E5 from "/src/assets/downloadoptic.jpg"
function EVL() {
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
        <img className="img-fluid service-img" src={E3} alt="Service" />
      </div>
      <p ref={headingRef} className="fs ms-3 fw-bold mt-5">
        {splitText('ELV & Network Security System')}
      </p>
      <div className="mt-5 mx-5">
        <div className="row row1 d-flex align-items-center justify-content-center mt-5 mb-5">
          <div className="col-12 col-md-6">
            <h3 className='ms-2 mt-3'>CCTV:</h3>
            <p
              ref={el => paragraphsRef.current[0] = el}
              className="mx-2  "style={{ fontSize: 'clamp(1rem, 2vw, 1.3rem)'}}
              data-animation-class="animate-fadeIn"
            >
          
             Techcybe IT Solutions offers comprehensive CCTV solutions for video surveillance, providing businesses with monitoring capabilities to enhance security and deter potential threats. Our CCTV systems include high-definition cameras, recording devices, and remote access features for real-time monitoring and playback of recorded footage.
            </p>
          </div>
          <div className="col-12 col-md-6">
            <img
              ref={el => imagesRef.current[0] = el}
              className="img-fluid w-100 "
              src={E1}
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
              src={E2}
              alt=""
              data-animation-class="animate-fadeInLeft"
            />
          </div>
          <div className="col-12 col-md-6">
            <h3 className='ms-2 mt-3'>  Biometric & Access Controllers:</h3>
            <p
              ref={el => paragraphsRef.current[1] = el}
              className="mx-2  "style={{ fontSize: 'clamp(1rem, 2vw, 1.3rem)'}}
              data-animation-class="animate-slideInLeft"
            >
          
            We specialize in biometric and access control solutions, enabling organizations to manage physical access to their premises. Our systems utilize biometric identification methods like fingerprint or facial recognition, combined with access controllers, to ensure secure and efficient access management.
            </p>
          </div>
        </div>
        <div className="row row3 d-flex align-items-center justify-content-center mt-5 mb-5">
          <div className="col-12 col-md-6">
            <h3 className='ms-2 mt-3'>Intelligent Cabling:</h3>
            <p
              ref={el => paragraphsRef.current[2] = el}
              className="mx-2  "style={{ fontSize: 'clamp(1rem, 2vw, 1.3rem)'}}
              data-animation-class="animate-slideInRight"
            >
Techcybe IT Solutions implements intelligent cabling solutions that optimize network infrastructure. This includes structured cabling systems that are well-organized, labeled, and easily manageable, reducing downtime, simplifying troubleshooting, and enabling future scalability and flexibility.
            </p>
          </div>
          <div className="col-12 col-md-6">
            <img
              ref={el => imagesRef.current[2] = el}
              className="img-fluid w-100 "
              src={E4}
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
              src={E5}
              alt=""
              data-animation-class="animate-fadeInUp"
            />
          </div>
          <div className="col-12 col-md-6">
            <h3 className='ms-2 mt-3'>Fiber Optics Cabling:</h3>
            <p
              ref={el => paragraphsRef.current[3] = el}
              className="mx-2  "style={{ fontSize: 'clamp(1rem, 2vw, 1.3rem)'}}
              data-animation-class="animate-fadeIn"
            >
    
        We provide fiber optics cabling solutions, leveraging the high-speed and long-distance capabilities of fiber optics to deliver reliable and efficient data transmission. Fiber optics offer enhanced bandwidth, immunity to electromagnetic interference, and secure data transfer, making it ideal for businesses with demanding network requirements or those seeking future-proof connectivity solutions.
            </p>
          </div>
        </div>
      </div>
    
    </div>
  );
}

export default EVL;
