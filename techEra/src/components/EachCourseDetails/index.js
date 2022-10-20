import {Component} from 'react'
import Loader from 'react-loader-spinner'

import './index.css'
import Header from '../Header'

const apiStatusConstant = {
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class EachCourseDetails extends Component {
  state = {eachCourseDetails: [], apiStatus: apiStatusConstant.initial}

  componentDidMount() {
    this.getEachCourseDetails()
  }

  getEachCourseDetails = async () => {
    this.setState({apiStatus: apiStatusConstant.inProgress})
    const {match} = this.props
    const {params} = match
    const {id} = params

    const response = await fetch(`https://apis.ccbp.in/te/courses/${id}`)
    if (response.ok === true) {
      const data = await response.json()
      this.setState({
        eachCourseDetails: data,
        apiStatus: apiStatusConstant.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstant.failure})
    }
  }

  loaderRenderView = () => (
    <div className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
    </div>
  )

  failureRetry = () => {
    this.getEachCourseDetails()
  }

  failureViewRender = () => (
    <>
      <img
        src="https://assets.ccbp.in/frontend/react-js/tech-era/failure-img.png"
        alt="failure view"
        className="failure-view"
      />
      <h1>Oops! Something Went Wrong</h1>
      <p>We cannot seem to find the page you are looking for</p>
      <button
        type="button"
        className="logout-button"
        onClick={this.failureRetry}
      >
        Retry
      </button>
    </>
  )

  render() {
    const {eachCourseDetails, apiStatus} = this.state
    console.log(eachCourseDetails)

    return (
      <>
        <Header />
        {apiStatus === apiStatusConstant.inProgress && this.loaderRenderView()}
        {apiStatus === apiStatusConstant.failure && this.failureViewRender()}
        {apiStatus === apiStatusConstant.success && (
          <div className="each-course-details-container">
            <img
              src={eachCourseDetails.course_details.image_url}
              alt={eachCourseDetails.course_details.name}
              className="each-course-details-logo"
            />
            <div className="each-course-details-description-container">
              <h2>{eachCourseDetails.course_details.name}</h2>
              <p>{eachCourseDetails.course_details.description}</p>
            </div>
          </div>
        )}
      </>
    )
  }
}

export default EachCourseDetails
