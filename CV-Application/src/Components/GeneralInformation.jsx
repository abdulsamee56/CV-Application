/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import '../style.css'
const GeneralInformation = (props) => {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [linkedin, setLinkedin] = useState('');
    const [github, setGithub] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        props.setFullName(fullName);
        props.setEmail(email);
        props.setPhoneNumber(phoneNumber);
        props.setLinkedin(linkedin);
        props.setGithub(github);

    };

    return (
        <div>

            
            <form onSubmit={handleSubmit}>
            <h1>General Information</h1>
                <label>
                    Full Name
                    <input 
                    type='name'
                    value =  {fullName}
                    placeholder='Enter Your Full Name'
                    onChange={(e) => setFullName(e.target.value)}
                    />
                </label>
                <label>
                    Email:
                    <input
                        type="email"
                        value={email}
                        placeholder='Enter Your Email'
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </label>
                <label>
                    Phone Number:
                    <input
                        type="tel"
                        value={phoneNumber}
                        placeholder='Enter Your Phone Number'
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        required
                    />
                </label>
                <label>
                    LinkedIn:
                    <input
                        type="text"
                        value={linkedin}
                        placeholder='Enter Your linkedin'
                        onChange={(e) => setLinkedin(e.target.value)}
                        required
                    />
                </label>
                <label>
                    Github:
                    <input
                        type="text"
                        value={github}
                        placeholder='Enter Your github link'
                        onChange={(e) => setGithub(e.target.value)}
                        required
                    />
                </label>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default GeneralInformation;
