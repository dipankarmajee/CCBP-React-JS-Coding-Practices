import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import './App.css'

class App extends Component {
  state = {charaterCounter: [], inputValue: ''}

  onChangeInputValue = event => {
    this.setState({inputValue: event.target.value})
  }

  onClickAdd = event => {
    event.preventDefault()
    const {inputValue} = this.state
    this.setState(prevState => ({
      charaterCounter: [...prevState.charaterCounter, inputValue],
      inputValue: '',
    }))
  }

  render() {
    const {charaterCounter, inputValue} = this.state

    return (
      <div className="bg-container">
        <div className="counter-data-container">
          <h2>Count the characters like a boss</h2>
          <ul>
            {charaterCounter.map(eachWord => (
              <li key={uuidv4()}>
                <p>
                  {eachWord} : {eachWord.length}
                </p>
              </li>
            ))}
          </ul>
          {charaterCounter.length === 0 && (
            <img
              src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
              alt="no user inputs"
              className="no-user-inputs"
            />
          )}
        </div>
        <div className="counter-input-container">
          <h2>Character Counter</h2>
          <form onSubmit={this.onClickAdd}>
            <input
              type="text"
              value={inputValue}
              onChange={this.onChangeInputValue}
              placeholder="Enter the Characters here"
            />
            <button type="submit">Add</button>
          </form>
        </div>
      </div>
    )
  }
}

export default App
