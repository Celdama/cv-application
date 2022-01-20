import React from 'react';

const Preview = ({ generalInformations }) => {
  return (
    <div>
      <p>{generalInformations.firstName}</p>
      <p>{generalInformations.lastName}</p>
      <p>{generalInformations.title}</p>
      <p>{generalInformations.adress}</p>
      <p>{generalInformations.phoneNumber}</p>
      <p>{generalInformations.email}</p>
      <p>{generalInformations.description}</p>
    </div>
  );
};

export default Preview;
