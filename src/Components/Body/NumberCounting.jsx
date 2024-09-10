import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import './number.css'; // Make sure to import your CSS file

function NumberCounting() {
  const [inViewRef, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div ref={inViewRef} className='d-flex align-items-center justify-content-center mx-3' style={{gap:"60px"}}>
      <div>
        {inView && <CountUp start={340}  end={345} duration={9} className='countup-number' />} <span className='countup-number ms-2'>+</span>
        <hr />
        <h5 className='h7 fw-bold'>Happy Clients</h5>
      </div>
      <div>
        {inView && <CountUp start={340} end={343} duration={9} className='countup-number' />} <span className='countup-number ms-2'>+</span>
        <hr />
        <h5 className='h7 fw-bold'>Projects</h5>
      </div>
      <div>
        {inView && <CountUp start={40} end={43} duration={9} className='countup-number' />} <span className='countup-number ms-2'>+</span>
        <hr />
        <h5 className='h7 fw-bold'>Qualified Staff</h5>
      </div>
    </div>
  );
}

export default NumberCounting;
