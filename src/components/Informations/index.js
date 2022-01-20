import React from 'react';
import GeneralInformations from '../GeneralInformations';
import EducationalExperiences from '../EducationalExperiences';
import PracticalExperiences from '../PracticalExperiences';
import Preview from '../Preview';

const Informations = () => {
  return (
    <div>
      <div>
        <GeneralInformations />
        <EducationalExperiences />
        <PracticalExperiences />
      </div>
      <Preview />
    </div>
  );
};

export default Informations;
