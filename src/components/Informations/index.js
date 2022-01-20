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

  const [practicalExperiences, setPracticalExperiences] = useState({
    position: '',
    company: '',
    city: '',
    from: '',
    to: '',
  });

  const [educationalExperiences, setEducationalExperiences] = useState({
    universityName: '',
    city: '',
    degree: '',
    subject: '',
    from: '',
    to: '',
  });

  const [educationalExperiencesList, setEducationalExperiencesList] = useState(
    []
  );

  const [practicalExperiencesList, setPracticalExperiencesList] = useState([]);

  // POUR CHARGER UN EXEMPLE UTILISER UN BOOLEAN DANS UN STATE EXEMPLE ET REMPLIR CHAQUE STATE AVEC DES FAUSSES INFO

  const handleChangeGeneralInformations = (data) => {
    setGeneralInformations(data);
  };

  const handleChangePracticalExperiences = (data) => {
    setPracticalExperiences(data);
  };

  const handleChangeEducationalExperiences = (data) => {
    setEducationalExperiences(data);
  };

  const handleAddEducationalExperience = () => {
    setEducationalExperiencesList((prevState) => {
      return [...prevState, { id: nanoid(), ...educationalExperiences }];
    });
  };

  const handleAddPracticalExperience = () => {
    setPracticalExperiencesList((prevState) => {
      return [...prevState, { id: nanoid(), ...practicalExperiences }];
    });
  };

  return (
    <Wrapper>
      <Content>
        <EditCvInfo>
          <GeneralInformations
            handleChangeGeneralInformations={handleChangeGeneralInformations}
          />
          <PracticalExperiences
            handleChangePracticalExperiences={handleChangePracticalExperiences}
            handleAddPracticalExperience={handleAddPracticalExperience}
          />
          <EducationalExperiences
            handleChangeEducationalExperiences={
              handleChangeEducationalExperiences
            }
            handleAddEducationalExperience={handleAddEducationalExperience}
          />
        </EditCvInfo>
        <Preview
          generalInformations={generalInformations}
          practicalExperiences={practicalExperiences}
          practicalExperiencesList={practicalExperiencesList}
          educationalExperiences={educationalExperiences}
          educationalExperiencesList={educationalExperiencesList}
        />
      </Content>
    </Wrapper>
  );
};

export default Informations;
