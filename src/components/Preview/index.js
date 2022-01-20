import React from 'react';
import PreviewGenInformations from '../PreviewGenInformations';
import PreviewPracticalExp from '../PreviewPracticalExp';
import PreviewEducationalExp from '../PreviewEducationalExp';

const Preview = ({
  generalInformations,
  practicalExperience,
  practicalExperiencesList,
  handleDeletePracticalExperience,
  educationalExperience,
  educationalExperiencesList,
  handleDeleteEducationalExperience,
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
          <button onClick={() => handleDeletePracticalExperience(id)}>
            delete
          </button>
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

          <button onClick={() => handleDeleteEducationalExperience(id)}>
            delete
          </button>
        </div>
      );
    }
  );

  return (
    <div>
      <div>
        <h3>General</h3>
        <PreviewGenInformations generalInformations={generalInformations} />
      </div>
      <div>
        <h3>Experiences</h3>
        {practicalExperiencesList.length > 0 && practicalExpElements}
        <PreviewPracticalExp practicalExperience={practicalExperience} />
      </div>
      <div>
        <h3>Educational</h3>
        {educationalExperiencesList.length > 0 && educationalExpElements}
        <PreviewEducationalExp educationalExperience={educationalExperience} />
      </div>
    </div>
  );
};

export default Preview;
