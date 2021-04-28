import React, { useState } from 'react';

const Signup = () => {
    const supportedTitles = ['Mr.', 'Ms.', 'Mrs.', 'Mx.', 'Dr.', 'Other'];
    const supportedGenders = ['Woman', "Man", "Transgender", "Nonbinary", "Prefer not to respond"];
    // Form values in state
    const [title, setTitle] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [dob, setDOB] = useState('');
    const [phone, setPhone] = useState('');
    const [gender, setGender] = useState('');

    const handleSubmit = event => {
        event.preventDefault();
        setTitle('');
        setFirstName('');
        setLastName('');
        setEmail('');
        setDOB('');
        setPhone('')
        setGender('');
    }

    return (
        <form id="form" onSubmit={handleSubmit}>
            <div>
                <label htmlFor="title">Title*</label>
                <select
                    name="title"
                    value={title}
                    onChange={event => setTitle(event.target.value)}
                    required>
                    {supportedTitles.map(title =>
                        <option key={title} value={title}>{title}</option>)}
                </select>
            </div>
            <div>
                <label htmlFor="firstName">First Name*</label>
                <input
                    name="firstName"
                    type="text"
                    value={firstName}
                    onChange={event => setFirstName(event.target.value)}
                    required />
            </div>
            <div>
                <label htmlFor="lastName">Last Name*</label>
                <input
                    name="lastName"
                    type="text"
                    value={lastName}
                    onChange={event => setLastName(event.target.value)}
                    required />
            </div>
            <div>
                <label htmlFor="email">Email*</label>
                <input
                    name="email"
                    type="email"
                    value={email}
                    onChange={event => setEmail(event.target.value)}
                    required />
            </div>
            <div>
                <label htmlFor="dob">Date of Birth</label>
                <input
                    name="dob"
                    type="date"
                    value={dob}
                    onChange={event => setDOB(event.target.value)} />
            </div>
            <div>
                <label htmlFor="phone">Phone Number</label>
                <input
                    name="phone"
                    type="phone"
                    value={phone}
                    onChange={event => setPhone(event.target.value)} />
            </div>
            <div>
                {supportedGenders.map((thisGender, index) => <div key={index}>
                        <input
                        type="radio"
                        name="gender"
                        checked={gender === thisGender}
                        id={"genderChoice" + index}
                        value={thisGender}
                        onChange={event => setGender(event.target.value)} />
                    <label htmlFor={"genderChoice" + index}>{gender}</label>
                    </div>)}
            </div>
            <button type="submit">Sign me up!</button>
        </form>
    )
}

export default Signup;