import CustomInput from "./CustomInput"

export default function PersonalInfo({ handlePersonalInfoChange }) {
  return (
    <div className="inputForm">
      <h2>Personal information</h2>
      <hr/>
      <CustomInput label="Name: " placeholder="Full name" inputType="text" name="personName" onChange={handlePersonalInfoChange} property="name"/>
      <CustomInput label="E-mail: " placeholder="john.doe@email.com" inputType="email" name="email" onChange={handlePersonalInfoChange} property="email"/>
      <CustomInput label="Telephone number: " placeholder="+420 999 888 777" inputType="tel" name="tel" onChange={handlePersonalInfoChange} property="tel"/>
    </div>
  )
};