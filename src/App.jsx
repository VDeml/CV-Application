import { useState } from 'react'
import PersonalInfo from './components/PersonalInfo'
import Education from './components/Education'
import WorkExperience from './components/WorkExperience'
import ResumePreview from './components/ResumePreview'
import './App.css'



function App() {

  // Name state and function
  const [nameState, setNameState] = useState('');
  function handleNameChange(e) {
    setNameState(e.target.value)
  }

  //Email state and function
  const [emailState, setEmailState] = useState('')
  function handleEmailChange(e) {
    setEmailState(e.target.value)
  }

  //Telephone state and function
  const [telState, setTelState] = useState('');
  function handleTelChange(e) {
    setTelState(e.target.value)
  }

  return (
    <>
      <main>
        <div className="formsSide">
          <PersonalInfo handleNameChange={handleNameChange}
          handleEmailChange={handleEmailChange}
          handleTelChange={handleTelChange}
          />
          <Education/>
          <WorkExperience/>
        </div>
        <div className="previewSide">
          <h2>Resume preview</h2>
          <hr/>
          <ResumePreview nameValue={nameState}
          emailValue={emailState}
          telValue={telState}
          />
        </div>
      </main>

    </>
  )
}

export default App
