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

  return (
    <div>
      <h3>Personal Information</h3>
      <form action='#'>
        <input
          type='text'
          name='firstName'
          id=''
          placeholder='first name'
          onChange={handleChange}
        />
        <input
          type='text'
          name='lastName'
          id=''
          placeholder='last name'
          onChange={handleChange}
        />
        <input
          type='text'
          name='title'
          id=''
          placeholder='title'
          onChange={handleChange}
        />
        <input
          type='text'
          name='photo'
          id=''
          placeholder='photo'
          onChange={handleChange}
        />
        <input
          type='text'
          name='adress'
          id=''
          placeholder='adress'
          onChange={handleChange}
        />
        <input
          type='number'
          name='phoneNumber'
          id=''
          placeholder='phone number'
          onChange={handleChange}
        />
        <input
          type='email'
          name='email'
          id=''
          placeholder='email'
          onChange={handleChange}
        />
        <textarea
          name='description'
          id=''
          placeholder='description'
          onChange={handleChange}
        />
        {/* <button>add</button> */}
      </form>
    </div>
  );
};

export default GeneralInformations;
