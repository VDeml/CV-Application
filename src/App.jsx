import { useState } from 'react'
import './App.css'

function CustomInput({ label, placeholder, inputType, name}) {
  const [inputText, setInputText] = useState('');

  function handleInputChange(e) {
    setInputText(e.target.value);
  }
  return (
    <label>
      {label}
      <input placeholder={placeholder} type={inputType} name={name}
        onChange={handleInputChange} value={inputText}
      ></input>
    </label>
  )
}




function PersonalInfo() {
  return (
    <div className="inputForm">
      <h2>Personal information</h2>
      <hr/>
      <CustomInput label="Name: " placeholder="Full name" inputType="text" name="personName"/>
      <CustomInput label="E-mail: " placeholder="john.doe@email.com" inputType="email" name="email"/>
      <CustomInput label="Telephone number: " placeholder="+420 999 888 777" inputType="tel" name="tel"/>
    </div>
    
  )
};

function Education() {
  return (
    <div className="inputForm">
      <h2>Formal education</h2>
      <hr/>
      <CustomInput label="Name of institution: " placeholder="Institution name" inputType="text" name="institutionName"/>
      <CustomInput label="Degree studied: " placeholder="Bc. in biochemistry" inputType="text" name="degree"/>
      <CustomInput label="Started: " placeholder="dd-mm-yyyy" inputType="date" name="studiedFrom"/>
      <CustomInput label="Finished: " placeholder="dd-mm-yyyy" inputType="date" name="studiedTo"/>

    </div>
  )
}

function WorkExperience() {
  return (
    <div className="inputForm">
      <h2>Previous work experience</h2>
      <hr/>
      <CustomInput label="Company name: " placeholder="Microsoft Corporation" inputType="text" name="companyName"/>
      <CustomInput label="Job title: " placeholder="Head chef" inputType="text" name="jobTitle"/>
      <label>Job description:{" "}
        <textarea placeholder="Further describe your role, your experience, accomplishments" name="jobDescription"/> 
      </label>
      <CustomInput label="Started: " placeholder="dd-mm-yyyy" inputType="date" name="studiedFrom"/>
      <CustomInput label="Finished: " placeholder="dd-mm-yyyy" inputType="date" name="studiedTo"/>
    </div>

  )
}

function App() {

  return (
    <>
      <PersonalInfo/>
      <Education/>
      <WorkExperience/>

    </>
  )
}

export default App
