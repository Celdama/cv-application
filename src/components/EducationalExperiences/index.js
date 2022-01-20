import React, { useState, useEffect } from 'react';

const EducationalExperiences = ({
  handleChangeEducationalExperiences,
  handleAddEducationalExperience,
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
    handleChangeEducationalExperiences(formData);
  }, [handleChangeEducationalExperiences, formData]);

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
      <form action='#'>
        <input
          type='text'
          name='universityName'
          value={universityName}
          placeholder='university Name'
          onChange={handleChange}
        />
        <input
          type='text'
          name='city'
          value={city}
          placeholder='city'
          onChange={handleChange}
        />
        <input
          type='text'
          name='degree'
          value={degree}
          placeholder='degree'
          onChange={handleChange}
        />
        <input
          type='text'
          name='subject'
          value={subject}
          placeholder='subject'
          onChange={handleChange}
        />
        <input
          type='text'
          name='from'
          value={from}
          placeholder='from'
          onChange={handleChange}
        />
        <input
          type='text'
          name='to'
          value={to}
          placeholder='to'
          onChange={handleChange}
        />
        <button onClick={handleSubmit}>add</button>
      </form>
    </div>
  );
};

export default EducationalExperiences;
