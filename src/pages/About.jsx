import React from 'react';
import './About.css'
const About = () => {
  return (
   <div className="content">
      <div style={{marginTop:"40px",maxHeight:'72vh'}} className="page-container ">
        <h1 style={{fontSize:'50px',color:'#007bff' }} className="animate-fade-in-up text-center ">About Vivekanand College</h1>

        <p>
          Vivekanand College stands as a beacon of knowledge and integrity, committed to delivering
          transformative education since its inception in <strong>1980</strong>. Located in the bustling heart of
          <strong> Chembur, Mumbai</strong>, our college has consistently strived to uphold the highest standards of
          academic rigor and ethical values.
        </p>

        <p>
          Our vision is to empower students with critical thinking skills, a global perspective, and a
          strong sense of social responsibility. We aim to nurture individuals who are not only
          successful in their careers but also contributing members of society.
        </p>

        <h2>Our Mission</h2>
        <ul>
          <li>To provide high-quality, accessible education across various disciplines.</li>
          <li>To foster research, innovation, and creativity among students and faculty.</li>
          <li>To cultivate a diverse and inclusive learning environment.</li>
          <li>To instill strong ethical values and leadership qualities.</li>
        </ul>

        <h2>Our Values</h2>
        <p>
          Integrity, Excellence, Innovation, Community, and Respect are the pillars upon which
          Vivekanand College is built. We encourage open dialogue, intellectual curiosity, and a
          relentless pursuit of knowledge.
        </p>

        <h2>Our History</h2>
        <p>
          Our journey began with a vision to make quality education available to all, and we continue
          that legacy today. Over the years, we’ve achieved key milestones, expanded programs, and
          proudly nurtured generations of successful alumni.
        </p>
      </div>
      {/* <Chatbot/> */}
    </div>
  );
};

export default About;