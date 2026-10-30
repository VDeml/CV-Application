import CustomInput from "./CustomInput"

export default function Education({handleEducationChange, id}) {
  return (
    <div className="inputForm">
      <h2>Formal education</h2>
      <hr/>
      <CustomInput label="Name of institution: " placeholder="Institution name" inputType="text" name="institutionName" onChange={handleEducationChange} id={id} property="institution"/>
      <CustomInput label="Degree studied: " placeholder="Bc. in biochemistry" inputType="text" name="degree" onChange={handleEducationChange} id={id} property="degree"/>
      <CustomInput label="Started: " placeholder="dd-mm-yyyy" inputType="date" name="studiedFrom" onChange={handleEducationChange} id={id} property="started"/>
      <CustomInput label="Finished: " placeholder="dd-mm-yyyy" inputType="date" name="studiedTo" onChange={handleEducationChange} id={id} property="finished"/>
    </div>
  )
}
