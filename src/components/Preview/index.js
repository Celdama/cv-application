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
import fakeImg from '../../images/fake-photo.jpg';

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
            <p className='description'>{generalInformations.description}</p>
          </div>
          <div className='practical-container'>
            <h4>Experiences</h4>
            {practicalExperiencesList.length > 0 && practicalExpElements}
            <div className='practical'>
              <div className='practical-date bold'>
                <span>
                  {practicalExperience.from} - {practicalExperience.to}
                </span>
              </div>
              <div className='practical-details'>
                <p className='bold'>{practicalExperience.position}</p>
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
              <div className='educational-date bold'>
                <span>
                  {educationalExperience.from} - {educationalExperience.to}
                </span>
              </div>
              <div className='educational-details'>
                <p className='bold'>
                  {educationalExperience.universityName},{' '}
                  {educationalExperience.city}
                </p>
                <p className='mb-6'>Degree: {educationalExperience.degree}</p>
                <p>Subject: {educationalExperience.subject}</p>
              </div>
            </div>
          </div>
        </MainContent>
        <SideContent>
          <img src={editMode ? placeholderImg : fakeImg} alt='' />

          <h4>Personal Details</h4>
          <div>
            <div className='mb-8 '>
              <p className='bold mb-4'>Adress</p>
              <p>{generalInformations.adress}</p>
            </div>
            <div className='mb-8'>
              <p className='bold mb-4'>Phone Number</p>
              <p>{generalInformations.phoneNumber}</p>
            </div>
            <div className='mb-8'>
              <p className='bold mb-4'>Email</p>
              <p>{generalInformations.email}</p>
            </div>
          </div>
        </SideContent>
      </Content>
    </Wrapper>
  );
};

export default Preview;
