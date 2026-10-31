import CustomInput from "./CustomInput"

export default function WorkExperience({handleWorkExperienceChange, removeWorkExperience, id, index}) {
  return (
    <div className="inputForm">
      <div className="formHeader"> 
        <h2>Previous work experience {index+1}</h2>
        <button className="formRemove" onClick={() => removeWorkExperience(id)}>remove</button>
      </div>
      <hr/>
      <CustomInput label="Company name: " placeholder="Microsoft Corporation" inputType="text" name="companyName" onChange={handleWorkExperienceChange} id={id} property="company"/>
      <CustomInput label="Job title: " placeholder="Head chef" inputType="text" name="jobTitle" onChange={handleWorkExperienceChange} id={id} property="title"/>
      <label className="formRow">Job description:{" "}
        <textarea placeholder="Further describe your role, your experience, accomplishments" name="jobDescription" onChange={e => handleWorkExperienceChange(e, id, "description")}/> 
      </label>
      <CustomInput label="Started: " placeholder="dd-mm-yyyy" inputType="date" name="studiedFrom" onChange={handleWorkExperienceChange} id={id} property="started"/>
      <CustomInput label="Finished: " placeholder="dd-mm-yyyy" inputType="date" name="studiedTo" onChange={handleWorkExperienceChange} id={id} property="finished"/>
    </div>

  )
}