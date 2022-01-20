import React from 'react';

const PreviewPracticalExp = ({ practicalExperience }) => {
  const { position, company, city, from, to } = practicalExperience;

  return (
    <div>
      <p>{position}</p>
      <p>{company}</p>
      <p>{city}</p>
      <p>{from}</p>
      <p>{to}</p>
    </div>
  );
};

export default PreviewPracticalExp;
