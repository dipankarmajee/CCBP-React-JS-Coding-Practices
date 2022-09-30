import './index.css'

const Navbar = props => {
  const {timer, score} = props
  return (
    <nav className="navbar">
      <img
        src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
        alt="website logo"
        className="website-logo"
      />
      <div className="score-timer">
        <li>
          <p>
            Score:<span>{score}</span>
          </p>
        </li>

        <li>
          <p>
            <img
              src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
              alt="timer"
              className="timer"
            />
            {timer} sec
          </p>
        </li>
      </div>
    </nav>
  )
}
// class Navbar extends Component {

//   render() {
//     const {score} = this.props
//     const {timer} = this.state

//   }
// }

export default Navbar
