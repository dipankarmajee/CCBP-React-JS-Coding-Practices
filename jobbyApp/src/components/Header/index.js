import {withRouter, Link} from 'react-router-dom'
import Cookies from 'js-cookie'
import './index.css'

const Header = props => {
  const onClickLogout = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }
  return (
    <ul className="navbar">
      <Link to="/" className="nav-link">
        <img
          src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
          alt="website logo"
          className="website-logo"
        />
      </Link>
      <div className="navbar">
        <li>
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>

        <li>
          <Link to="/jobs" className="nav-link">
            Jobs
          </Link>
        </li>
      </div>
      <div>
        <li>
          <button
            type="button"
            className="logout-button"
            onClick={onClickLogout}
          >
            Logout
          </button>
        </li>
      </div>
    </ul>
  )
}
export default withRouter(Header)
