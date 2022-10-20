import {Component} from 'react'
import './App.css'

class App extends Component {
  state = {isSaved: false, inputValue: ''}

  onChangeInput = event => {
    this.setState({inputValue: event.target.value})
  }

  onClickSaved = () => {
    this.setState(prevState => ({isSaved: !prevState.isSaved}))
  }

  onClickEdit = () => {
    this.setState(prevState => ({isSaved: !prevState.isSaved}))
  }

  render() {
    const {isSaved, inputValue} = this.state
    return (
      <div className="bg-container">
        <div className="editable-text-card">
          <h2>Editable Text Input</h2>
          <div className="input-container">
            {isSaved === false ? (
              <>
                <input
                  type="text"
                  value={inputValue}
                  onChange={this.onChangeInput}
                  className="input-element"
                />
                <button
                  type="button"
                  className="button"
                  onClick={this.onClickSaved}
                >
                  Saved
                </button>
              </>
            ) : (
              <>
                <p>{inputValue}</p>
                <button
                  type="button"
                  className="button"
                  onClick={this.onClickEdit}
                >
                  Edit
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default App
