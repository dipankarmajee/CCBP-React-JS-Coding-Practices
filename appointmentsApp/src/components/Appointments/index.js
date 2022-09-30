import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import {format} from 'date-fns'
import AppointmentItem from '../AppointmentItem'
import './index.css'

class Appointments extends Component {
  state = {title: '', date: '', appointmentsList: []}

  onTitle = event => {
    this.setState({title: event.target.value})
  }

  onDate = event => {
    this.setState({date: event.target.value})
  }

  onSubmitForm = event => {
    event.preventDefault()
    const {title, date} = this.state
    const newAppointment = {
      id: uuidv4(),
      title: `${title}`,
      date: `${format(new Date(date), 'dd LLLL yyyy, EEEE')}`,
      isStar: false,
    }
    this.setState(prevState => ({
      appointmentsList: [...prevState.appointmentsList, newAppointment],
      title: '',
      date: '',
    }))
  }

  isStarYellow = value => {
    this.setState(prevState => ({
      appointmentsList: prevState.appointmentsList.map(eachItem => {
        if (eachItem.id === value) {
          return {...eachItem, isStar: !eachItem.isStar}
        }
        return eachItem
      }),
    }))
  }

  onStarredOnly = () => {
    const {appointmentsList} = this.state
    const onlyStarredList = appointmentsList.filter(
      each => each.isStar === true,
    )
    this.setState({appointmentsList: onlyStarredList})
  }

  render() {
    const {appointmentsList, title, date} = this.state
    return (
      <div className="bg-container">
        <div className="appointment-card">
          <h1>Add Appointment</h1>
          <div className="card-banner">
            <div>
              <form className="form-element" onSubmit={this.onSubmitForm}>
                <label>
                  TITLE
                  <input
                    value={title}
                    onChange={this.onTitle}
                    type="text"
                    placeholder="Title"
                    id="title"
                  />
                </label>

                <label>
                  DATE
                  <input
                    value={date}
                    onChange={this.onDate}
                    type="date"
                    placeholder="Title"
                  />
                </label>

                <div>
                  <button type="submit">Add</button>
                </div>
              </form>
            </div>
            <div>
              <img
                src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png"
                alt="appointments"
                className="banner-image"
              />
            </div>
          </div>

          <hr />
          <div>
            <h2>Appointments</h2>
            <button
              onClick={this.onStarredOnly}
              type="button"
              className="star-button"
            >
              Starred
            </button>
          </div>
          <ul>
            {appointmentsList.map(eachAppointment => (
              <AppointmentItem
                appointmentsList={eachAppointment}
                isStarYellow={this.isStarYellow}
                key={eachAppointment.id}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Appointments
