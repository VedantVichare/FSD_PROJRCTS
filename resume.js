import React, { useState } from 'react';
import './resume.css';  // Ensure this points to your CSS file

function resume() {
  const [formData, setFormData] = useState({
    name: '',
    professionalSummary: '',
    education: '',
    academicSkills: '',
    nonAcademicSkills: '',
    careerObjective: '',
    experience: '',
    internships: '',
    achievements: ''
  });

  const [successMessage, setSuccessMessage] = useState('');
  const [submittedData, setSubmittedData] = useState(null); // To store the submitted resume data

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccessMessage('Resume created successfully!');
    setSubmittedData(formData); // Store submitted data to display
  };

  return (
    <div className="resume-builder-container">
      <div className="form-container">
        <h1>Resume Builder</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Full Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="professionalSummary">Professional Summary:</label>
            <textarea
              id="professionalSummary"
              name="professionalSummary"
              value={formData.professionalSummary}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="education">Education Qualifications:</label>
            <textarea
              id="education"
              name="education"
              value={formData.education}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="academicSkills">Academic Skills:</label>
            <textarea
              id="academicSkills"
              name="academicSkills"
              value={formData.academicSkills}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="nonAcademicSkills">Non-Academic Skills:</label>
            <textarea
              id="nonAcademicSkills"
              name="nonAcademicSkills"
              value={formData.nonAcademicSkills}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="careerObjective">Career Objective:</label>
            <textarea
              id="careerObjective"
              name="careerObjective"
              value={formData.careerObjective}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="experience">Experience:</label>
            <textarea
              id="experience"
              name="experience"
              value={formData.experience}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="internships">Internships:</label>
            <textarea
              id="internships"
              name="internships"
              value={formData.internships}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="achievements">Skills and Achievements:</label>
            <textarea
              id="achievements"
              name="achievements"
              value={formData.achievements}
              onChange={handleChange}
            />
          </div>

          <button type="submit">Submit</button>
        </form>

        {successMessage && <div className="success-message">{successMessage}</div>}
      </div>

      {submittedData && (
        <div className="resume-display">
          <h2>Your Resume</h2>
          <div className="resume-section">
            <h3>Name:</h3>
            <p>{submittedData.name}</p>
          </div>
          <div className="resume-section">
            <h3>Professional Summary:</h3>
            <p>{submittedData.professionalSummary}</p>
          </div>
          <div className="resume-section">
            <h3>Education Qualifications:</h3>
            <p>{submittedData.education}</p>
          </div>
          <div className="resume-section">
            <h3>Academic Skills:</h3>
            <p>{submittedData.academicSkills}</p>
          </div>
          <div className="resume-section">
            <h3>Non-Academic Skills:</h3>
            <p>{submittedData.nonAcademicSkills}</p>
          </div>
          <div className="resume-section">
            <h3>Career Objective:</h3>
            <p>{submittedData.careerObjective}</p>
          </div>
          <div className="resume-section">
            <h3>Experience:</h3>
            <p>{submittedData.experience}</p>
          </div>
          <div className="resume-section">
            <h3>Internships:</h3>
            <p>{submittedData.internships}</p>
          </div>
          <div className="resume-section">
            <h3>Skills and Achievements:</h3>
            <p>{submittedData.achievements}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default resume;

