import ThemeContext from '../../context/ThemeContext'

import './index.css'
import Navbar from '../Navbar'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const themeClass = !isDarkTheme ? 'light-mode' : 'dark-mode'
      return (
        <>
          <Navbar />
          <div className={`page-container ${themeClass}`}>
            <img
              src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
              alt="not found"
              className="home-image"
            />
            <h1 className={themeClass}>Lost Your Way?</h1>
            <p className={themeClass}>
              We cannot seem to find the page you are looking for
            </p>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound
