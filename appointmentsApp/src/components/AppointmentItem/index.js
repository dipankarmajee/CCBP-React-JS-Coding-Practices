import './index.css'

const AppointmentItem = props => {
  const {appointmentsList, isStarYellow} = props
  const {date, title, isStar, id} = appointmentsList
  const starStatus = isStar
    ? 'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'

  const onClickStar = () => {
    isStarYellow(id)
  }
  return (
    <li>
      <div>
        <p>{title}</p>
        <button testid="star" type="button" onClick={onClickStar}>
          <img src={starStatus} alt="start" />
        </button>
      </div>
      <p>Date: {date}</p>
    </li>
  )
}

export default AppointmentItem
