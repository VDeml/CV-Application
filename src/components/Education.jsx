import CustomInput from "./CustomInput"

export default function Education() {
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
