import './index.css'

const ScoreCard = props => {
  const {score, resetGame} = props

  const onPlayAgain = () => {
    resetGame()
  }
  return (
    <div className="scorecard-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png"
        alt="trophy"
        className="trophy"
      />
      <p>YOUR SCORE</p>
      <p className="scorecard-score">{score}</p>
      <div>
        <button
          type="button"
          onClick={onPlayAgain}
          className="play-again-button"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png"
            alt="reset"
            className="icon"
          />
          PLAY AGAIN
        </button>
      </div>
    </div>
  )
}

export default ScoreCard
