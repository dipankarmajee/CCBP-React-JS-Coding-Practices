import {Component} from 'react'

import Loader from 'react-loader-spinner'

import VaccinationCoverage from '../VaccinationCoverage'
import VaccinationByGender from '../VaccinationByGender'
import VaccinationByAge from '../VaccinationByAge'
import './index.css'

const apiStatusConstant = {
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class CowinDashboard extends Component {
  state = {vaccinationData: {}, apiStatus: apiStatusConstant.initial}

  componentDidMount() {
    this.getVaccinationData()
  }

  getVaccinationData = async () => {
    this.setState({apiStatus: apiStatusConstant.inProgress})
    // const options = {
    //   method: 'GET',
    // }
    const url = 'https://apis.ccbp.in/covid-vaccination-data'
    const response = await fetch(url)
    const data = await response.json()
    console.log(response)
    if (response.ok === false) {
      this.setState({apiStatus: apiStatusConstant.failure})
    } else if (response.ok === true) {
      const updatedLast7DaysVaccination = data.last_7_days_vaccination.map(
        eachData => ({
          dose1: eachData.dose_1,
          dose2: eachData.dose_2,
          vaccineDate: eachData.vaccine_date,
        }),
      )

      const updatedData = {
        last7DaysVaccination: updatedLast7DaysVaccination,
        vaccinationByAge: data.vaccination_by_age,
        vaccinationByGender: data.vaccination_by_gender,
      }

      this.setState({
        vaccinationData: updatedData,
        apiStatus: apiStatusConstant.success,
      })
    }
  }

  apiSuccessView = () => {
    const {vaccinationData} = this.state
    const {
      last7DaysVaccination,
      vaccinationByGender,
      vaccinationByAge,
    } = vaccinationData
    return (
      <>
        <VaccinationCoverage last7DaysVaccination={last7DaysVaccination} />
        <VaccinationByGender vaccinationByGender={vaccinationByGender} />
        <VaccinationByAge vaccinationByAge={vaccinationByAge} />
      </>
    )
  }

  apiFailureView = () => (
    <>
      <img
        src="https://assets.ccbp.in/frontend/react-js/api-failure-view.png"
        alt="failure view"
        className="failure view"
      />
      <h1 className="title">Something went wrong</h1>
    </>
  )

  loader = () => (
    <div testid="loader" className="loader">
      <Loader type="ThreeDots" color="#ffffff" height={80} width={80} />
    </div>
  )

  render() {
    const {apiStatus} = this.state
    return (
      <div className="bg-container">
        <nav className="navbar">
          <img
            src="https://assets.ccbp.in/frontend/react-js/cowin-logo.png"
            alt="website logo"
            className="website-logo"
          />
          <h1 className="logo-text">Co-WIN</h1>
        </nav>
        <h1 className="title">CoWIN Vaccination in India</h1>
        <div>
          {apiStatus === apiStatusConstant.success && this.apiSuccessView()}
          {apiStatus === apiStatusConstant.failure && this.apiFailureView()}
          {apiStatus === apiStatusConstant.inProgress && this.loader()}
        </div>
      </div>
    )
  }
}

export default CowinDashboard
