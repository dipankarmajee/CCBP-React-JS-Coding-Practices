import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {firstName: false, lastName: false}

  firstNameStatus = () => {
    const {firstName} = this.state
    if (firstName === false) {
      this.setState(() => ({firstName: true}))
    } else {
      this.setState(() => ({firstName: false}))
    }
  }

  lastNameStatus = () => {
    const {lastName} = this.state
    if (lastName === false) {
      this.setState(() => ({lastName: true}))
    } else {
      this.setState(() => ({lastName: false}))
    }
  }

  render() {
    const {firstName, lastName} = this.state
    return (
      <div className="bg-container">
        <h1>Show/Hide</h1>
        <div className="name-card-container">
          <div className="card-container">
            <button
              className="button"
              type="button"
              onClick={this.firstNameStatus}
            >
              Show/Hide Firstname
            </button>
            {firstName ? (
              <div className="name-container">
                <p>Joe</p>
              </div>
            ) : null}
          </div>
          <div className="card-container">
            <button
              className="button"
              type="button"
              onClick={this.lastNameStatus}
            >
              Show/Hide Lastname
            </button>
            {lastName ? (
              <div className="name-container">
                <p>Jonas</p>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
