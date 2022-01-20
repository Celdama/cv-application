import React, { useState } from 'react';
import GeneralInformations from '../GeneralInformations';
import EducationalExperiences from '../EducationalExperiences';
import PracticalExperiences from '../PracticalExperiences';
import Preview from '../Preview';
import { Wrapper, Content, EditCvInfo } from './information.styles';
import { nanoid } from 'nanoid';

const Informations = () => {
  const [generalInformations, setGeneralInformations] = useState({
    firstName: 'John',
    lastName: 'Doe',
    title: 'Senior web dev',
    photo: '',
    adress: 'Example street 10',
    phoneNumber: '12324566',
    email: 'john.doe@gmail.com',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tempus imperdiet nisl sed vestibulum. Donec gravida, nulla eget blandit fermentum, mauris nisi rutrum libero, ac pharetra erat est sit amet tellus. Quisque fermentum dolor a interdum fermentum. Maecenas vehicula ac',
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

  // POUR CHARGER UN EXEMPLE UTILISER UN BOOLEAN DANS UN STATE EXEMPLE ET REMPLIR CHAQUE STATE AVEC DES FAUSSES INFO

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
  return (
    <Wrapper>
      <Content>
        <EditCvInfo>
          <GeneralInformations
            handleChangeGeneralInformations={handleChangeGeneralInformations}
          />
          <PracticalExperiences
            handleChangePracticalExperience={handleChangePracticalExperience}
            handleAddPracticalExperience={handleAddPracticalExperience}
          />
          <EducationalExperiences
            handleChangeEducationalExperience={
              handleChangeEducationalExperience
            }
            handleAddEducationalExperience={handleAddEducationalExperience}
          />
        </EditCvInfo>
        <Preview
          generalInformations={generalInformations}
          practicalExperience={practicalExperience}
          practicalExperiencesList={practicalExperiencesList}
          handleDeletePracticalExperience={handleDeletePracticalExperience}
          educationalExperience={educationalExperience}
          educationalExperiencesList={educationalExperiencesList}
          handleDeleteEducationalExperience={handleDeleteEducationalExperience}
        />
      </Content>
    </Wrapper>
  );
};

export default Informations;
