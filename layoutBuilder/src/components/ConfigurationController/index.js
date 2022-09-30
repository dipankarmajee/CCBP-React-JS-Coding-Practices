import './index.css'
import ConfigurationContext from '../../context/ConfigurationContext'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        showContent,
        showLeftNavbar,
        showRightNavbar,
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value
      const onChangeShowContent = event => {
        onToggleShowContent(event.target.checked)
      }
      const onChangeShowLeftNavbar = event => {
        onToggleShowLeftNavbar(event.target.checked)
      }
      const onChangeShowRightNavbar = event => {
        onToggleShowRightNavbar(event.target.checked)
      }

      return (
        <div className="configuration-controller-container">
          <h1>Layout</h1>
          <label>
            <input
              type="checkbox"
              onChange={onChangeShowContent}
              checked={showContent}
            />
            Content
          </label>
          <label>
            <input
              type="checkbox"
              onChange={onChangeShowLeftNavbar}
              checked={showLeftNavbar}
            />
            Left Navbar
          </label>
          <label>
            <input
              type="checkbox"
              onChange={onChangeShowRightNavbar}
              checked={showRightNavbar}
            />
            Right Navbar
          </label>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default ConfigurationController
