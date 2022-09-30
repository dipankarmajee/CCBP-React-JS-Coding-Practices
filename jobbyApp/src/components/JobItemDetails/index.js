import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'

import Header from '../Header'
import JobItemDetailsCard from '../JobItemDetailsCard'

import './index.css'

const apiStatusConstant = {
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class JobItemDetails extends Component {
  state = {jobDetailsList: {}, apiStatus: apiStatusConstant.initial}

  componentDidMount() {
    this.getJobDetailsApi()
  }

  getJobDetailsApi = async () => {
    this.setState({apiStatus: apiStatusConstant.inProgress})
    const {match} = this.props
    const {params} = match
    const {id} = params
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const apiUrl = `https://apis.ccbp.in/jobs/${id}`
    const response = await fetch(apiUrl, options)
    if (response.ok === true) {
      const data = await response.json()
      const updatedData = {
        jobDetails: data.job_details,
        similarJobs: data.similar_jobs,
      }
      this.setState({
        jobDetailsList: updatedData,
        apiStatus: apiStatusConstant.success,
      })
    } else if (response.ok === false) {
      this.setState({apiStatus: apiStatusConstant.failure})
    }
  }

  jobFailureRetry = () => {
    this.getJobDetailsApi()
  }

  successView = () => {
    const {jobDetailsList} = this.state
    const {jobDetails, similarJobs} = jobDetailsList
    return (
      <>
        <JobItemDetailsCard jobDetails={jobDetails} similarJobs={similarJobs} />
      </>
    )
  }

  failureView = () => (
    <>
      <img
        src="https://assets.ccbp.in/frontend/react-js/failure-img.png"
        alt="failure view"
        className="failure-view"
      />
      <h1>Oops! Something Went Wrong</h1>
      <p>We cannot seem to find the page you are looking for.</p>
      <button
        type="button"
        className="logout-button"
        onClick={this.jobFailureRetry}
      >
        Retry
      </button>
    </>
  )

  loaderView = () => (
    <div
      // testid="loader"
      className="loader-container"
    >
      <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
    </div>
  )

  render() {
    const {apiStatus} = this.state

    return (
      <>
        <Header />
        <div className="job-item-details-container">
          {apiStatus === apiStatusConstant.inProgress && this.loaderView()}
          {apiStatus === apiStatusConstant.failure && this.failureView()}
          {apiStatus === apiStatusConstant.success && this.successView()}
        </div>
      </>
    )
  }
}

export default JobItemDetails
