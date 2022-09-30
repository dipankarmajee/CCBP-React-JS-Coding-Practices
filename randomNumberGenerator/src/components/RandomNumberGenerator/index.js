import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {randomNumber: 0}

  generateRandomNumber = () => {
    const generateRandomNumber = Math.ceil(Math.random() * 100)
    this.setState({randomNumber: generateRandomNumber})
  }

  render() {
    const {randomNumber} = this.state
    return (
      <div className="bg-container">
        <div className="card">
          <h1>Random Number</h1>
          <p>Generate a random number in the range of 0 to 100</p>
          <div>
            <button
              className="button"
              type="button"
              onClick={this.generateRandomNumber}
            >
              Generate
            </button>
          </div>
          <p className="random-number">{randomNumber}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
