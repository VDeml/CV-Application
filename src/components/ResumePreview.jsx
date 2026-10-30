

export default function ResumePreview({ personalInfo, educations }) {
  return (
    <div className="resumePreview">
      <p>{personalInfo.name}</p>
      <p>{personalInfo.email}</p>
      <p>{personalInfo.tel}</p>
      {educations.length > 0 && educations.map((education, index) => 
        <div className="education" key={index} >
            <p>{education.institution}</p>
            <p>{education.degree}</p>
            <p>{education.started}</p>
            <p>{education.finished}</p>
        </div>
      )}
    </div>  
  )
}   