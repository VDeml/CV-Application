

export default function ResumePreview({ nameValue, emailValue, telValue }) {
  return (
    <div className="resumePreview">
      <p>{nameValue}</p>
      <p>{emailValue}</p>
      <p>{telValue}</p>
    </div>  
  )
}