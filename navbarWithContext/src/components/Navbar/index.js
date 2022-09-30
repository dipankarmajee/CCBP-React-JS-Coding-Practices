import {Link} from 'react-router-dom'
import './index.css'
import ThemeContext from '../../context/ThemeContext'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {toggleTheme, isDarkTheme} = value
      const onClickThemeToggle = () => {
        toggleTheme()
      }
      console.log(isDarkTheme)
      const themeClass = isDarkTheme ? 'dark-mode' : 'light-mode'
      const themeNavbarLogo = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png'
      const themeNavbarThemeIcon = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/light-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/dark-theme-img.png'
      return (
        <nav className={`navbar ${themeClass}`}>
          <img
            src={themeNavbarLogo}
            alt="website logo"
            className="website-logo"
          />
          <ul className="tag-links-container">
            <Link to="/" className={`nav-link ${themeClass}`}>
              <li>
                <p>Home</p>
              </li>
            </Link>
            <Link to="/about" className={`nav-link ${themeClass}`}>
              <li>
                <p>About</p>
              </li>
            </Link>
          </ul>
          <button
            testid="theme"
            type="button"
            className="theme-icon-button"
            onClick={onClickThemeToggle}
          >
            <img
              src={themeNavbarThemeIcon}
              alt="theme"
              className="theme-icon"
            />
          </button>
        </nav>
      )
    }}
  </ThemeContext.Consumer>
)

export default Navbar
