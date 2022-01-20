import React from 'react';

const PreviewGenInformations = ({ generalInformations }) => {
  const {
    firstName,
    lastName,
    title,
    adress,
    phoneNumber,
    email,
    description,
  } = generalInformations;

  return (
    <div>
      <p>{firstName}</p>
      <p>{lastName}</p>
      <p>{title}</p>
      <p>{adress}</p>
      <p>{phoneNumber}</p>
      <p>{email}</p>
      <p>{description}</p>
    </div>
  );
};

export default PreviewGenInformations;
