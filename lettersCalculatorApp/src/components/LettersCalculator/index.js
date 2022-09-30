import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {counter: 0, inputValue: ''}

  inputWord = event => {
    if (event.target.value !== '') {
      this.setState(prevState => ({
        counter: prevState.counter + 1,
        inputValue: event.target.value,
      }))
    }

    // const {inputValue} = this.state
    if (event.target.value === '') {
      this.setState({counter: 0})
    }
  }

  render() {
    const {counter, inputValue} = this.state
    return (
      <div className="bg-container">
        <div className="img-card">
          <img
            className="img"
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            alt="letters calculator"
          />
        </div>
        <div className="count-letters-card">
          <h1>Calculate the Letters you enter</h1>
          <label htmlFor="inputText">Enter the phrase</label>
          <input
            className="input-element"
            type="text"
            id="inputText"
            onChange={this.inputWord}
            value={inputValue}
            placeholder="Enter the phrase"
          />
          <p>No.of letters: {counter}</p>
        </div>
      </div>
    )
  }
}

export default LettersCalculator
