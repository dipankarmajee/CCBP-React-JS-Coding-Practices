import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'

import {BsSearch} from 'react-icons/bs'

import Header from '../Header'
import JobDetailsFilter from '../JobDetailsFilter'
import JobCards from '../JobCards'

import './index.css'

const employmentTypesList = [
  {
    label: 'Full Time',
    employmentTypeId: 'FULLTIME',
  },
  {
    label: 'Part Time',
    employmentTypeId: 'PARTTIME',
  },
  {
    label: 'Freelance',
    employmentTypeId: 'FREELANCE',
  },
  {
    label: 'Internship',
    employmentTypeId: 'INTERNSHIP',
  },
]

const salaryRangesList = [
  {
    salaryRangeId: '1000000',
    label: '10 LPA and above',
  },
  {
    salaryRangeId: '2000000',
    label: '20 LPA and above',
  },
  {
    salaryRangeId: '3000000',
    label: '30 LPA and above',
  },
  {
    salaryRangeId: '4000000',
    label: '40 LPA and above',
  },
]

const apiStatusConstant = {
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class Jobs extends Component {
  state = {
    profileDetails: {},
    jobList: {},
    searchInput: '',
    employmentJobTypesList: [],
    salaryRange: '',
    apiStatus: apiStatusConstant.initial,
    profileApiStatus: apiStatusConstant.initial,
  }

  componentDidMount() {
    this.getProfileApi()
    this.getJobApi()
  }

  searchJobs = event => {
    this.setState({searchInput: event.target.value})
    //   this.setState({searchInput: event.target.value}, this.getJobApi)
  }

  searchButton = () => {
    this.getJobApi()
  }

  getProfileApi = async () => {
    this.setState({profileApiStatus: apiStatusConstant.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const url = 'https://apis.ccbp.in/profile'
    const response = await fetch(url, options)
    if (response.ok === true) {
      const data = await response.json()
      const profileDetails = {
        name: data.profile_details.name,
        profileImageUrl: data.profile_details.profile_image_url,
        shortBio: data.profile_details.short_bio,
      }
      this.setState({profileDetails})
    } else if (response.ok === false) {
      this.setState({profileApiStatus: apiStatusConstant.failure})
      //   this.profileDetailsFailure()
    }
  }

  profileDetailsFailure = () => (
    <>
      <button type="button" onClick={this.getProfileApi}>
        Retry
      </button>
    </>
  )

  getJobApi = async () => {
    this.setState({apiStatus: apiStatusConstant.inProgress})
    const {employmentJobTypesList, salaryRange, searchInput} = this.state

    const jwtToken = Cookies.get('jwt_token')
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const apiUrl = `https://apis.ccbp.in/jobs?employment_type=${employmentJobTypesList.join()}&minimum_package=${salaryRange}&search=${searchInput}`
    const response = await fetch(apiUrl, options)
    if (response.ok === true) {
      const data = await response.json()
      const updatedData = data.jobs.map(eachJob => ({
        companyLogoUrl: eachJob.company_logo_url,
        employmentType: eachJob.employment_type,
        id: eachJob.id,
        jobDescription: eachJob.job_description,
        location: eachJob.location,
        packagePerAnnum: eachJob.package_per_annum,
        rating: eachJob.rating,
        title: eachJob.title,
      }))
      this.setState({
        jobList: updatedData,
        apiStatus: apiStatusConstant.success,
      })
    } else if (response.ok === false) {
      this.state({apiStatus: apiStatusConstant.failure})
    }
  }

  onChangeJobType = event => {
    if (event.target.checked === true) {
      this.setState(
        prevState => ({
          employmentJobTypesList: [
            ...prevState.employmentJobTypesList,
            event.target.value,
          ],
        }),
        this.getJobApi,
      )
    }
    if (event.target.checked === false) {
      this.setState(
        prevState => ({
          employmentJobTypesList: prevState.employmentJobTypesList.filter(
            eachValue => eachValue !== event.target.value,
          ),
        }),
        this.getJobApi,
      )
    }
  }

  onChangeSalaryRange = event => {
    this.setState({salaryRange: event.target.value}, this.getJobApi)
    // this.getJobApi()
  }

  profileDetailsAndJobPreference = () => {
    const {profileDetails, profileApiStatus} = this.state
    return (
      <>
        {profileApiStatus === apiStatusConstant.failure &&
          this.profileDetailsFailure()}
        <div className="profile-details">
          <img
            src={profileDetails.profileImageUrl}
            className="profile-image"
            alt="profile"
          />
          <h3 className="profile-name">{profileDetails.name}</h3>
          <p className="profile-description">{profileDetails.shortBio}</p>
        </div>

        <hr className="hr-line" />
        <div>
          <JobDetailsFilter>
            <h3>Type of Employment</h3>
            <ul>
              <li>
                {employmentTypesList.map(eachType => (
                  <li key={eachType.employmentTypeId}>
                    <label className="type-of-employment-label">
                      <input
                        value={eachType.employmentTypeId}
                        type="checkbox"
                        className="type-of-employment-input"
                        onChange={this.onChangeJobType}
                      />
                      {eachType.label}
                    </label>
                  </li>
                ))}
              </li>
            </ul>
            <hr className="hr-line" />
            <h3>Salary Range</h3>
            <ul>
              <li>
                {salaryRangesList.map(eachType => (
                  <li key={eachType.salaryRangeId}>
                    <label className="type-of-employment-label">
                      <input
                        value={eachType.salaryRangeId}
                        type="radio"
                        className="type-of-employment-input"
                        onChange={this.onChangeSalaryRange}
                        name="SalaryRange"
                      />
                      {eachType.label}
                    </label>
                  </li>
                ))}
              </li>
            </ul>
          </JobDetailsFilter>
        </div>
      </>
    )
  }

  jobCardsRender = () => {
    const {jobList} = this.state
    if (jobList.length === 0) {
      return (
        <>
          <img
            src="https://assets.ccbp.in/frontend/react-js/no-jobs-img.png"
            alt="no jobs"
            className="no-jobs"
          />
          <h2>No Jobs Found</h2>
          <p>We could not find any jobs. Try other filters</p>
        </>
      )
    }

    return (
      <>
        <ul className="job-card-container">
          {jobList.map(eachJob => (
            <JobCards key={eachJob.id} jobList={eachJob} />
          ))}
        </ul>
      </>
    )
  }

  jobFailureRetry = () => {
    this.getJobApi()
  }

  failureViewRender = () => (
    <>
      <img
        src="https://assets.ccbp.in/frontend/react-js/failure-img.png"
        alt="failure view"
        className="failure-view"
      />
      <h1>Oops! Something Went Wrong</h1>
      <p>We cannot seem to find the page you are looking for</p>
      <button type="button" className="logout-button" onClick={this.getJobApi}>
        Retry
      </button>
    </>
  )

  loaderRenderView = () => (
    <div
      className="loader-container"
      // testid="loader"
    >
      <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
    </div>
  )

  onEnterKey = event => {
    // this.setState({searchInput: event.target.value})
    if (event.key === 'Enter') {
      this.getJobApi()
    }
  }

  onSearchBarConainer = () => {
    const {searchInput} = this.state
    return (
      <div className="search-input">
        <input
          type="search"
          value={searchInput}
          placeholder="Search"
          className="search-input-bar"
          onChange={this.searchJobs}
          onKeyDown={this.onEnterKey}
        />
        <button
          //   testid="searchButton"
          type="button"
          className="search-button"
          onClick={this.searchButton}
        >
          <BsSearch className="search-icon" />
        </button>
      </div>
    )
  }

  render() {
    const {apiStatus} = this.state
    return (
      <>
        <Header />
        <div className="jobs-container">
          <div className="profile-details-lg">
            <div className="search-bar-sm">{this.onSearchBarConainer()}</div>
            {this.profileDetailsAndJobPreference()}
          </div>
          <div className="job-card-container">
            <div className="search-bar-lg">{this.onSearchBarConainer()}</div>
            {apiStatus === apiStatusConstant.failure &&
              this.failureViewRender()}

            {apiStatus === apiStatusConstant.inProgress &&
              this.loaderRenderView()}
            {apiStatus === apiStatusConstant.success && this.jobCardsRender()}
          </div>
        </div>
      </>
    )
  }
}

export default Jobs
