import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {
    mode: 'dark-mode',
    headingMode: 'heading-light',
    buttonText: 'Light Mode',
  }

  changeMode = () => {
    const {mode} = this.state
    if (mode === 'dark-mode') {
      this.setState(() => ({
        mode: 'light-mode',
        headingMode: 'heading-dark',
        buttonText: 'Dark Mode',
      }))
    } else {
      this.setState(() => ({
        mode: 'dark-mode',
        headingMode: 'heading-light',
        buttonText: 'Light Mode',
      }))
    }
  }

  render() {
    const {mode, headingMode, buttonText} = this.state
    return (
      <div className={mode}>
        <h1 className={headingMode}>Click To Change Mode</h1>
        <button className="button" type="button" onClick={this.changeMode}>
          {buttonText}
        </button>
      </div>
    )
  }
}

export default LightDarkMode
