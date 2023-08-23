/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import '../style.css';


const EducationalExperience = (props) => {
  const [degree, setDegree] = useState('');
  const [school, setSchool] = useState('');
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();
    // Pass the updated values back to the parent component using the setter functions
    props.setDegree(degree);
    props.setSchool(school);
    props.setCity(city);
    props.setCountry(country);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Educational Experience</h1>
        <label>
          Degree:
          <input
            type='text'
            value={degree}
            placeholder='Enter Your Degree'
            onChange={(e) => setDegree(e.target.value)}
          />
        </label>
        <label>
          School:
          <input
            type='text'
            value={school}
            placeholder='Enter Your School'
            onChange={(e) => setSchool(e.target.value)}
          />
        </label>
        <label>
          City:
          <input
            type='text'
            value={city}
            placeholder='Enter Your City'
            onChange={(e) => setCity(e.target.value)}
          />
        </label>
        <label>
          Country:
          <input
            type='text'
            value={country}
            placeholder='Enter Your Country'
            onChange={(e) => setCountry(e.target.value)}
          />
        </label>
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};

export default EducationalExperience;
