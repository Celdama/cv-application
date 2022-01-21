import React, { useState, useEffect } from 'react';
import { fakeGenInformations } from '../../fakeData';
import { Wrapper, Content } from './generalInformations.styles';

const GeneralInformations = ({
  handleChangeGeneralInformations,
  editMode,
  reset,
}) => {
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
    <Wrapper>
      <Content>
        <h3>Personal Information</h3>
        <form action='#'>
          <input
            type='text'
            name='firstName'
            value={!editMode ? fakeGenInformations.firstName : firstName}
            placeholder='first name'
            onChange={handleChange}
          />
          <input
            type='text'
            name='lastName'
            value={!editMode ? fakeGenInformations.lastName : lastName}
            placeholder='last name'
            onChange={handleChange}
          />
          <input
            type='text'
            name='title'
            value={!editMode ? fakeGenInformations.title : title}
            placeholder='title'
            onChange={handleChange}
          />
          <input
            type='text'
            name='photo'
            value={!editMode ? fakeGenInformations.photo : photo}
            placeholder='photo'
            onChange={handleChange}
          />
          <input
            type='text'
            name='adress'
            value={!editMode ? fakeGenInformations.adress : adress}
            placeholder='adress'
            onChange={handleChange}
          />
          <input
            type='number'
            name='phoneNumber'
            value={!editMode ? fakeGenInformations.phoneNumber : phoneNumber}
            placeholder='phone number'
            onChange={handleChange}
          />
          <input
            type='email'
            name='email'
            value={!editMode ? fakeGenInformations.email : email}
            placeholder='email'
            onChange={handleChange}
          />
          <textarea
            name='description'
            value={!editMode ? fakeGenInformations.description : description}
            placeholder='description'
            onChange={handleChange}
          />
        </form>
      </Content>
    </Wrapper>
  );
};

export default GeneralInformations;
