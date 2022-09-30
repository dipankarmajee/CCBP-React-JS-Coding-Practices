import {Component} from 'react'
import './index.css'

class Speedometer extends Component {
  state = {counter: 0}

  accelerateBtn = () => {
    const {counter} = this.state
    if (counter < 200) {
      this.setState(prevState => ({counter: prevState.counter + 10}))
    }
  }

  applyBreakBtn = () => {
    const {counter} = this.state
    if (counter > 0) {
      this.setState(prevState => ({counter: prevState.counter - 10}))
    }
  }

  render() {
    const {counter} = this.state
    return (
      <div className="bg-container">
        <h1 className="heading">SPEEDOMETER</h1>
        <img
          className="img"
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          alt="speedometer"
        />
        <h2 className="sub-heading">Speed is {counter}mph</h2>
        <p className="description">Min Limit is 0mph, Max Limit is 200mph</p>
        <div className="button-container">
          <button
            className="accelerate-button"
            onClick={this.accelerateBtn}
            type="button"
          >
            Accelerate
          </button>
          <button
            className="apply-break-button"
            onClick={this.applyBreakBtn}
            type="button"
          >
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer
