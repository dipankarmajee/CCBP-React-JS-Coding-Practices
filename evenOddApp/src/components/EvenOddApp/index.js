import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {counter: 0}

  onIncrement = () => {
    const randomNumber = Math.ceil(Math.random() * 100, 2)
    this.setState(prevState => ({counter: prevState.counter + randomNumber}))
  }

  render() {
    const {counter} = this.state

    return (
      <div className="bg-container">
        <div className="card">
          <h1 className="heading-count">
            Count <span className="span-element">{counter}</span>
          </h1>
          <p className="count-status">
            {counter % 2 === 0 ? 'Count is Even' : 'Count is Odd'}
          </p>
          <div>
            <button className="button" type="button" onClick={this.onIncrement}>
              Increment
            </button>
          </div>
          <p>*Increase By Random Number Between 0 to 100</p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
