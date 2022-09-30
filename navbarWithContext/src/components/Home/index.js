import ThemeContext from '../../context/ThemeContext'

import './index.css'

import Navbar from '../Navbar'

const Home = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const themeHomeImage = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/home-dark-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/home-light-img.png'
      const themeClass = isDarkTheme ? 'dark-mode' : 'ligth-mode'
      return (
        <>
          <Navbar />
          <div className={`page-container ${themeClass}`}>
            <img src={themeHomeImage} alt="home" className="home-image" />
            <h1 className={themeClass}>Home</h1>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default Home
