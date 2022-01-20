import React from 'react';
import PreviewGenInformations from '../PreviewGenInformations';
import PreviewPracticalExp from '../PreviewPracticalExp';
import PreviewEducationalExp from '../PreviewEducationalExp';
import {
  Wrapper,
  Content,
  HeaderSpace,
  MainContent,
  SideContent,
} from './preview.styles';

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
    <Wrapper>
      <HeaderSpace>
        <h1>
          {generalInformations.firstName} {generalInformations.lastName}
        </h1>
        <p>{generalInformations.title}</p>
      </HeaderSpace>
      <Content>
        <MainContent>
          <div className='description-container'>
            <h4>Description</h4>
            <p>{generalInformations.description}</p>
          </div>
          {/* <div>
          <h3>General</h3>
          <PreviewGenInformations generalInformations={generalInformations} />
        </div> */}
          <div className='practical-container'>
            <h4>Experiences</h4>
            {/* {practicalExperiencesList.length > 0 && practicalExpElements} */}
            <div className='practical'>
              <div>
                <span>
                  {practicalExperience.from} - {practicalExperience.to}
                </span>
              </div>
              <div>
                <p>{practicalExperience.position}</p>
                <p>
                  {practicalExperience.company}, {practicalExperience.city}
                </p>
              </div>
            </div>
            {/* <PreviewPracticalExp practicalExperience={practicalExperience} /> */}
          </div>
          <div className='educational-container'>
            <h4>Educational</h4>
            {educationalExperiencesList.length > 0 && educationalExpElements}
            <div className='educational'>
              <div>
                <span>
                  {educationalExperience.from} - {educationalExperience.to}
                </span>
              </div>
              <div>
                <p>
                  {educationalExperience.universityName},{' '}
                  {educationalExperience.city}
                </p>
                <p>Degree: {educationalExperience.degree}</p>
                <p>Subject: {educationalExperience.subject}</p>
              </div>
            </div>
            {/* <PreviewEducationalExp
              educationalExperience={educationalExperience}
            /> */}
          </div>
        </MainContent>
        <SideContent>
          <span>photo here</span>

          <h4>Personal Details</h4>
          <div>
            <div>
              <h5>Adress</h5>
              <p>{generalInformations.adress}</p>
            </div>
            <div>
              <h5>Phone Number</h5>
              <p>{generalInformations.phoneNumber}</p>
            </div>
            <div>
              <h5>Email</h5>
              <p>{generalInformations.email}</p>
            </div>
          </div>
        </SideContent>
      </Content>
    </Wrapper>
  );
};

export default Preview;
