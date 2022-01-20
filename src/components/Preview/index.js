import React from 'react';
import PracticalExperiences from '../PracticalExperiences';

const Preview = ({
  generalInformations,
  practicalExperience,
  practicalExperiencesList,
  educationalExperience,
  educationalExperiencesList,
}) => {
  const practicalExpElements = practicalExperiencesList.map(
    ({ id, position, company, city, from, to }) => {
      return (
        <div key={id}>
          <div>
            <p>
              Position : <span>{position}</span>
            </p>
            <p>
              Company : <span>{company}</span>
            </p>
            <p>
              City : <span>{city}</span>
            </p>
            <p>
              From : <span>{from}</span>
            </p>
            <p>
              To : <span>{to}</span>
            </p>
          </div>
        </div>
      );
    }
  );

  const educationalExpElements = educationalExperiencesList.map(
    ({ id, universityName, city, degree, subject, from, to }) => {
      return (
        <div key={id}>
          <div>
            <p>
              University : <span>{universityName}</span>
            </p>
            <p>
              City: <span>{city}</span>
            </p>
            <p>
              Degree: <span>{degree}</span>
            </p>
            <p>
              Subject: <span>{subject}</span>
            </p>
            <p>
              From: <span>{from}</span>
            </p>
            <p>
              To: <span>{to}</span>
            </p>
          </div>
        </div>
      );
    }
  );

  const {
    firstName,
    lastName,
    title,
    adress,
    phoneNumber,
    email,
    description,
  } = generalInformations;

  const { position, company, city, from, to } = practicalExperience;

  return (
    <div>
      <div>
        <h3>General</h3>
        <p>{firstName}</p>
        <p>{lastName}</p>
        <p>{title}</p>
        <p>{adress}</p>
        <p>{phoneNumber}</p>
        <p>{email}</p>
        <p>{description}</p>
      </div>
      <div>
        <h3>Experiences</h3>
        {practicalExperiencesList.length > 0 && practicalExpElements}
        <p>{position}</p>
        <p>{company}</p>
        <p>{city}</p>
        <p>{from}</p>
        <p>{to}</p>
      </div>
      <div>
        <h3>Educational</h3>
        {educationalExperiencesList.length > 0 && educationalExpElements}

        <p>{educationalExperience.universityName}</p>
        <p>{educationalExperience.city}</p>
        <p>{educationalExperience.degree}</p>
        <p>{educationalExperience.subject}</p>
        <p>{educationalExperience.from}</p>
        <p>{educationalExperience.to}</p>
      </div>
    </div>
  );
};

export default Preview;
