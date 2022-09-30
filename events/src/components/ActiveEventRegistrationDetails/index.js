import './index.css'

const ActiveEventRegistrationDetails = props => {
  const {activeStatusDetails} = props
  const status = {
    initial: '',
    yetToRegister: 'YET_TO_REGISTER',
    registered: 'REGISTERED',
    registrationClosed: 'REGISTRATIONS_CLOSED',
  }

  console.log(activeStatusDetails)
  return (
    <>
      {activeStatusDetails === status.initial && (
        <p>Click on an event, to view its registration details</p>
      )}
      {activeStatusDetails === status.yetToRegister && (
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
            alt="yet to register"
            className="status-image"
          />
          <p>
            A live performance brings so much to your relationship with dance
          </p>
          <button type="button">Register Here</button>
        </div>
      )}
      {activeStatusDetails === status.registered && (
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
            alt="registered"
            className="status-image"
          />
          <h1>You have already registered for the event</h1>
        </div>
      )}
      {activeStatusDetails === status.registrationClosed && (
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
            alt="registrations closed"
            className="status-image"
          />
          <h1>Registrations Are Closed Now!</h1>
          <p>Stay tuned. We will reopen...</p>
        </div>
      )}
    </>
  )
}

export default ActiveEventRegistrationDetails
