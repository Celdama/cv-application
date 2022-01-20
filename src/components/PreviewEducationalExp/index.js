import React from 'react';

const PreviewEducationalExp = ({ educationalExperience }) => {
  const { universityName, city, degree, subject, from, to } =
    educationalExperience;

  return (
    <div>
      <p>{universityName}</p>
      <p>{city}</p>
      <p>{degree}</p>
      <p>{subject}</p>
      <p>{from}</p>
      <p>{to}</p>
    </div>
  );
};

export default PreviewEducationalExp;
