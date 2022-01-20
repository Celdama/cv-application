import React, { useState, useEffect } from 'react';
import { fakeEducationalExp } from '../../fakeData';

const EducationalExperiences = ({
  handleChangeEducationalExperience,
  handleAddEducationalExperience,
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

  const { universityName, city, degree, subject, from, to } = formData;

  return (
    <div>
      <h3>Educational</h3>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          name='universityName'
          value={!editMode ? fakeEducationalExp.universityName : universityName}
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
        {editMode && <button>add</button>}
      </form>
    </div>
  );
};

export default EducationalExperiences;
