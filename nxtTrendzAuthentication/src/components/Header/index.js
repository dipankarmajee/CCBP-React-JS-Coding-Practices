import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <div className="header-container">
    <div className="top-border">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
        alt="website logo"
        className="website-logo-sm"
      />
      <Link to="/login" className="nav-link">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
          alt="nav logout"
          className="nav-icon-sm"
        />
      </Link>
    </div>
    <div className="nav-icon-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png"
        alt="nav home"
        className="nav-icon-sm"
      />
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png"
        alt="nav products"
        className="nav-icon-sm"
      />
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png"
        alt="nav cart"
        className="nav-icon-sm"
      />
    </div>
    <div className="nav-bar-lg">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
        alt="website logo"
        className="header-website-logo-lg"
      />
      <ul className="nav-bar-option-container">
        <li>
          <p className="header-option-text">Home</p>
        </li>
        <li>
          <p className="header-option-text">Products</p>
        </li>
        <li>
          <p className="header-option-text">Cart</p>
        </li>

        <Link to="/login" className="nav-link">
          <button type="button" className="logout-btn">
            Logout
          </button>
        </Link>
      </ul>
    </div>
  </div>
)

export default Header
