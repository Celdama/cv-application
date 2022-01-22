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
import { TwitterPicker } from 'react-color';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';

const Informations = () => {
  const [editMode, setEditMode] = useState(true);
  const [generalInformations, setGeneralInformations] = useState({});
  const [practicalExperience, setPracticalExperience] = useState({});
  const [educationalExperience, setEducationalExperience] = useState({});
  const [practicalExperiencesList, setPracticalExperiencesList] = useState([]);
  const [educationalExperiencesList, setEducationalExperiencesList] = useState(
    []
  );
  const [mainCvColor, setMainCvColor] = useState('#143e72');
  const [displayColorPicker, setDisplayColorPicker] = useState(false);

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

  const handleChangeCompleteColor = (color) => {
    setMainCvColor(color.hex);
  };

  const handleDisplayColorPicker = () => {
    setDisplayColorPicker((prevState) => !prevState.displayColorPicker);
  };

  const handleClose = () => {
    setDisplayColorPicker(false);
  };

  return (
    <Wrapper>
      <Content>
        <main>
          <EditCvInfo>
            <GeneralInformations
              editMode={editMode}
              handleChangeGeneralInformations={handleChangeGeneralInformations}
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
              <div>
                <button
                  className='reset-btn'
                  onClick={handleDisplayColorPicker}
                >
                  Pick Color
                </button>
                {displayColorPicker && editMode ? (
                  <div className='popover'>
                    <div className='cover' onClick={handleClose} />
                    <TwitterPicker
                      color={mainCvColor}
                      onChangeComplete={handleChangeCompleteColor}
                    />{' '}
                  </div>
                ) : null}
              </div>
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
              mainCvColor={mainCvColor}
            />
          </PreviewCvInfo>
        </main>
      </Content>
    </Wrapper>
  );
};

export default Informations;
