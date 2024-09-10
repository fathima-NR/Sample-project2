
import React, { useEffect, useRef } from 'react';
import './ourteams.css'; // Ensure this path matches where your CSS file is located
// Import images
import team1 from '/src/assets/DSC06891-copy.webp';
import team2 from '/src/assets/DSC07076-copy.webp';
import team3 from '/src/assets/DSC07000-b-1920x2780.webp';
import team4 from '/src/assets/DSC07026-copy.webp';
import team5 from '/src/assets/DSC07177-copy.webp';
import team6 from '/src/assets/DSC07129-a.webp';

// Define team members with imported images
const teamMembers = [
  { image: team1, captions: ['Noufal Vattavannathodi', 'Developer'] },
  { image: team2, captions: ['Farhan Mecheri', 'Designer'] },
  { image: team3, captions: ['Mahima Nair', 'Manager'] },
  { image: team4, captions: ['Abdul Nazar', 'Analyst'] },
  { image: team5, captions: ['Sarath Pandian', 'Tester'] },
  { image: team6, captions: ['Abdul Mannan', 'Consultant'] },
];

function OurTeam() {
  const imageRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.5 // Adjust this value as needed
    });

    imageRefs.current.forEach((imageContainer) => {
      if (imageContainer) {
        observer.observe(imageContainer);
      }
    });

    return () => {
      imageRefs.current.forEach((imageContainer) => {
        if (imageContainer) {
          observer.unobserve(imageContainer);
        }
      });
    };
  }, []);

  return (
    <div className="row mx-3">
      {teamMembers.map((member, index) => (
        <div className="col-12 col-md-4 p-4" key={index}>
          <div 
            className="image-container" 
            ref={el => imageRefs.current[index] = el}
          >
            <img 
              className='img-fluid' 
              src={member.image} 
              alt={`Team member ${index + 1}`} 
            />
            <div className="captions">
              <div className="caption">{member.captions[0]}</div>
              <div className="caption">{member.captions[1]}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default OurTeam;
