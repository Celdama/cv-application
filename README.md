# CV Application

## Structure

1. A section to add general information like name, email, phone, number

2. A section to add your educational experience (school name, title of study, date of study)

3. A section to add practical experience (company name, position title, main tasks of your jobs data from and until when you worked for that company)

<App>
  <Information state={generalInformation, educationalExperiences, PracticalExperiences}>
    <div>
      <GeneralInformation updateInComponent={state.generalInformation}/>
      <EducationalExperiences updateInComponent={state.educationalExperiences} />
      <PracticalExperiences updateInComponent={state.practicalExperiences} />
    </div>
    <Preview generalInformation={} educationalExperiences={} PracticalExperiences={} >
  </Information>
</App>

## Update organization components

<App>
  <Header />
  <Informations>
    <main>
      <div>
        <GeneralInformations editMode handleChangeGeneralInformations />
        <PracticalExperiences
          editMode
          handleChangePracticalExperience
          handleAddPracticalExperience
          practicalExperiencesList
          handleDeletePracticalExperience
        />
        <EducationalExperiences
          editMode
          handleChangeEducationalExperience
          educationalExperiencesList
          handleAddEducationalExperience
          handleDeleteEducationalExperience
        />
        <button>Edit Mode toggle</button>
      <div>
      <div>
        <Preview
          editMode
          generalInformations
          practicalExperience
          practicalExperiencesList
          educationalExperience
          educationalExperiencesList
        />
      </div>
    </main>
  </Informations>
  <Footer />
  <GlobalStyle />
</App>

# next features

- [x] add button to load cv in pdf
- [x] allow user to choose a main color
- [] add reset button
