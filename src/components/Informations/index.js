import React, { useState } from 'react';
import GeneralInformations from '../GeneralInformations';
import EducationalExperiences from '../EducationalExperiences';
import PracticalExperiences from '../PracticalExperiences';
import Preview from '../Preview';
import { Wrapper, Content, EditCvInfo } from './information.styles';
import { nanoid } from 'nanoid';
import {
  fakeGenInformations,
  fakePracticalExp,
  fakeEducationalExp,
} from '../../fakeData';

const Informations = () => {
  const [editMode, setEditMode] = useState(true);
  const [generalInformations, setGeneralInformations] = useState({
    firstName: '',
    lastName: '',
    title: '',
    photo: '',
    adress: '',
    phoneNumber: '',
    email: '',
    description: '',
  });

  const [practicalExperience, setPracticalExperience] = useState({
    position: '',
    company: '',
    city: '',
    from: '',
    to: '',
  });

  const [educationalExperience, setEducationalExperience] = useState({
    universityName: '',
    city: '',
    degree: '',
    subject: '',
    from: '',
    to: '',
  });

  const [practicalExperiencesList, setPracticalExperiencesList] = useState([]);

  const [educationalExperiencesList, setEducationalExperiencesList] = useState(
    []
  );

  const handleChangeGeneralInformations = (data) => {
    setGeneralInformations(data);
  };

  const handleChangePracticalExperience = (data) => {
    setPracticalExperience(data);
  };

  const handleChangeEducationalExperience = (data) => {
    setEducationalExperience(data);
  };

  const handleAddPracticalExperience = () => {
    setPracticalExperiencesList((prevState) => {
      return [...prevState, { id: nanoid(), ...practicalExperience }];
    });
  };

  const handleAddEducationalExperience = () => {
    setEducationalExperiencesList((prevState) => {
      return [...prevState, { id: nanoid(), ...educationalExperience }];
    });
  };

  const handleDeleteEducationalExperience = (id) => {
    setEducationalExperiencesList((prevState) =>
      prevState.filter((experience) => experience.id !== id)
    );
  };

  const handleDeletePracticalExperience = (id) => {
    setPracticalExperiencesList((prevState) =>
      prevState.filter((experience) => experience.id !== id)
    );
  };

  const handleFakeInformations = (event) => {
    setEditMode((prevState) => !prevState);
  };

  return (
    <Wrapper>
      <Content>
        <EditCvInfo>
          <GeneralInformations
            editMode={editMode}
            handleChangeGeneralInformations={handleChangeGeneralInformations}
          />
          <PracticalExperiences
            editMode={editMode}
            handleChangePracticalExperience={handleChangePracticalExperience}
            handleAddPracticalExperience={handleAddPracticalExperience}
          />
          <EducationalExperiences
            editMode={editMode}
            handleChangeEducationalExperience={
              handleChangeEducationalExperience
            }
            handleAddEducationalExperience={handleAddEducationalExperience}
          />
        </EditCvInfo>
        <Preview
          generalInformations={
            !editMode ? fakeGenInformations : generalInformations
          }
          practicalExperience={
            !editMode ? fakePracticalExp : practicalExperience
          }
          practicalExperiencesList={practicalExperiencesList}
          handleDeletePracticalExperience={handleDeletePracticalExperience}
          educationalExperience={
            !editMode ? fakeEducationalExp : educationalExperience
          }
          educationalExperiencesList={educationalExperiencesList}
          handleDeleteEducationalExperience={handleDeleteEducationalExperience}
        />
      </Content>
      <button onClick={handleFakeInformations}>
        {!editMode ? 'back edit mode' : 'load example'}
      </button>
    </Wrapper>
  );
};

export default Informations;
