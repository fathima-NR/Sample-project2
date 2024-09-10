import React, { useState, useEffect } from 'react';
import { MdOutlineArrowOutward } from "react-icons/md";
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import "./abouthome.css";

const helloTranslations = [
  "Hello", "Hola", "Bonjour", "Hallo", "Ciao", "Olá", "こんにちは", "안녕하세요", "Здравствуйте", "Salut"
];

function Contacthome() {
  const [currentHello, setCurrentHello] = useState(0);
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger animation only once
    threshold: 0.5 // Trigger when 50% of the element is in view
  });

  useEffect(() => {
    if (inView) {
      const interval = setInterval(() => {
        setCurrentHello(prev => (prev + 1) % helloTranslations.length);
      }, 3000); // Change interval to control how often the word changes

      return () => clearInterval(interval);
    }
  }, [inView]);

  return (
    <div>
      <div className="bgimg-container text-center"  ref={ref}>
        <motion.h6
          className='pt-5' style={{fontSize: 'clamp(2.4rem, 4vw, 4rem)'}}
          initial={{ opacity: 0, y: -70 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -70 }}
          transition={{ duration: 0.9 }}
        >
          Have a project in mind?
        </motion.h6>
        <motion.p
          className='mt-5 '
          style={{fontSize: 'clamp(1.5rem, 3vw, 4rem)'}}
          initial={{ opacity: 0, y: -60 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
          transition={{ duration: 2 }}
        >
          Do not hesitate to say{" "}
          <motion.span
            key={helloTranslations[currentHello]}
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="hello-word"
          >
            {helloTranslations[currentHello]}
          </motion.span>
        </motion.p>
        <motion.button
          className='btn btn1 btn-lg  px-5 py-2 mt-5'
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 1 }}
        >
          Let's Talk <MdOutlineArrowOutward className='ms-2 fs-3' />
        </motion.button>
      </div>
    </div>
  );
}

export default Contacthome;
