/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import '../style.css'

const PracticalExperience = () => {
    const [title, setTitle] = useState('');
    const [company, setCompany] = useState('');
    const [description, setDescription] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault();
        // You can perform form submission actions here
    };

    return ( 
        <div>
            <form onSubmit={handleSubmit}>
                <h1>Practical Experience</h1>
                <label>
                    Title 
                    <input 
                    type='title'
                    value = {title}
                    placeholder='Enter Job Title'
                    onChange={(e)=>setTitle(e.target.value)}
                    />
                </label>

                <label>
                    Company 
                    <input 
                    type='company'
                    value = {company}
                    placeholder='Enter Company'
                    onChange={(e)=> setCompany(e.target.value)}
                    />
                </label>

                <label>
                    Description 
                    <input 
                    type='description'
                    value = {description}
                    placeholder='Enter Description (Tasks, Accomplishments, Contribution)'
                    onChange={(e)=>setDescription(e.target.value)}

                    />
                </label>

                <button>Submit</button>
            </form>
        </div>
     );
}
 
export default PracticalExperience;