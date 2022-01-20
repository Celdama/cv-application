import React from 'react';

const Preview = ({
  generalInformations,
  practicalExperiences,
  practicalExperiencesList,
  educationalExperiences,
  educationalExperiencesList,
}) => {
  console.log(practicalExperiencesList);
  const practicalExpElements = practicalExperiencesList.map((element) => {
    return (
      <div key={element.id}>
        <div>
          <p>
            Position : <span>{element.position}</span>
          </p>
          <p>
            Company : <span>{element.company}</span>
          </p>
          <p>
            City : <span>{element.city}</span>
          </p>
          <p>
            From : <span>{element.from}</span>
          </p>
          <p>
            To : <span>{element.to}</span>
          </p>
        </div>
      </div>
    );
  });

  const educationalExpElements = educationalExperiencesList.map((element) => {
    return (
      <div key={element.id}>
        <div>
          <p>
            University : <span>{element.universityName}</span>
          </p>
          <p>
            City: <span>{element.city}</span>
          </p>
          <p>
            Degree: <span>{element.degree}</span>
          </p>
          <p>
            Subject: <span>{element.subject}</span>
          </p>
          <p>
            From: <span>{element.from}</span>
          </p>
          <p>
            To: <span>{element.to}</span>
          </p>
        </div>
      </div>
    );
  });

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
        {practicalExperiencesList.length > 0 && practicalExpElements}
        <p>{practicalExperiences.position}</p>
        <p>{practicalExperiences.company}</p>
        <p>{practicalExperiences.city}</p>
        <p>{practicalExperiences.from}</p>
        <p>{practicalExperiences.to}</p>
      </div>
      <div>
        <h3>Educational</h3>
        {educationalExperiencesList.length > 0 && educationalExpElements}

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
