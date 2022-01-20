import React, { useState } from 'react';
import GeneralInformations from '../GeneralInformations';
import EducationalExperiences from '../EducationalExperiences';
import PracticalExperiences from '../PracticalExperiences';
import Preview from '../Preview';
import { Wrapper, Content, EditCvInfo } from './information.styles';

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

  // POUR CHARGER UN EXEMPLE UTILISER UN BOOLEAN DANS UN STATE EXEMPLE ET REMPLIR CHAQUE STATE AVEC DES FAUSSES INFO

  const handleChangeGeneralInformations = (data) => {
    console.log('from informations components');
    console.log(data);
    setGeneralInformations(data);
  };

  return (
    <Wrapper>
      <Content>
        <EditCvInfo>
          <GeneralInformations
            handleChangeGeneralInformations={handleChangeGeneralInformations}
          />
          <EducationalExperiences />
          <PracticalExperiences />
        </EditCvInfo>
        <Preview generalInformations={generalInformations} />
      </Content>
    </Wrapper>
  );
};

export default Informations;
