import {Component} from 'react'
import './index.css'

class Welcome extends Component {
  state = {buttonText: 'Subscribe'}

  textChanged = () => {
    const {buttonText} = this.state
    if (buttonText === 'Subscribe') {
      this.setState(() => ({buttonText: 'Subscribed'}))
    } else {
      this.setState(() => ({buttonText: 'Subscribe'}))
    }
  }

  render() {
    const {buttonText} = this.state
    return (
      <div className="bg-container">
        <h1>Welcome</h1>
        <p>Thank You, Happy Learning</p>
        <button className="button" type="button" onClick={this.textChanged}>
          {buttonText}
        </button>
      </div>
    )
  }
}

export default Welcome
