import {Component} from 'react'

import './index.css'

class DigitalTimer extends Component {
  state = {minutes: 25, seconds: 0, value: 25, isRunning: false}

  componentDidMount() {
    const {isRunning} = this.state
    if (isRunning === false) {
      this.timerId = setInterval(this.timeRmaining, 1000)
    }
  }

  componentWillUnmount() {
    // this.onReset()
    clearInterval(this.timerId)
  }

  timeRmaining = () => {
    const {seconds, isRunning} = this.state
    if (isRunning) {
      if (seconds === 0) {
        this.setState(prevState => ({
          seconds: 59,
          minutes: prevState.minutes - 1,
        }))
      } else {
        this.setState(prevState => ({
          seconds: prevState.seconds - 1,
        }))
      }
    }
  }

  onStart = () => {
    // const {isRunning} = this.state
    // if (isRunning === false) {
    //   this.timerId = setInterval(this.timeRmaining, 1000)
    // }

    this.setState(prevState => ({
      isRunning: !prevState.isRunning,
      minutes: prevState.minutes,
      seconds: prevState.seconds,
    }))
  }

  onReset = () => {
    // clearInterval(this.timerId)
    this.setState({
      minutes: 25,
      seconds: 0,
      value: 25,
      isRunning: false,
    })
  }

  onIncrement = () => {
    const {isRunning} = this.state
    if (isRunning === false) {
      this.setState(prevState => ({
        value: prevState.value + 1,
        minutes: prevState.value + 1,
      }))
    }
  }

  onDecrement = () => {
    const {isRunning} = this.state
    if (isRunning === false) {
      this.setState(prevState => ({
        value: prevState.value - 1,
        minutes: prevState.value - 1,
      }))
    }
    // this.setState(prevState => ({value: prevState.value - 1}))
  }

  render() {
    const {minutes, seconds, value, isRunning} = this.state
    const secondTweak = seconds < 10 ? `0${seconds}` : seconds
    const isRunningStatus = isRunning ? (
      <img
        src="https://assets.ccbp.in/frontend/react-js/pause-icon-img.png"
        alt="pause icon"
      />
    ) : (
      <img
        src="https://assets.ccbp.in/frontend/react-js/play-icon-img.png"
        alt="play icon"
      />
    )
    return (
      <div className="bg-container">
        <h1>Digital Timer</h1>
        <div className="timer-info">
          <div className="timer-bg">
            <div className="timer">
              <h1>
                {minutes}:{secondTweak}
              </h1>
              <p>{isRunning ? 'Running' : 'Paused'}</p>
            </div>
          </div>
          <div className="button-container">
            <div>
              <button type="button" onClick={this.onStart}>
                {isRunningStatus}
                {!isRunning ? 'Start' : 'Pause'}
              </button>
              <button type="button" onClick={this.onReset}>
                <img
                  src="https://assets.ccbp.in/frontend/react-js/reset-icon-img.png"
                  alt="reset icon"
                />
                Reset
              </button>
            </div>
            <div>
              <p>Set Timer limit</p>
              <div>
                <button type="button" onClick={this.onIncrement}>
                  +
                </button>
                <p type="text">{value}</p>
                <button type="button" onClick={this.onDecrement}>
                  -
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default DigitalTimer
