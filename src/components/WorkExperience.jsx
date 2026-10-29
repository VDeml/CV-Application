import CustomInput from "./CustomInput"

export default function WorkExperience() {
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