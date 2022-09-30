import {Link} from 'react-router-dom'

import './index.css'

const JobCards = props => {
  const {jobList} = props
  const {
    companyLogoUrl,
    employmentType,
    id,
    jobDescription,
    location,
    packagePerAnnum,
    rating,
    title,
  } = jobList
  return (
    <>
      <Link to={`jobs/${id}`} className="nav-link job-card-container">
        <li className="job-card ">
          <div className="job-card-top-banner-container">
            <img
              src={companyLogoUrl}
              alt="company logo"
              className="company-logo"
            />
            <div className="job-card-top-banner-text-container">
              <h1 className="job-card-top-banner-text">{title}</h1>
              <p className="job-card-top-banner-text">{rating}</p>
            </div>
          </div>
          <div className="sub-top-banner-container">
            <div className="location-employement-type">
              <p className="extra-info-text">{location}</p>
              <p className="extra-info-text">{employmentType}</p>
            </div>
            <p>{packagePerAnnum}</p>
          </div>
          <hr className="hr-line" />
          <h4>Description</h4>
          <p className="job-description">{jobDescription}</p>
        </li>
      </Link>
    </>
  )
}

export default JobCards
