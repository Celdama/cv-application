import React, { useState, useEffect } from 'react';

const GeneralInformations = ({ handleChangeGeneralInformations }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    title: '',
    photo: '',
    adress: '',
    phoneNumber: '',
    email: '',
    description: '',
  });

  useEffect(() => {
    handleChangeGeneralInformations(formData);
  }, [handleChangeGeneralInformations, formData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: value,
      };
    });
  };

  const {
    firstName,
    lastName,
    title,
    photo,
    adress,
    phoneNumber,
    email,
    description,
  } = formData;

  return (
    <div>
      <h3>Personal Information</h3>
      <form action='#'>
        <input
          type='text'
          name='firstName'
          value={firstName}
          placeholder='first name'
          onChange={handleChange}
        />
        <input
          type='text'
          name='lastName'
          value={lastName}
          placeholder='last name'
          onChange={handleChange}
        />
        <input
          type='text'
          name='title'
          value={title}
          placeholder='title'
          onChange={handleChange}
        />
        <input
          type='text'
          name='photo'
          value={photo}
          placeholder='photo'
          onChange={handleChange}
        />
        <input
          type='text'
          name='adress'
          value={adress}
          placeholder='adress'
          onChange={handleChange}
        />
        <input
          type='number'
          name='phoneNumber'
          value={phoneNumber}
          placeholder='phone number'
          onChange={handleChange}
        />
        <input
          type='email'
          name='email'
          value={email}
          placeholder='email'
          onChange={handleChange}
        />
        <textarea
          name='description'
          value={description}
          placeholder='description'
          onChange={handleChange}
        />
        {/* <button>add</button> */}
      </form>
    </div>
  );
};

export default GeneralInformations;
