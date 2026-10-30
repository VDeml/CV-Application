import CustomInput from "./CustomInput"

export default function WorkExperience({handleWorkExperienceChange, id}) {
  return (
    <div className="inputForm">
      <h2>Previous work experience</h2>
      <hr/>
      <CustomInput label="Company name: " placeholder="Microsoft Corporation" inputType="text" name="companyName" onChange={handleWorkExperienceChange} id={id} property="company"/>
      <CustomInput label="Job title: " placeholder="Head chef" inputType="text" name="jobTitle" onChange={handleWorkExperienceChange} id={id} property="title"/>
      <label>Job description:{" "}
        <textarea placeholder="Further describe your role, your experience, accomplishments" name="jobDescription" onChange={e => handleWorkExperienceChange(e, id, "description")}/> 
      </label>
      <CustomInput label="Started: " placeholder="dd-mm-yyyy" inputType="date" name="studiedFrom" onChange={handleWorkExperienceChange} id={id} property="started"/>
      <CustomInput label="Finished: " placeholder="dd-mm-yyyy" inputType="date" name="studiedTo" onChange={handleWorkExperienceChange} id={id} property="finished"/>
    </div>

  )
}