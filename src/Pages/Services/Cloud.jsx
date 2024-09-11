import React, { useEffect, useRef } from 'react';
import './service.css'; // Ensure this path is correct
import C1 from "/src/assets/service-image2.jpg"
import C2 from "/src/assets/imagesmocro.jpg"
import C3 from "/src/assets/downloadgsuit.jpg"
import C4 from "/src/assets/imagesoffice.jpg"
import C5 from "/src/assets/downloadcloudsto.jpg"
function Cloud() {
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
        <img className="img-fluid service-img" src={C1} alt="Service" />
      </div>
      <p ref={headingRef} className="fs mx-5 fw-bold ">
        {splitText('Cloud Solutions')}
      </p>
      <div className=" mx-5">
        <div className="row row1 d-flex align-items-center justify-content-center mt-5 mb-5">
          <div className="col-12 col-md-6">
            <h3 className='ms-2 mt-3'> Microsoft Azure:</h3>
            <p
              ref={el => paragraphsRef.current[0] = el}
              className="mx-2  "style={{ fontSize: 'clamp(1rem, 2vw, 1.3rem)' }}
              data-animation-class="animate-fadeIn"
            >
           
            Techcybe IT Solutions offers expertise in Microsoft Azure, a powerful cloud computing platform, providing businesses with scalable infrastructure, data storage, and a wide range of services for application development, deployment, and management.
            </p>
          </div>
          <div className="col-12 col-md-6">
            <img
              ref={el => imagesRef.current[0] = el}
              className="img-fluid w-100 "
              src={C2}
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
              src="src/assets/downloadaws.png"
              alt=""
              data-animation-class="animate-fadeInLeft"
            />
          </div>
          <div className="col-12 col-md-6">
            <h3 className='ms-2 mt-3'>AWS:</h3>
            <p
              ref={el => paragraphsRef.current[1] = el}
              className="mx-2  "style={{ fontSize: 'clamp(1rem, 2vw, 1.3rem)' }}
              data-animation-class="animate-slideInLeft"
            >
      
            We specialize in Amazon Web Services (AWS), providing businesses with secure, reliable, and scalable cloud computing solutions, including virtual servers, storage, databases, and various cloud-based services to meet diverse business needs.
            </p>
          </div>
        </div>
        <div className="row row3 d-flex align-items-center justify-content-center mt-5 mb-5">
          <div className="col-12 col-md-6">
            <h3 className='ms-2 mt-3'>GSuite:</h3>
            <p
              ref={el => paragraphsRef.current[2] = el}
              className="mx-2  "style={{ fontSize: 'clamp(1rem, 2vw, 1.3rem)' }}
              data-animation-class="animate-slideInRight"
            >
  
    We support businesses in utilizing GSuite, Google’s cloud-based productivity suite, which includes Gmail, Google Drive, Google Docs, and collaboration tools for efficient communication, document creation, and collaboration among teams.
            </p>
          </div>
          <div className="col-12 col-md-6">
            <img
              ref={el => imagesRef.current[2] = el}
              className="img-fluid w-100 "
              src={C3}
              alt=""
              data-animation-class="animate-fadeInRight"
            />
          </div>
        </div>
        <div className="row row4 d-flex align-items-center justify-content-center mt-5 mb-5">
          <div className="col-12 col-md-6">
            <img
              ref={el => imagesRef.current[3] = el}
              className="img-fluid w-100"
              src={C4}
              alt=""
              data-animation-class="animate-fadeInUp"
            />
          </div>
          <div className="col-12 col-md-6">
            <h3 className='ms-2 mt-3'>Office 365:</h3>
            <p
              ref={el => paragraphsRef.current[3] = el}
              className="mx-2  "style={{ fontSize: 'clamp(1rem, 2vw, 1.3rem)' }}
              data-animation-class="animate-fadeIn"
            >
       
           Techcybe IT Solutions assists organizations in leveraging Microsoft Office 365, a cloud-based productivity suite, offering tools like Word, Excel, PowerPoint, and collaborative features like email, file sharing, and video conferencing.
            </p>
          </div>
        </div>
        <div className="row row5 d-flex align-items-center justify-content-center mt-5 mb-5">
          <div className="col-12 col-md-6">
            <h3 className='ms-2 mt-3'>Cloud Storage:</h3>
            <p
              ref={el => paragraphsRef.current[4] = el}
              className="mx-2  "style={{ fontSize: 'clamp(1rem, 2vw, 1.3rem)' }}
              data-animation-class="animate-slideInRight"
            >

Techcybe IT Solutions provides cloud storage solutions, enabling businesses to securely store and access their data from anywhere, offering scalability, backup, and disaster recovery options while reducing reliance on physical storage infrastructure
            </p>
          </div>
          <div className="col-12 col-md-6">
            <img
              ref={el => imagesRef.current[4] = el}
              className="img-fluid w-100"
              src={C5}
              alt=""
              data-animation-class="animate-fadeInRight"
            />
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default Cloud;
