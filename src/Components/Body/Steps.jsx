import React, { useEffect, useRef, useState } from 'react';
import { FaGlobeAfrica } from "react-icons/fa";
import { FaConnectdevelop } from "react-icons/fa6";
import { SiTicktick } from "react-icons/si";
import { RiComputerLine } from "react-icons/ri";
import { GrCloudComputer } from "react-icons/gr";
import { ImGoogleDrive } from "react-icons/im";
import { motion } from 'framer-motion';

function Steps() {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
 
      { threshold: 0.5 }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  const lineVariants = {
    hidden: { width: 0, opacity: 1 },
    visible: (delayTime) => ({
      width: '23%',
      opacity: [0, 1, 1], // Start fully visible, stay visible, then fade out
      transition: {
        width: { duration: .4, ease: 'easeInOut', delay: delayTime },
        opacity: { duration: 0.4, ease: 'easeOut', delay: delayTime + 0 } // Fade out after line fully appears
      }
    }),
  };

  const iconVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: (delayTime) => ({
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4, ease: 'easeOut', delay: delayTime + 0 }, // icon appears after line animation
    }),
  };

  return (
    <div className="container" ref={ref}>
      <div className="row text-center position-relative">
        {/* First Icon */}
        <motion.div
          className="col-sm-4 position-relative d-flex flex-column align-items-center"
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={iconVariants}
          custom={0} // No delay for the first icon
        >
          <FaGlobeAfrica style={{ fontSize: '80px', zIndex: 1 }} />
          <p className='fs-5 mt-3'>Meeting and understanding clients Requirements</p>
        </motion.div>

        {/* Line between first and second icon */}
        <motion.div
          className="position-absolute"
          style={{
            top: '25%',
            left: '22%', // Starts after the first icon
            height: '1px',
            width: '33%', // Ends before the second icon
            backgroundColor: '#000',
            zIndex: 0, // Behind the icons
            transform: 'translateY(-50%)'
          }}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={lineVariants}
          custom={1} // No delay for the first line
        />

        {/* Second Icon */}
        <motion.div
          className="col-sm-4 position-relative d-flex flex-column align-items-center"
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={iconVariants}
          custom={0} // Delay for the second icon to appear after the line reaches it
        >
          <FaConnectdevelop style={{ fontSize: '80px', zIndex: 1 }} />
          <p className='fs-5 mt-3'>Developing Concept design</p>
        </motion.div>

        {/* Line between second and third icon */}
        <motion.div
          className="position-absolute"
          style={{
            top: '25%',
            left: '55%', // Starts after the second icon
            height: '1px',
            width: '33%', // Ends before the third icon
            backgroundColor: '#000',
            zIndex: 0,
            transform: 'translateY(-50%)'
          }}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={lineVariants}
          custom={2} // Delay for the second line
        />

        {/* Third Icon */}
        <motion.div
          className="col-sm-4 position-relative d-flex flex-column align-items-center"
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={iconVariants}
          custom={0} // Delay for the third icon
        >
          <SiTicktick style={{ fontSize: '80px', zIndex: 1 }} />
          <p className='fs-5 mt-3'>Design Submission for Client approval</p>
        </motion.div>
      </div>

      <div className="row text-center position-relative mt-5">
        {/* Fourth Icon */}
        <motion.div
          className="col-sm-4 position-relative d-flex flex-column align-items-center"
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={iconVariants}
          custom={0} // Delay for the fourth icon
        >
          <ImGoogleDrive style={{ fontSize: '80px', zIndex: 1 }} />
          <p className='fs-5 mt-3'>Technical and product specifications</p>
        </motion.div>

        {/* Line between fourth and fifth icon */}
        <motion.div
          className="position-absolute"
          style={{
            top: '25%',
            left: '22%', // Starts after the fourth icon
            height: '1px',
            width: '33%',
            backgroundColor: '#000',
            zIndex: 0,
            transform: 'translateY(-50%)'
          }}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={lineVariants}
          custom={3} // Delay for the third line
        />

        {/* Fifth Icon */}
        <motion.div
          className="col-sm-4 position-relative d-flex flex-column align-items-center"
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={iconVariants}
          custom={0} // Delay for the fifth icon
        >
          <RiComputerLine style={{ fontSize: '80px', zIndex: 1 }} />
          <p className='fs-5 mt-3'>Development & Implementation</p>
        </motion.div>

        {/* Line between fifth and sixth icon */}
        <motion.div
          className="position-absolute"
          style={{
            top: '25%',
            left: '55%', // Starts after the fifth icon
            height: '1px',
            width: '33%',
            backgroundColor: '#000',
            zIndex: 0,
            transform: 'translateY(-50%)'
          }}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={lineVariants}
          custom={4} // Delay for the fourth line
        />

        {/* Sixth Icon */}
        <motion.div
          className="col-sm-4 position-relative d-flex flex-column align-items-center"
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={iconVariants}
          custom={0} // Delay for the sixth icon
        >
          <GrCloudComputer style={{ fontSize: '80px', zIndex: 1 }} />
          <p className='fs-5 mt-3'>Inspection & Handover</p>
        </motion.div>
      </div>
    </div>
  );
}

export default Steps;
