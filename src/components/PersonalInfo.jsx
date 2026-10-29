import CustomInput from "./CustomInput"

export default function PersonalInfo({ handleNameChange, handleEmailChange, handleTelChange }) {
  return (
    <div className="inputForm">
      <h2>Personal information</h2>
      <hr/>
      <CustomInput label="Name: " placeholder="Full name" inputType="text" name="personName" onChange={handleNameChange}/>
      <CustomInput label="E-mail: " placeholder="john.doe@email.com" inputType="email" name="email" onChange={handleEmailChange}/>
      <CustomInput label="Telephone number: " placeholder="+420 999 888 777" inputType="tel" name="tel" onChange={handleTelChange}/>
    </div>
  )
};