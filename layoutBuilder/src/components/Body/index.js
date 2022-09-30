import './index.css'
import ConfigurationContext from '../../context/ConfigurationContext'

const Body = () => (
  <div className="body-container">
    <ConfigurationContext.Consumer>
      {value => {
        const {showContent, showLeftNavbar, showRightNavbar} = value
        return (
          <>
            {showLeftNavbar && (
              <div className="content-items left-menu">
                <h3>Left Navbar Menu</h3>
                <ul>
                  <li>Item 1</li>
                  <li>Item 2</li>
                  <li>Item 3</li>
                  <li>Item 4</li>
                </ul>
              </div>
            )}

            {showContent && (
              <div className="content-items content">
                <h3>Content</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam
                </p>
              </div>
            )}

            {showRightNavbar && (
              <div className="content-items">
                <h3>Right Navbar</h3>
                <p className="ad">Ad 1</p>
                <p className="ad">Ad 2</p>
              </div>
            )}
          </>
        )
      }}
    </ConfigurationContext.Consumer>
  </div>
)

export default Body
