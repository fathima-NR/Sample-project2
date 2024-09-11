import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import jam from "/src/assets/WhatsApp-Image-2023-11-10-at-1.09.23-PM.webp"
import sojit from "/src/assets/WhatsApp-Image-2023-11-13-at-11.29.58-AM.webp"
// Variants for letters
const letterVariants = {
  hidden: { opacity: 0, x: 20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

// Animation for entire text container
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

// Animation variants for different elements
const fadeInFromBottom = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const fadeInFromRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
};

const fadeInFromTop = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const AnimatedText = ({ text, className, style }) => {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={containerVariants}
      className={className}
      style={style}
    >
      {text.split('').map((char, index) => (
        <motion.span key={index} variants={letterVariants}>
          {char}
        </motion.span>
      ))}
    </motion.div>
  );
};

const Team = () => {
  const { ref: ref1, inView: inView1 } = useInView({ triggerOnce: true });
  const { ref: ref2, inView: inView2 } = useInView({ triggerOnce: true });
  const { ref: ref3, inView: inView3 } = useInView({ triggerOnce: true });

  return (
    <div>
      <div className="row mx-5 d-flex align-items-center justify-content-center">
        <div className="col-12 col-lg-6 col-md-6">
          <motion.img
            className="img-fluid"
            src={jam}
            alt="Team member"
            
            style={{ height: "auto",width:"100%" }}
            initial="hidden"
            animate={inView1 ? 'visible' : 'hidden'}
            variants={fadeInFromBottom}
          />
        </div>
        <div className="col-12 col-lg-6  col-md-6">
          <motion.div
            ref={ref1}
            initial="hidden"
            animate={inView1 ? 'visible' : 'hidden'}
            variants={fadeInFromRight}
          >
            <AnimatedText
              className="animated-text mt-4  fw-bold"
              text="Jamsheer Abdulkareem"
              style={{fontSize: 'clamp(1.5rem, 2.5vw, 2rem)' ,  fontWeight: 'bold', color: '#333' }}
            />
            <motion.h6
              className="mt-4 fs-5 fw-bold"
              initial="hidden"
              animate={inView1 ? 'visible' : 'hidden'}
              variants={fadeInFromTop}
            >
              CEO & Founder-Business Development Manager
            </motion.h6>
            <motion.div
              className="mt-4 "
              style={{ fontSize: 'clamp(1rem, 1vw, 1.3rem)' }}
              initial="hidden"
              animate={inView1 ? 'visible' : 'hidden'}
              variants={fadeInFromRight}
            >
              <p>
                I am delighted to extend a warm greeting to you on behalf of
                our talented team at A1 Interiors. As the CEO, I take immense
                pride in leading a group of passionate designers and
                professionals dedicated to transforming spaces into
                personalized works of art.
              </p>
              <p>
                At A1 Interiors, we believe that every space has a story
                waiting to be told. Our talented team of passionate designers
                and professionals is dedicated to bringing these narratives to
                life. We take immense pride in our ability to turn ordinary
                spaces into extraordinary reflections of individual style and
                functionality.
              </p>
              <p>
                Our approach to interior design is rooted in creativity,
                innovation, and a deep understanding of our clients’ unique
                needs. We believe that a well-designed space goes beyond
                aesthetics; it should evoke emotions, enhance functionality,
                and create an environment that truly resonates with its
                occupants.
              </p>
              <p>
                Thank you for considering A1 Interiors for your design needs.
                We look forward to the opportunity to collaborate with you and
                turn your space into a masterpiece.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
      <div className="row row1 mx-5 d-flex align-items-center justify-content-center mt-5">
        <div className="col-12 col-lg-6  col-md-6">
          <motion.div
            ref={ref2}
            initial="hidden"
            animate={inView2 ? 'visible' : 'hidden'}
            variants={fadeInFromRight}
          >
            <AnimatedText
             
              text="Sojit Saji"
              style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', fontWeight: 'bold', color: '#333'}}
            />
            <motion.h6
              className="mt-4 fs-5 fw-bold"
             
              initial="hidden"
              animate={inView2 ? 'visible' : 'hidden'}
              variants={fadeInFromTop}
            >
              Co - founder - Operation Manager
            </motion.h6>
            <motion.div
              className="mt-4"
              style={{ fontSize: 'clamp(1rem, 1vw, 1.3rem)' }}
              initial="hidden"
              animate={inView2 ? 'visible' : 'hidden'}
              variants={fadeInFromRight}
            >
              <p>
                At A1 Interiors, we believe that a well-designed space has
                the power to enhance lives. Our design philosophy is rooted in
                a commitment to creating environments that not only reflect
                our clients’ visions but also elevate their experiences.
                Every project is a canvas, and we approach it with a blend of
                creativity, functionality, and attention to detail.
              </p>
              <p>
                Creativity is the heartbeat of our design process. We believe
                in pushing boundaries, exploring innovative concepts, and
                infusing a distinct artistic flair into every design element.
                This creativity is the catalyst to make each space a testament
                to individuality and uniqueness.
              </p>
            </motion.div>
          </motion.div>
        </div>
        <div className="col-12 col-lg-6  col-md-6">
          <motion.img
            className="img-fluid"
            src={sojit}
            alt="Team member"
          
            style={{ height: 'auto',width:"100%" }}
            initial="hidden"
            animate={inView1 ? 'visible' : 'hidden'}
            variants={fadeInFromBottom}
          />
        </div>
      </div>
    </div>
  );
};

export default Team;
