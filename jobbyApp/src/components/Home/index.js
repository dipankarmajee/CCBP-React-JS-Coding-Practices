// import {Component} from 'react'
import {Link} from 'react-router-dom'
import Header from '../Header'

import './index.css'

const Home = props => {
  const onClickFindJobs = () => {
    const {history} = props
    history.push('/jobs')
  }
  return (
    <>
      <Header />
      <div className="home-sm-container">
        <h1 className="home-title">Find The Job That Fits Your Life</h1>
        <p className="home-description">
          Millions of people are searching for jobs, salary <br />
          information, company reviews. Find the job that fits your <br />
          abilities and potential.
        </p>
        <Link to="/jobs" className="nav-link">
          <button
            type="button"
            className="find-job-button"
            onClick={onClickFindJobs}
          >
            Find Jobs
          </button>
        </Link>
      </div>
    </>
  )
}

export default Home
