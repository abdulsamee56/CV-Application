/* eslint-disable no-unused-vars */
import { useState } from 'react'
import GeneralInformation from './Components/GeneralInformation'
import EducationalExperience from './Components/EducationalExperience'
import PracticalExperience from './Components/PracticalExperience'
import './style.css'
function App() {
  return (
    <div className='container'>
      <div className='left'>
        <GeneralInformation/>
      <EducationalExperience/>
      <PracticalExperience/>
      </div>
      

      <div className='right'>
  <div className='resume-paper'>
    <div className='section'>
      <h2>General Information</h2>
      <p>Full Name: John Doe</p>
      <p>Email: johndoe@example.com</p>
      <p>Phone Number: (123) 456-7890</p>
      <p>City and Province: Anytown, Province</p>
      <button>Save</button>
    </div>

    <div className='section'>
      <h2>Education Experience</h2>
      <p>Degree: Bachelor of Science</p>
      <p>School: University of Example</p>
      <p>City: Sampleville</p>
      <p>Country: United States</p>
      <p>Start Date: Aug, 2019</p>
      <p>End Date: May, 2023</p>
      <button>Save</button>
    </div>

    <div className='section'>
      <h2>Professional Experience</h2>
      <p>Job Title: Software Engineer</p>
      <p>Company: Tech Solutions Inc.</p>
      <p>Start Date: Jan, 2022</p>
      <p>End Date: Present</p>
      <p>Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae enim sed sem volutpat tincidunt.</p>
      <button>Save</button>
    </div>
  </div>
</div>

    </div>
  )
}

export default App
