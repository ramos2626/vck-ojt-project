import React from 'react';

import { Link } from 'react-router-dom';
import './Home.css'; // Make sure to include this CSS file

const Home = () => {
  return (
    <div className="content">
      <div style={{ marginTop: "40px", maxHeight: '72vh' }} className="page-container ">
        <div className="hero-section">
          <div className="hero-image-container">
            <img alt="vivekanand college campus" className="hero-banner-image" src="/vck.jpg"></img>
          </div>
          <div className="hero-overlay-text ">
            <h1 className='animate-fade-in-up' style={{color:'white'}}>Welcome to Vivekanand College!</h1>
            <p className="hero-subtext">Your journey to excellence starts here</p>
            <Link className="hero-btn" to="/admissions" data-discover="true">Apply Now</Link>
          </div>
        </div>

        <p>
          <b>Vivekanand College</b> is a premier educational institution dedicated to fostering
          academic excellence, innovation, and holistic development. Established in 1980, we
          have proudly served generations of students, empowering them to achieve their full
          potential.
        </p>

        <p>
          At Vivekanand College, we believe in a vibrant learning environment that extends
          beyond textbooks. Our state-of-the-art facilities, experienced faculty, and diverse
          student community create a unique ecosystem where curiosity thrives and future
          leaders are shaped.
        </p>

        <h2>Why Choose Vivekanand College?</h2>
        <ul>
          <li><b>Legacy of Excellence:</b> Decades of commitment to quality education.</li>
          <li><b>Experienced Faculty:</b> Learn from renowned experts and passionate educators.</li>
          <li><b>Modern Facilities:</b> Well-equipped labs, expansive library, and comfortable campus.</li>
          <li><b>Holistic Development:</b> Focus on co-curricular activities, sports, and community service.</li>
          <li><b>Strong Placements:</b> Excellent career opportunities with leading companies.</li>
        </ul>

        <h2>Campus Life & Facilities</h2>
        <div className="image-gallery">
          <img alt="Students studying in library" src="https://vck-ojt.vercel.app/assets/students-studying-DbLGuwF_.jpeg" />
          <img alt="Students on campus ground" src="https://vck-ojt.vercel.app/assets/campus-life-Crkero7B.jpg" />
        </div>

        <p>
          Explore our vibrant campus and state-of-the-art facilities designed to enhance your
          learning experience and personal growth.
        </p>

        <div className="call-to-action">
          <p>Ready to explore our courses?</p>
          <Link className="btn" to="/courses" data-discover="true">
            Explore Courses
          </Link>
        </div>
      </div>
      {/* <Chatbot/> */}
    </div>
  );
};

export default Home;
