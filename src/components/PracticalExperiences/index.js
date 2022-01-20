import React, { useState, useEffect } from 'react';

const PracticalExperiences = ({ handleChangePracticalExperiences }) => {
  const [formData, setFormData] = useState({
    position: '',
    company: '',
    city: '',
    from: '',
    to: '',
  });

  useEffect(() => {
    handleChangePracticalExperiences(formData);
  }, [handleChangePracticalExperiences, formData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: value,
      };
    });
  };

  const { position, company, city, from, to } = formData;

  return (
    <div>
      <h3>Experience</h3>
      <form action='#'>
        <input
          type='text'
          name='position'
          value={position}
          placeholder='position'
          onChange={handleChange}
        />
        <input
          type='text'
          name='company'
          value={company}
          placeholder='company'
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
        {/* <button>add</button> */}
      </form>
    </div>
  );
};

export default PracticalExperiences;
