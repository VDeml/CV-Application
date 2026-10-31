import '../styles/ResumePreview.css'

export default function ResumePreview({ personalInfo, educations, workExperiences }) {
  return (
    <div className="resumePreview">
        <div className="resumeHeader">
            <h3>{personalInfo.name}</h3>
            {personalInfo.email && (<p>E-mail: {personalInfo.email}</p>)}
            {personalInfo.tel && (<p>Telephone: {personalInfo.tel}</p>)}
        </div>
        <hr/>
        {educations.length > 0 && <h2>Education</h2>}
        {educations.length > 0 && educations.map((education, index) => 
        <div className="education" key={index} >
            {education.institution && (<p>Name of university / school: {education.institution}</p>)}
            {education.degree && (<p>Degree studied: {education.degree}</p>)}
            {education.started && (<p>From: {education.started}</p>)}
            {education.finished && (<p>To: {education.finished}</p>)}
        </div> )}
        {workExperiences.length > 0 && <h2>Work experience</h2>}
        {workExperiences.length > 0 && workExperiences.map((workExperience, index) => 
        <div className="workExperience" key={index}>
            {workExperience.company && (<p>Company: {workExperience.company}</p>)}
            {workExperience.title && (<p>Position: {workExperience.title}</p>)}
            {workExperience.description && (<p>Position description: {workExperience.description}</p>)}
            {workExperience.started && (<p>From: {workExperience.started}</p>)}
            {workExperience.finished && (<p>To: {workExperience.finished}</p>)}
        </div>)}

    </div>  
  )
}   