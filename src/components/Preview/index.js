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

import placeholderImg from '../../images/placeholder-img.jpeg';
import fakePlaceholderImg from '../../images/fake-photo.jpg';

const Preview = ({
  generalInformations,
  practicalExperience,
  practicalExperiencesList,
  educationalExperience,
  educationalExperiencesList,
  editMode,
}) => {
  const practicalExpElements = practicalExperiencesList.map(
    ({ id, position, company, city, from, to }) => {
      return (
        <div key={id} className='practical'>
          <div className='practical-date'>
            <span>
              {from} - {to}
            </span>
          </div>
          <div className='practical-details'>
            <p>{position}</p>
            <p>
              {company}, {city}
            </p>
          </div>
        </div>
      );
    }
  );

  const educationalExpElements = educationalExperiencesList.map(
    ({ id, universityName, city, degree, subject, from, to }) => {
      return (
        <div key={id} className='educational'>
          <div className='educational-date'>
            <span>
              {from} - {to}
            </span>
          </div>
          <div className='educational-details'>
            <p>
              {universityName}, {city}
            </p>
            <p>Degree: {degree}</p>
            <p>Subject: {subject}</p>
          </div>
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
          <div className='practical-container'>
            <h4>Experiences</h4>
            {practicalExperiencesList.length > 0 && practicalExpElements}
            <div className='practical'>
              <div className='practical-date'>
                <span>
                  {practicalExperience.from} - {practicalExperience.to}
                </span>
              </div>
              <div className='practical-details'>
                <p>{practicalExperience.position}</p>
                <p>
                  {practicalExperience.company}, {practicalExperience.city}
                </p>
              </div>
            </div>
          </div>
          <div className='educational-container'>
            <h4>Educational</h4>
            {educationalExperiencesList.length > 0 && educationalExpElements}
            <div className='educational'>
              <div className='educational-date'>
                <span>
                  {educationalExperience.from} - {educationalExperience.to}
                </span>
              </div>
              <div className='educational-details'>
                <p>
                  {educationalExperience.universityName},{' '}
                  {educationalExperience.city}
                </p>
                <p>Degree: {educationalExperience.degree}</p>
                <p>Subject: {educationalExperience.subject}</p>
              </div>
            </div>
          </div>
        </MainContent>
        <SideContent>
          <img src={editMode ? placeholderImg : fakePlaceholderImg} alt='' />

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
