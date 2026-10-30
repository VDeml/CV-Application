

export default function ResumePreview({ personalInfo, educations, workExperiences }) {
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
        </div> )}
        {workExperiences.length > 0 && workExperiences.map((workExperience, index) => 
        <div className="workExperience" key={index}>
            <p>{workExperience.company}</p>
            <p>{workExperience.title}</p>
            <p>{workExperience.description}</p>
            <p>{workExperience.started}</p>
            <p>{workExperience.finished}</p>
        </div>)}

    </div>  
  )
}   