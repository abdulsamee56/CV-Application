/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import GeneralInformation from './Components/GeneralInformation';
import EducationalExperience from './Components/EducationalExperience';
import PracticalExperience from './Components/PracticalExperience';
import './style.css';

function App() {
  // General Information state
  const [fullName, setFullName] = useState('First Last');
  const [phone, setPhoneNumber] = useState('(123) 456-7890');
  const [email, setEmail] = useState('johndoe@example.com');
  const [linkedin, setLinkedin] = useState('linkedin.com/Jake');
  const [github, setGithub] = useState('Github.com/Jake');

  // Education Experience state
  const [degree, setDegree] = useState('Bachelor of Science');
  const [school, setSchool] = useState('University of Example');
  const [startDateEducation, setStartDateEducation] = useState('Aug, 2019');
  const [endDateEducation, setEndDateEducation] = useState('May, 2023');
  const [city, setCity] = useState('Sampleville');
  const [country, setCountry] = useState('United States');

  // Work Experience state
  const [jobTitle, setJobTitle] = useState('Job Title');
  const [companyName, setCompanyName] = useState('Company Name');
  const [startDateWork, setStartDateWork] = useState('Aug, 2019');
  const [endDateWork, setEndDateWork] = useState('May, 2023');
  const [jobDescription, setJobDescription] = useState('-Your Job Description');

  return (
    <div className='container'>
     <div className='left'>
        <GeneralInformation
          fullName = {fullName}
          setFullName = {setFullName}
          phone={phone}
          setPhoneNumber={setPhoneNumber}
          email={email}
          setEmail={setEmail}
          linkedin={linkedin}
          setLinkedin={setLinkedin}
          github={github}
          setGithub={setGithub}
        />
        <EducationalExperience
          degree={degree}
          setDegree={setDegree}
          school={school}
          setSchool={setSchool}
          startDate={startDateEducation}
          setStartDate={setStartDateEducation}
          endDate={endDateEducation}
          setEndDate={setEndDateEducation}
          city={city}
          setCity={setCity}
          country={country}
          setCountry={setCountry}
        />
        <PracticalExperience
          jobTitle={jobTitle}
          setJobTitle={setJobTitle}
          companyName={companyName}
          setCompanyName={setCompanyName}
          startDate={startDateWork}
          setStartDate={setStartDateWork}
          endDate={endDateWork}
          setEndDate={setEndDateWork}
          jobDescription={jobDescription}
          setJobDescription={setJobDescription}
        />
      </div>

      <div className='right'>
  <div className='resume-paper'>
    <div className='section-1'>
      <h2>{fullName}</h2>
      <div className='sub'>
        <p>{phone}   |</p>
        <p>{email}   | </p>
        <p>{linkedin}   | </p>
        <p>{github}</p>
      </div>
    </div>

    <div className='section-2'>
      <h2>Education Experience</h2>

      <div className="mini">
        <div className="sub2">
          <p>{degree}</p>
          <p>{school}</p>
        </div>

        <div className='sub2'>
          <div className="date">
            <p>{startDateEducation} -</p>
            <p>{endDateEducation}</p>
          </div>
          <div className="loc">
            <p>{city}</p>
            <p>{country}</p>
          </div>
        </div>
      </div>
    </div>

    <div className='section-2'>
      <h2>Work Experience</h2>

      <div className="mini">
        <div className="sub2">
          <p>{jobTitle}</p>
          <p>{companyName}</p>
        </div>

        <div className='sub2'>
          <div className="date">
            <p>{startDateWork} -</p>
            <p>{endDateWork}</p>
          </div>
        </div>
      </div>
      <div className="description">
        <p>{jobDescription}</p>
      </div>
    </div>
  </div>
</div>

    </div>
  )
}

export default App
