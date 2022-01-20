import React, { useState, useEffect } from 'react';
import { fakePracticalExp } from '../../fakeData';

const PracticalExperiences = ({
  handleChangePracticalExperience,
  handleAddPracticalExperience,
  editMode,
}) => {
  const [formData, setFormData] = useState({
    position: '',
    company: '',
    city: '',
    from: '',
    to: '',
  });

  useEffect(() => {
    handleChangePracticalExperience(formData);
  }, [handleChangePracticalExperience, formData]);

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
      position: '',
      company: '',
      city: '',
      from: '',
      to: '',
    });

    handleAddPracticalExperience();
  };

  const { position, company, city, from, to } = formData;

  return (
    <div>
      <h3>Experience</h3>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          name='position'
          value={!editMode ? fakePracticalExp.position : position}
          placeholder='position'
          onChange={handleChange}
        />
        <input
          type='text'
          name='company'
          value={!editMode ? fakePracticalExp.company : company}
          placeholder='company'
          onChange={handleChange}
        />
        <input
          type='text'
          name='city'
          value={!editMode ? fakePracticalExp.city : city}
          placeholder='city'
          onChange={handleChange}
        />
        <input
          type='text'
          name='from'
          value={!editMode ? fakePracticalExp.from : from}
          placeholder='from'
          onChange={handleChange}
        />
        <input
          type='text'
          name='to'
          value={!editMode ? fakePracticalExp.to : to}
          placeholder='to'
          onChange={handleChange}
        />
        {editMode && <button>add</button>}
      </form>
    </div>
  );
};

export default PracticalExperiences;
