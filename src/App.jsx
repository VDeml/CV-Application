import { useState } from 'react'
import PersonalInfo from './components/PersonalInfo'
import Education from './components/Education'
import WorkExperience from './components/WorkExperience'
import ResumePreview from './components/ResumePreview'
import './App.css'



function App() {
  // Name state and function
  const [personalInfo, setPersonalInfo] = useState({
    name: '', email: '', tel: ''
  });
  function handlePersonalInfoChange(e, property) {
    const newPersonal = {...personalInfo, [property]: e.target.value}
    setPersonalInfo(newPersonal)
  }


  const [educations, setEducations] = useState([createEducationForm()]);

  function createEducationForm() {
    let institution;
    let degree;
    let started;
    let finished;
    const id = crypto.randomUUID();
    return { institution, degree, started, finished, id }
  }

  function addEducationForm() {
    const newEducationForm = createEducationForm()
    setEducations([...educations, newEducationForm])
  }

  function handleEducationChange(e, id, property) {
    setEducations(educations.map(item => {
      if(item.id === id) {
        return {...item, [property]: e.target.value}
      } else {
        return item;
      }
    }));
  }

  const[workExperiences, setWorkExperiences] = useState([createWorkExperienceForm()]);

  function createWorkExperienceForm() {
    let company;
    let title;
    let description;
    let started;
    let finished;
    const id = crypto.randomUUID();
    return { company, title, description, started, finished, id }
  }

  function addWorkExperienceForm() {
    const newWorkExperienceForm = createWorkExperienceForm()
    setWorkExperiences([...workExperiences, newWorkExperienceForm])
  }

  function handleWorkExperienceChange(e, id, property) {
    setWorkExperiences(workExperiences.map(item => {
      if(item.id === id) {
        return {...item, [property]: e.target.value}
      } else {
        return item;
      }
    }))
  }
  

  return (
    <>
      <main>
        <div className="formsSide">
          <PersonalInfo
          handlePersonalInfoChange={handlePersonalInfoChange}
          />
          
          <h2>newly created educations go here</h2>
          {educations.map(form => 
            <Education  key={form.id}
            
            id={form.id}
            handleEducationChange={handleEducationChange}
            />)}
          <button onClick={addEducationForm}>+ Add Education</button>
          
          {workExperiences.map(form =>
            <WorkExperience key={form.id}
            id={form.id}
            handleWorkExperienceChange={handleWorkExperienceChange}
            />)}
          <button onClick={addWorkExperienceForm}>+ Add Work Experience</button>
        </div>
        <div className="previewSide">
          <h2>Resume preview</h2>
          <hr/>
          <ResumePreview 
          personalInfo={personalInfo}
          educations={educations}
          workExperiences={workExperiences}
          />
        </div>
      </main>

    </>
  )
}

export default App
