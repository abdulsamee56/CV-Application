/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import '../style.css'
const GeneralInformation = () => {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [city, setCity] = useState('');
    const [province, setProvince] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // You can perform form submission actions here
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
                    City:
                    <input
                        type="text"
                        value={city}
                        placeholder='Enter Your City'
                        onChange={(e) => setCity(e.target.value)}
                        required
                    />
                </label>
                <label>
                    Province:
                    <input
                        type="text"
                        value={province}
                        placeholder='Enter Your Province'
                        onChange={(e) => setProvince(e.target.value)}
                        required
                    />
                </label>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default GeneralInformation;
