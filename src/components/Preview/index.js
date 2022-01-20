import React from 'react';

const Preview = ({
  generalInformations,
  practicalExperiences,
  educationalExperiences,
}) => {
  return (
    <div>
      <div>
        <h3>General</h3>
        <p>{generalInformations.firstName}</p>
        <p>{generalInformations.lastName}</p>
        <p>{generalInformations.title}</p>
        <p>{generalInformations.adress}</p>
        <p>{generalInformations.phoneNumber}</p>
        <p>{generalInformations.email}</p>
        <p>{generalInformations.description}</p>
      </div>
      <div>
        <h3>Experiences</h3>
        <p>{practicalExperiences.position}</p>
        <p>{practicalExperiences.company}</p>
        <p>{practicalExperiences.city}</p>
        <p>{practicalExperiences.from}</p>
        <p>{practicalExperiences.to}</p>
      </div>
      <div>
        <h3>Educational</h3>
        <p>{educationalExperiences.universityName}</p>
        <p>{educationalExperiences.city}</p>
        <p>{educationalExperiences.degree}</p>
        <p>{educationalExperiences.subject}</p>
        <p>{educationalExperiences.from}</p>
        <p>{educationalExperiences.to}</p>
      </div>
    </div>
  );
};

export default Preview;
