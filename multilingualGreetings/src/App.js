import {Component} from 'react'
import './App.css'

const languageGreetingsList = [
  {
    id: 'bfdf40eb-eec9-4a66-a493-752fe689f0d0',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/english-greetings-img.png',
    buttonText: 'English',
    imageAltText: 'english',
  },
  {
    id: '0ceda891-2a0c-49e2-8c62-68e78180bac6',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/tamil-greetings-img.png',
    buttonText: 'Tamil',
    imageAltText: 'tamil',
  },
  {
    id: '89537778-7a46-4c58-988c-0adc931d087c',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/telugu-greetings-img.png',
    buttonText: 'Telugu',
    imageAltText: 'telugu',
  },
]

class App extends Component {
  state = {activeButton: languageGreetingsList[0].buttonText}

  onClickLanguangeButton = event => {
    console.log(event.target.textContent)
    this.setState({activeButton: event.target.textContent})
  }

  render() {
    const {activeButton} = this.state

    return (
      <div className="bg-container">
        <h1>Multilingual Greetings</h1>
        <div className="button-container">
          {languageGreetingsList.map(eachButton => (
            <li key={eachButton.id}>
              <button type="button" onClick={this.onClickLanguangeButton}>
                {eachButton.buttonText}
              </button>                
            </li>
          ))}
        </div>
        <ul>
          {languageGreetingsList.map(eachImage => {
            if (eachImage.buttonText === activeButton) {
              return (
                <li key={eachImage.id}>
                  <img
                    className="image"
                    src={eachImage.imageUrl}
                    alt={eachImage.imageAltText}
                  />
                </li>
              )
            }
            return null
          })}
        </ul>
      </div>
    )
  }
}

export default App
