import React, { useState, useEffect } from 'react';
import { fakeEducationalExp } from '../../fakeData';
import { Wrapper, Content } from './educationalExperiences.styles';

const EducationalExperiences = ({
  handleChangeEducationalExperience,
  handleAddEducationalExperience,
  handleDeleteEducationalExperience,
  educationalExperiencesList,
  editMode,
}) => {
  const [formData, setFormData] = useState({
    universityName: '',
    city: '',
    degree: '',
    subject: '',
    from: '',
    to: '',
  });

  useEffect(() => {
    handleChangeEducationalExperience(formData);
  }, [handleChangeEducationalExperience, formData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData({
      universityName: '',
      city: '',
      degree: '',
      subject: '',
      from: '',
      to: '',
    });
    handleAddEducationalExperience();
  };

  const educationalExpElements = educationalExperiencesList.map(
    ({ id, universityName, city, degree, subject, from, to }) => {
      return (
        <div className='educational-details' key={id}>
          <div>{universityName}</div>
          <div>{city}</div>
          <div>{degree}</div>
          <div>{subject}</div>
          <div>{from}</div>
          <div>{to}</div>

          <button onClick={() => handleDeleteEducationalExperience(id)}>
            Delete
          </button>
        </div>
      );
    }
  );

  const { universityName, city, degree, subject, from, to } = formData;

  return (
    <Wrapper>
      <Content>
        <h3>Educational</h3>
        <div className='educationals-list'>
          {educationalExperiencesList.length > 0 && educationalExpElements}
        </div>

        <form onSubmit={handleSubmit}>
          <input
            type='text'
            name='universityName'
            value={
              !editMode ? fakeEducationalExp.universityName : universityName
            }
            placeholder='university Name'
            onChange={handleChange}
          />
          <input
            type='text'
            name='city'
            value={!editMode ? fakeEducationalExp.city : city}
            placeholder='city'
            onChange={handleChange}
          />
          <input
            type='text'
            name='degree'
            value={!editMode ? fakeEducationalExp.degree : degree}
            placeholder='degree'
            onChange={handleChange}
          />
          <input
            type='text'
            name='subject'
            value={!editMode ? fakeEducationalExp.subject : subject}
            placeholder='subject'
            onChange={handleChange}
          />
          <input
            type='text'
            name='from'
            value={!editMode ? fakeEducationalExp.from : from}
            placeholder='from'
            onChange={handleChange}
          />
          <input
            type='text'
            name='to'
            value={!editMode ? fakeEducationalExp.to : to}
            placeholder='to'
            onChange={handleChange}
          />
          {editMode && <button>Add</button>}
        </form>
      </Content>
    </Wrapper>
  );
};

export default EducationalExperiences;
