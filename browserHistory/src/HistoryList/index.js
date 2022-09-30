import './index.css'

const HistoryList = props => {
  const {each, deleteHistory} = props
  const {timeAccessed, logoUrl, title, domainUrl, id} = each
  const onDelete = () => {
    deleteHistory(id)
  }
  return (
    <li className="list-item">
      <p className="time-text">{timeAccessed}</p>
      <div className="history-component">
        <div className="history-component-card">
          <img src={logoUrl} alt="domain logo" className="logo-img" />
          <p className="title-text">{title}</p>
          <p className="link">{domainUrl}</p>
        </div>
        <button testid="delete" onClick={onDelete} type="button">
          <img
            className="delete-log"
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default HistoryList
