import './index.css'

const YourPassword = props => {
  const {addNewPasswordList, isPasswordShowing, deletePassword} = props
  const {website, username, password, id} = addNewPasswordList

  const deleteButton = () => {
    deletePassword(id)
  }

  const withPassword = (
    <div>
      <div>
        <p className="profile-box">{website[0]}</p>
      </div>
      <div className="password-info-container">
        <div className="password-info">
          <p>{website}</p>
          <p>{username}</p>
          <p>
            {isPasswordShowing ? (
              password
            ) : (
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
                alt="stars"
              />
            )}
          </p>
        </div>
        <div>
          <button
            testid="delete"
            type="button"
            className="delete-button"
            onClick={deleteButton}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
              alt="delete"
              className="input-icon"
            />
          </button>
        </div>
      </div>
    </div>
  )

  return <>{withPassword}</>
}

export default YourPassword
