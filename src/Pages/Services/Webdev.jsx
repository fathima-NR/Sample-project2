import React, { useEffect, useRef } from 'react';
import './service.css'; // Ensure this path
import W1 from "/src/assets/service-image6.jpg"
import W2 from "/src/assets/imagesdigital.jpg"
import W3 from "/src/assets/imagessocial.jpg"
import W4 from "/src/assets/downloadseo.jpg"
import W5 from "/src/assets/downloadwebdev.jpg"
function Webdev() {
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
        <img className="img-fluid service-img" src={W1} alt="Service" />
      </div>
      <p ref={headingRef} className="fs ms-1 fw-bold mt-5">
        {splitText('Website Design and Devolopment')}
      </p>
      <div className="mt-5 mx-5">
        <div className="row row1 d-flex align-items-center justify-content-center mt-5 mb-5">
          <div className="col-12 col-md-6">
            <h3 className='ms-2 mt-3'>Digital Media Marketing:</h3>
            <p
              ref={el => paragraphsRef.current[0] = el}
              className=" mx-2"style={{ fontSize: 'clamp(1rem, 2vw, 1.3rem)' }}
              data-animation-class="animate-fadeIn"
            >
Techcybe IT Solutions specializes in digital media marketing, helping businesses reach their target audience effectively through various digital channels. We develop comprehensive strategies that encompass online advertising, content marketing, email marketing, and more, driving brand awareness, engagement, and conversions.
            </p>
          </div>
          <div className="col-12 col-md-6">
            <img
              ref={el => imagesRef.current[0] = el}
              className="img-fluid w-100 "
              src={W2}
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
              src={W3}
              alt=""
              data-animation-class="animate-fadeInLeft"
            />
          </div>
          <div className="col-12 col-md-6">
            <h3 className='ms-2 mt-3'> Social Media Marketing:</h3>
            <p
              ref={el => paragraphsRef.current[1] = el}
              className=" mx-2" style={{ fontSize: 'clamp(1rem, 2vw, 1.3rem)' }}
              data-animation-class="animate-slideInLeft"
            >
            
           
            Our team excels in social media marketing, leveraging popular platforms to promote businesses, engage with customers, and build a strong online presence. We create tailored social media campaigns, manage social media accounts, and employ analytics to optimize results and generate meaningful insights.
            </p>
          </div>
        </div>
        <div className="row row3 d-flex align-items-center justify-content-center mt-5 mb-5">
          <div className="col-12 col-md-6">
            <h3 className='ms-2 mt-3'> SEO:</h3>
            <p
              ref={el => paragraphsRef.current[2] = el}
              className="mx-2  "style={{ fontSize: 'clamp(1rem, 2vw, 1.3rem)' }}
              data-animation-class="animate-slideInRight"
            >
           
            We provide Search Engine Optimization (SEO) services to enhance the visibility and organic search rankings of businesses’ websites. Our team conducts thorough keyword research, on-page optimization, backlink building, and content optimization to improve website visibility, drive organic traffic, and boost conversions, helping businesses rank higher on search engine result pages.
            </p>
          </div>
          <div className="col-12 col-md-6">
            <img
              ref={el => imagesRef.current[2] = el}
              className="img-fluid w-100 "
              src={W4}
              alt=""
              data-animation-class="animate-fadeInRight"
            />
          </div>
        </div>
        <div className="row row4 d-flex align-items-center justify-content-center mt-5 mb-5">
          <div className="col-12 col-md-6 ">
            <img
              ref={el => imagesRef.current[3] = el}
              className="img-fluid w-100 "
              src={W5}
              alt=""
              data-animation-class="animate-fadeInUp"
            />
          </div>
          <div className="col-12 col-md-6">
            <h3 className='ms-2 mt-3'>  Website Design & Development:</h3>
            <p
              ref={el => paragraphsRef.current[3] = el}
              className=" mx-2" style={{ fontSize: 'clamp(1rem, 2vw, 1.3rem)' }}
              data-animation-class="animate-fadeIn"
            >
           
             Techcybe IT Solutions offers professional website design and development services, creating visually appealing, user-friendly, and responsive websites. Our expert designers and developers ensure seamless functionality, intuitive navigation, and engaging user experiences, aligning with businesses’ branding and goals.
            </p>
          </div>
        </div>
      </div>
    
    </div>
  );
}

export default Webdev;
