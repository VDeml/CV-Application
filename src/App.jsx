import { useState } from 'react'
import './App.css'

function CustomInput({ label, placeholder, inputType, inputId}) {
  const [inputText, setInputText] = useState('');

  function handleInputChange(e) {
    setInputText(e.target.value);
  }
  return (
    <label>
      {label}
      <input placeholder={placeholder} type={inputType} id={inputId}
        onChange={handleInputChange}
      ></input>
    </label>
  )
}




function PersonalInfo() {
  return (
    <div className="inputForm">
      <CustomInput label="Name: " placeholder="Full name" inputType="text" inputId="name"/>
      <CustomInput label="E-mail: " placeholder="john.doe@email.com" inputType="email" inputId="email"/>
      <CustomInput label="Telephone number: " placeholder="+420 999 888 777" inputType="tel" inputId="tel"/>
    
    
    
    </div>
    
  )
}

function Education() {
  return (
    <div className="inputForm">

    </div>
  )
}

function App() {

  return (
    <>
      <PersonalInfo></PersonalInfo>
    </>
  )
}

export default App
