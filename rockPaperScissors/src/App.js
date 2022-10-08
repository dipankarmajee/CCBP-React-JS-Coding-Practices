import {Component} from 'react'
import Popup from 'reactjs-popup'
import './App.css'
import {RiCloseLine} from 'react-icons/ri'
import Choices from './components/Choices'

import {CustomButton, Paragraph, Heading} from './styledComponents'

const choicesList = [
  {
    id: 'ROCK',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
  },
  {
    id: 'SCISSORS',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
  },
  {
    id: 'PAPER',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
  },
]

class App extends Component {
  state = {
    score: 0,
    opponentChoice: Math.floor(Math.random() * (2 - 0 + 1)) + 0,
    yourChoiceOnGame: '',
    gameResult: '',
  }

  //   componentDidMount() {
  //     this.gameResultView()
  //   }

  opponentPlayer = () => {
    const randomChoice = Math.floor(Math.random() * (2 - 0 + 1)) + 0
    this.setState({opponentChoice: randomChoice})
  }

  onClickChoice = yourChoice => {
    const {opponentChoice} = this.state
    const opponentChoiceOnGame = choicesList[opponentChoice].id
    this.setState({yourChoiceOnGame: yourChoice})

    if (yourChoice === opponentChoiceOnGame) {
      this.setState({gameResult: 'IT IS DRAW'})
    } else if (yourChoice === 'PAPER') {
      if (opponentChoiceOnGame === 'ROCK') {
        this.setState(prevState => ({
          gameResult: 'YOU WON',
          score: prevState.score + 1,
        }))
      } else if (opponentChoiceOnGame === 'SCISSORS') {
        this.setState(prevState => ({
          gameResult: 'YOU LOSE',
          score: prevState.score - 1,
        }))
      }
    } else if (yourChoice === 'SCISSORS') {
      if (opponentChoiceOnGame === 'ROCK') {
        this.setState(prevState => ({
          gameResult: 'YOU LOSE',
          score: prevState.score - 1,
        }))
      } else if (opponentChoiceOnGame === 'PAPER') {
        this.setState(prevState => ({
          gameResult: 'YOU WON',
          score: prevState.score + 1,
        }))
      }
    } else if (yourChoice === 'ROCK') {
      if (opponentChoiceOnGame === 'SCISSORS') {
        this.setState(prevState => ({
          gameResult: 'YOU WON',
          score: prevState.score + 1,
        }))
      } else if (opponentChoiceOnGame === 'PAPER') {
        this.setState(prevState => ({
          gameResult: 'YOU LOSE',
          score: prevState.score - 1,
        }))
      }
    }
    // this.gameResultView(yourChoice, opponentChoiceOnGame)
  }

  onClickPlayAgain = () => {
    this.setState({
      opponentChoice: Math.floor(Math.random() * (2 - 0 + 1)) + 0,
      yourChoiceOnGame: '',
      gameResult: '',
    })
  }

  gameResultView = () => {
    const {gameResult, yourChoiceOnGame, opponentChoice} = this.state
    return (
      <>
        <div className="game-result-choices">
          <p>
            YOU
            {choicesList.map(eachItem => {
              if (eachItem.id === yourChoiceOnGame) {
                return (
                  <img
                    key={eachItem.id}
                    src={eachItem.imageUrl}
                    alt="your choice"
                    className="choice-image"
                  />
                )
              }
              return null
            })}
          </p>
          <p>
            OPPONENT
            <img
              src={choicesList[opponentChoice].imageUrl}
              alt="opponent choice"
              className="choice-image"
            />
          </p>
        </div>
        <div className="game-result-choices play-again-container">
          <Paragraph>{gameResult}</Paragraph>
          {/* <button
            type="button"
            className="button rules-button play-again-button"
            onClick={this.onClickPlayAgain}
          >
            PLAY AGAIN
          </button> */}
          <CustomButton
            data-testid
            type="button"
            onClick={this.onClickPlayAgain}
          >
            PLAY AGAIN
          </CustomButton>
        </div>
      </>
    )
  }

  modal = () => (
    <Popup
      trigger={
        <button type="button" className="button rules-button">
          Rules
        </button>
      }
      modal
    >
      {close => (
        <div className="modal-container">
          <button
            type="button"
            className="button rules-close-button"
            onClick={close}
          >
            <RiCloseLine />
          </button>

          <img
            src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
            alt="rules"
            className="rules-image"
          />
        </div>
      )}
    </Popup>
  )

  render() {
    const {score, gameResult} = this.state
    // console.log(gameResult)
    return (
      <div className="bg-container">
        <div className="score-container">
          <div>
            <Heading>Rock Paper Scissors</Heading>
            <h1>ROCK</h1>
            <h1>PAPER</h1>
            <h1>SCISSORS</h1>
          </div>
          <div className="score-board">
            <p>Score</p>
            <Paragraph>{score}</Paragraph>
          </div>
        </div>
        {gameResult === '' && (
          <div className="choice-container">
            <ul className="choice-container">
              {choicesList.map(eachItem => (
                <Choices
                  eachItem={eachItem}
                  key={eachItem.id}
                  onClickChoice={this.onClickChoice}
                />
              ))}
            </ul>
          </div>
        )}
        {gameResult !== '' && (
          <div className="game-result-container">{this.gameResultView()}</div>
        )}
        <div className="rules-container">{this.modal()}</div>
      </div>
    )
  }
}

export default App
