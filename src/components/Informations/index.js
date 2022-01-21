import React, { useState } from 'react';
import GeneralInformations from '../GeneralInformations';
import EducationalExperiences from '../EducationalExperiences';
import PracticalExperiences from '../PracticalExperiences';
import Preview from '../Preview';
import {
  Wrapper,
  Content,
  EditCvInfo,
  PreviewCvInfo,
} from './information.styles';
import { nanoid } from 'nanoid';
import {
  fakeGenInformations,
  fakePracticalExp,
  fakeEducationalExp,
} from '../../fakeData';

import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';

const Informations = () => {
  const [reset, setReset] = useState(false);
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

  const saveCvAsPdf = () => {
    html2canvas(document.getElementById('cv')).then((canvas) => {
      const cvData = canvas.toDataURL('cv/png');

      const pdf = new jsPDF();
      pdf.addImage(cvData, 'PNG', 0, 0);
      pdf.save('cv.pdf');
    });
  };

  const resetGenerator = () => {
    setReset(true);
    console.log(generalInformations);
  };

  return (
    <Wrapper>
      <Content>
        <main>
          <EditCvInfo>
            <GeneralInformations
              editMode={editMode}
              handleChangeGeneralInformations={handleChangeGeneralInformations}
              reset={reset}
            />
            <PracticalExperiences
              editMode={editMode}
              handleChangePracticalExperience={handleChangePracticalExperience}
              handleAddPracticalExperience={handleAddPracticalExperience}
              practicalExperiencesList={practicalExperiencesList}
              handleDeletePracticalExperience={handleDeletePracticalExperience}
            />
            <EducationalExperiences
              editMode={editMode}
              handleChangeEducationalExperience={
                handleChangeEducationalExperience
              }
              educationalExperiencesList={educationalExperiencesList}
              handleAddEducationalExperience={handleAddEducationalExperience}
              handleDeleteEducationalExperience={
                handleDeleteEducationalExperience
              }
            />
            <div className='btn-container'>
              <button className='generate-pdf-btn' onClick={saveCvAsPdf}>
                Generate PDF
              </button>
              <button
                className='edit-mode-btn'
                onClick={handleFakeInformations}
              >
                {!editMode ? 'Edit Mode' : 'Load Example'}
              </button>
              <button className='reset-btn' onClick={resetGenerator}>
                Reset
              </button>
            </div>
          </EditCvInfo>
          <PreviewCvInfo>
            <Preview
              editMode={editMode}
              generalInformations={
                !editMode ? fakeGenInformations : generalInformations
              }
              practicalExperience={
                !editMode ? fakePracticalExp : practicalExperience
              }
              practicalExperiencesList={practicalExperiencesList}
              educationalExperience={
                !editMode ? fakeEducationalExp : educationalExperience
              }
              educationalExperiencesList={educationalExperiencesList}
            />
          </PreviewCvInfo>
        </main>
      </Content>
    </Wrapper>
  );
};

export default Informations;
