import './index.css'

const JobItemDetailsCard = props => {
  const {jobDetails, similarJobs} = props
  const updatedJobDetails = {
    companyLogoUrl: jobDetails.company_logo_url,
    companyWebsiteUrl: jobDetails.company_website_url,
    employmentType: jobDetails.employment_type,
    jobDescription: jobDetails.job_description,
    skills: jobDetails.skills,
    lifeAtCompany: jobDetails.life_at_company,
    location: jobDetails.location,
    packagePerAnnum: jobDetails.package_per_annum,
    rating: jobDetails.rating,
    title: jobDetails.title,
  }
  const updatedLifeAtCompany = {
    description: updatedJobDetails.lifeAtCompany.description,
    imageUrl: updatedJobDetails.lifeAtCompany.image_url,
  }
  const updatedSkills = updatedJobDetails.skills.map(eachSkill => ({
    imageUrl: eachSkill.image_url,
    name: eachSkill.name,
  }))

  const updatedSimilarJobs = similarJobs.map(eachSimilarJob => ({
    companyLogoUrl: eachSimilarJob.company_logo_url,
    employmentType: eachSimilarJob.employment_type,
    jobDescription: eachSimilarJob.job_description,
    location: eachSimilarJob.location,
    rating: eachSimilarJob.rating,
    title: eachSimilarJob.title,
    id: eachSimilarJob.id,
  }))

  return (
    <div className="job-item-details-card-container">
      <li className="job-card ">
        <div className="job-card-top-banner-container">
          <img
            src={updatedJobDetails.companyLogoUrl}
            alt="job details company logo"
            className="company-logo"
          />
          <div className="job-card-top-banner-text-container">
            <h1 className="job-card-top-banner-text">
              {updatedJobDetails.title}
            </h1>
            <p className="job-card-top-banner-text">
              {updatedJobDetails.rating}
            </p>
          </div>
        </div>
        <div className="sub-top-banner-container">
          <div className="location-employement-type">
            <p className="extra-info-text">{updatedJobDetails.location}</p>
            <p className="extra-info-text">
              {updatedJobDetails.employmentType}
            </p>
          </div>
          <p>{updatedJobDetails.packagePerAnnum}</p>
        </div>
        <hr className="hr-line" />
        <div className="description-link">
          <h4>Description</h4>
          <a
            href={updatedJobDetails.companyWebsiteUrl}
            className="nav-link visit-link"
          >
            Visit
          </a>
        </div>
        <p className="job-description">{updatedJobDetails.jobDescription}</p>
        <h4>Skills</h4>
        <ul className="skills-container">
          {updatedSkills.map(eachSkill => (
            <li key={eachSkill.name} className="skills-list">
              <img
                src={eachSkill.imageUrl}
                alt={eachSkill.name}
                className="skill-logo"
              />
              {eachSkill.name}
            </li>
          ))}
        </ul>
        <h4>Life at Company</h4>
        <p className="job-description">{updatedLifeAtCompany.description}</p>
        <img
          src={updatedLifeAtCompany.imageUrl}
          alt="life at company"
          className="life-at-compnay-image"
        />
      </li>
      <h4>Similar Jobs</h4>
      <ul>
        {updatedSimilarJobs.map(eachSimilarJob => (
          <div
            className="job-item-details-card-container"
            key={eachSimilarJob.id}
          >
            <li className="job-card ">
              <div className="job-card-top-banner-container">
                <img
                  src={eachSimilarJob.companyLogoUrl}
                  alt="similar job company logo"
                  className="company-logo"
                />
                <div className="job-card-top-banner-text-container">
                  <h1 className="job-card-top-banner-text">
                    {eachSimilarJob.title}
                  </h1>
                  <p className="job-card-top-banner-text">
                    {eachSimilarJob.rating}
                  </p>
                </div>
              </div>
              <div className="description-link">
                <h4>Description</h4>
              </div>
              <p className="job-description">{eachSimilarJob.jobDescription}</p>
              <div className="sub-top-banner-container">
                <div className="location-employement-type">
                  <p className="extra-info-text">{eachSimilarJob.location}</p>
                  <p className="extra-info-text">
                    {eachSimilarJob.employmentType}
                  </p>
                </div>
              </div>
            </li>
          </div>
        ))}
      </ul>
    </div>
  )
}

export default JobItemDetailsCard
