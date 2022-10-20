import {Component} from 'react'
import Loader from 'react-loader-spinner'

import './index.css'
import Header from '../Header'
import EachCourse from '../EachCourse'

const apiStatusConstant = {
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class Home extends Component {
  state = {coursesList: [], apiStatus: apiStatusConstant.initial}

  componentDidMount() {
    this.getCoursesList()
  }

  getCoursesList = async () => {
    this.setState({apiStatus: apiStatusConstant.inProgress})
    const response = await fetch('https://apis.ccbp.in/te/courses')
    if (response.ok === true) {
      const data = await response.json()
      this.setState({
        coursesList: data.courses,
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
    this.getCoursesList()
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
    const {coursesList, apiStatus} = this.state

    return (
      <>
        <Header />
        {apiStatus === apiStatusConstant.inProgress && this.loaderRenderView()}
        {apiStatus === apiStatusConstant.failure && this.failureViewRender()}
        {apiStatus === apiStatusConstant.success && (
          <div className="home-container">
            <h1>Courses</h1>
            <ul>
              {coursesList.map(eachItem => (
                <li key={eachItem.id}>
                  <EachCourse course={eachItem} />
                </li>
              ))}
            </ul>
          </div>
        )}
      </>
    )
  }
}

export default Home
