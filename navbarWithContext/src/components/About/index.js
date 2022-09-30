import ThemeContext from '../../context/ThemeContext'

import './index.css'
import Navbar from '../Navbar'

const About = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const themeHomeImage = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/about-dark-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/about-light-img.png'
      const themeClass = isDarkTheme ? 'dark-mode' : 'light-mode'
      return (
        <>
          <Navbar />
          <div className={`page-container ${themeClass}`}>
            <img src={themeHomeImage} alt="about" className="home-image" />
            <h1 className={themeClass}>About</h1>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default About
