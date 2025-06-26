import React from 'react';
import { Link } from 'react-router-dom';
import '../pages/Admissions.jsx';
const cellStyle = {
  border: '3px solid #bbb',
  padding: '12px',
  textAlign: 'left'
};


const AdmissionsPage = () => {
  return (
    <div className="content">
      <div style={{marginTop:"40px",maxHeight:'72vh'}} className="page-container">
        <h1>Admissions at Vivekanand College</h1>
        <p>
          Welcome to the Admissions page of Vivekanand College! We are delighted you're considering
          joining our vibrant academic community. Our admission process is designed to be
          straightforward and accessible.
        </p>
        <p>
          Please review the eligibility criteria and key dates below for the upcoming academic year.
          For any queries, feel free to contact our admissions office.
        </p>

        <h2>Eligibility Criteria for Undergraduate Programs</h2>
        <table style={cellStyle} className="admissions-table">
          <thead>
            <tr>
              <th style={cellStyle}>Program</th>
              <th style={cellStyle}>Minimum Qualification</th>
              <th style={cellStyle}>Required Subjects</th>
              <th style={cellStyle}>Minimum Marks (%)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={cellStyle}>B.Sc. Computer Science</td>
              <td style={cellStyle}>10+2 (or equivalent)</td>
              <td style={cellStyle}>Physics, Chemistry, Maths</td>
              <td style={cellStyle}>50%</td>
            </tr>
            <tr>
              <td style={cellStyle}>B.Com. Accounting &amp; Finance</td>
              <td style={cellStyle}>10+2 (or equivalent)</td>
              <td style={cellStyle}>Commerce Stream</td>
              <td style={cellStyle}>45%</td>
            </tr>
            <tr>
              <td style={cellStyle}>B.A. English Literature</td>
              <td style={cellStyle}>10+2 (or equivalent)</td>
              <td style={cellStyle}>Any Stream</td>
              <td style={cellStyle}>40%</td>
            </tr>
          </tbody>
        </table>

        <h2>Application Process</h2>
        <ol>
          <li><b>Online Application:</b> Fill out the application form available on our portal.</li>
          <li>
            <b>Document Submission:</b> Upload scanned copies of required documents (mark sheets,
            ID proof, etc.).
          </li>
          <li><b>Entrance Exam (if applicable):</b> Appear for the college's entrance examination.</li>
          <li>
            <b>Merit List &amp; Interview:</b> Check the merit list and attend the interview if
            shortlisted.
          </li>
          <li><b>Fee Payment:</b> Complete the admission by paying the required fees.</li>
        </ol>

        <p>
          For detailed information on postgraduate program admissions, specific program syllabi,
          and fee structures, please visit our{' '}
          <Link to="/courses" data-discover="true">Courses page</Link> or{' '}
          <Link to="/contact" data-discover="true">Contact us</Link> directly.
        </p>
      </div>
    </div>
  );
};

export default AdmissionsPage;
