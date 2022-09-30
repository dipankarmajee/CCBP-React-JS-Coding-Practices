import {Component} from 'react'
import './index.css'

class RegistrationForm extends Component {
  state = {
    firstName: '',
    lastName: '',
    isSubmitted: false,
    firstNameText: '',
    lastNameText: '',
  }

  onChangeFirstName = event => {
    this.setState({firstName: event.target.value})
  }

  onChangeLastName = event => {
    this.setState({lastName: event.target.value})
  }

  onBlurFirstName = event => {
    const {firstName} = this.state
    if (firstName === '') {
      this.setState({firstNameText: 'Required'})
    } else {
      this.setState({firstNameText: ''})
    }
  }

  onBlurLastName = event => {
    const {lastName} = this.state
    if (lastName === '') {
      this.setState({lastNameText: 'Required'})
    } else {
      this.setState({lastNameText: ''})
    }
  }

  onSubmitForm = event => {
    event.preventDefault()
    const {firstName, lastName} = this.state
    if (firstName === '') {
      this.onBlurFirstName()
      this.onBlurLastName()
    } else if (lastName === '') {
      this.onBlurFirstName()
      this.onBlurLastName()
    } else {
      this.setState({isSubmitted: true})
    }

    // if ((firstName === '', lastName !== '')) {
    //   this.setState({isSubmitted: true})
    // } else if (firstName === '') {
    //   this.setState({firstNameText: 'Required'})
    // } else if (lastName === '') {
    //   this.setState({lastNameText: 'Required'})
    // } else {
    //   this.setState({firstNameText: 'Required', lastNameText: 'Required'})
    // }
  }

  renderRegistration = () => {
    const {firstName, lastName, firstNameText, lastNameText} = this.state

    return (
      <form onSubmit={this.onSubmitForm}>
        <label>
          FIRST NAME
          <input
            type="text"
            onChange={this.onChangeFirstName}
            value={firstName}
            onBlur={this.onBlurFirstName}
          />
          <p className="error-text">{firstNameText}</p>
        </label>
        <label>
          LAST NAME
          <input
            type="text"
            onChange={this.onChangeLastName}
            value={lastName}
            onBlur={this.onBlurLastName}
          />
          <p className="error-text">{lastNameText}</p>
        </label>

        <button type="submit">Submit</button>
      </form>
    )
  }

  onSubmitAnotherForm = () => {
    this.setState({
      isSubmitted: false,
      firstName: '',
      lastName: '',
      firstNameText: '',
      lastNameText: '',
    })
  }

  renderRegistrationSuccess = () => (
    <div className="success-card">
      <img
        src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        alt="success"
        className="success"
      />
      <p>Submitted Successfully</p>
      <button type="button" onClick={this.onSubmitAnotherForm}>
        Submit Another Response
      </button>
    </div>
  )

  render() {
    const {isSubmitted} = this.state
    return (
      <div className="bg-container">
        <h1>Registration</h1>
        <div className="card">
          {isSubmitted
            ? this.renderRegistrationSuccess()
            : this.renderRegistration()}
        </div>
      </div>
    )
  }
}

export default RegistrationForm
